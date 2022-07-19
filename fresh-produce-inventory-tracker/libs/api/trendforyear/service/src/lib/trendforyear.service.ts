import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { trendForYearRepository } from '../../../repository/src/lib/trendforyear.repository';
//import {MailService} from '../../../../notifications/service/src/lib/notification.service';

@Injectable({})
export class TrendForYearService {
  constructor(private repo: trendForYearRepository) {}
  async getTrendsForItem(userid: number, item: string) {
    return await this.repo.getTrendsForItem(userid, item);
  }
  async getTrendsForItemAndMonth(id: number, producetype:string, month:number)
  {
    const trendForItem = await this.repo.getTrendsForItem(id,producetype);
    const months = [31,29,31,30,31,30,31,31,30,31,30,31];
    //console.log(trendForItem);
    let total = 0;
    let i =0;
    for(; i <= month-1;i++)
    {
      
        total += months[i];
    }
    const amountSales= [];
    const average = [];
    for(let k = total; k < (total+months[i]);k++)
    {
      amountSales.push(trendForItem.AmountSalesForYear[k])
      average.push(trendForItem.AverageSalesAmountForYear[k]);
    }
    return {
      id : trendForItem.id,
      produceType : trendForItem.ProduceType,
      amountSalesForMonth : amountSales,
      averageSalesForMonth :average,
      dateOfSale : trendForItem.SaleDate,
      lastRestock : trendForItem.LastRestock
    }
    

  }
  async getAll(userid: number) {
    return await this.repo.getAll(userid);
  }
  async updateYearTrend(user: number, scale: number) {
    //variables
    const Scale = await this.repo.getScaleTrend(scale);
    const weekdays = Scale.date;
    const weights = Scale.weight;
    let currentday = this.ChangetoNumber(weekdays[0]);
    let totalweightForDay = 0;
    let numRestock = 0;
    let dateOfRestock = weekdays[0];
    //loop through all weights
    for (let i = 1; i < weekdays.length; i++) {


      if (currentday == this.ChangetoNumber(weekdays[i])) {
        if (weekdays[i + 1]) {
          if (currentday == this.ChangetoNumber(weekdays[i + 1])) {
            if (weights[i - 1] - weights[i] > 0) {
              totalweightForDay =
                totalweightForDay + (weights[i - 1] - weights[i]);
            } else {
              numRestock = weights[i] - weights[i - 1];
              dateOfRestock = weekdays[i];
            }
          }
        }
      }
      if (currentday != this.ChangetoNumber(weekdays[i])) {
        if (weekdays[i + 1]) {
          if (currentday == this.ChangetoNumber(weekdays[i + 1])) {
            if (weights[i - 1] - weights[i] > 0) {
              totalweightForDay =
                totalweightForDay + (weights[i - 1] - weights[i]);
            } else {
              numRestock = weights[i] - weights[i - 1];
              dateOfRestock = weekdays[i];
            }
          }
        }
      }

      if (currentday != this.ChangetoNumber(weekdays[i])) {
        if (weekdays[i + 1]) {
          if (currentday != this.ChangetoNumber(weekdays[i + 1])) {
            if (weights[i - 1] - weights[i] > 0) {
              totalweightForDay =
                totalweightForDay + (weights[i - 1] - weights[i]);
            } else {
              numRestock = weights[i] - weights[i - 1];
              dateOfRestock = weekdays[i];
            }
          }
        }
        //const Day = this.getDayNumber(weekdays[i].getDay());
        const trendsForDayAnditem = await this.repo.getTrendsForItem(
          user,
          Scale.ProduceType
        );
        let trending =
          trendsForDayAnditem.AverageSalesAmountForYear[this.ChangetoNumber(weekdays[i])] *
          trendsForDayAnditem.AmountSalesForYear[this.ChangetoNumber(weekdays[i])];
        trending = trending + totalweightForDay;
        if (trending != 0) {
          const amountofDaysTotal = 1 + trendsForDayAnditem.AmountSalesForYear[this.ChangetoNumber(weekdays[i])];
          trending = trending / amountofDaysTotal;
          //update amount of days for calculations
          const year = trendsForDayAnditem.AmountSalesForYear;
          year[this.ChangetoNumber(weekdays[i])] = amountofDaysTotal;
          await this.repo.updateAmountSales(
            user,
            Scale.ProduceType,
            year
          );
          //update average produce on scale
          const average = trendsForDayAnditem.AverageSalesAmountForYear;
          average[this.ChangetoNumber(weekdays[i])] = trending;
          await this.repo.updateTrendSales(
            user,
            Scale.ProduceType,
            average
          );
          totalweightForDay = 0;
        }
      }
      if (currentday == this.ChangetoNumber(weekdays[i])) {
        if (weekdays[i + 1]) {
          if (currentday != this.ChangetoNumber(weekdays[i + 1])) {
            if (weights[i - 1] - weights[i] > 0) {
              totalweightForDay =
                totalweightForDay + (weights[i - 1] - weights[i]);
            } else {
              numRestock = weights[i] - weights[i - 1];
              dateOfRestock = weekdays[i];
            }
          }
        }
        //const Day = this.getDayNumber(weekdays[i].getDay());
        const trendsForDayAnditem = await this.repo.getTrendsForItem(
            user,
            Scale.ProduceType
          );
          let trending =
            trendsForDayAnditem.AverageSalesAmountForYear[this.ChangetoNumber(weekdays[i])] *
            trendsForDayAnditem.AmountSalesForYear[this.ChangetoNumber(weekdays[i])];
          trending = trending + totalweightForDay;
          if (trending != 0) {
            const amountofDaysTotal = 1 + trendsForDayAnditem.AmountSalesForYear[this.ChangetoNumber(weekdays[i])];
            trending = trending / amountofDaysTotal;
            //update amount of days for calculations
            const year = trendsForDayAnditem.AmountSalesForYear;
            year[this.ChangetoNumber(weekdays[i])] = amountofDaysTotal;
            await this.repo.updateAmountSales(
              user,
              Scale.ProduceType,
              year
            );
            //update average produce on scale
            const average = trendsForDayAnditem.AverageSalesAmountForYear;
            average[this.ChangetoNumber(weekdays[i])] = trending;
            await this.repo.updateTrendSales(
              user,
              Scale.ProduceType,
              average
            );
            totalweightForDay = 0;
        }
      }
      //const Day = this.getDayNumber(weekdays[i].getDay());
      const trendsForDayAnditem = await this.repo.getTrendsForItem(
        user,
        Scale.ProduceType
      );
      const dateOfsale = trendsForDayAnditem.SaleDate;
      const restocking = trendsForDayAnditem.LastRestock;
      if (!dateOfsale || !restocking) {
        const timeForSale = new Date(
          dateOfRestock.getTime() + 5 * 24 * 60 * 60 * 1000
        );
        await this.repo.updateDateofSale(
          user,
          Scale.ProduceType,
          timeForSale
        );
        await this.repo.updateLastRestock(
          user,
          Scale.ProduceType,
          dateOfRestock
        );
      } else {
        if (restocking.getDate() != dateOfRestock.getDate()) {
          const total = weights[i];
          const addDays = (numRestock / total) * 5;
          const timeForSale = new Date(
            dateOfsale.getTime() + addDays * 24 * 60 * 60 * 1000
          );
          await this.repo.updateDateofSale(
            user,
            Scale.ProduceType,
            timeForSale
          );
        }
      }

      currentday = weekdays[i].getDate();
    }
    //end of loop






    return await this.deleteAllScaleTrendData(
      scale,
      Scale.ProduceType,
      weekdays[weekdays.length - 1],
      weights[weights.length - 1]
    );
  }
  async deleteAllScaleTrendData(
    scale: number,
    item: string,
    lastvalDate: Date,
    lastvalWeight: number
  ) {
    return await this.repo.deleteAllScaleTrendData(
      scale,
      item,
      lastvalDate,
      lastvalWeight
    );
  }

  //helper functions
  getDay(Weekday: string) {
    let weekday: Prisma.EnumWeekdaysNullableFilter;
    switch (Weekday) {
      case 'Monday': {
        weekday = { equals: 'Monday' };
        break;
      }
      case 'Tuesday': {
        weekday = { equals: 'Tuesday' };
        break;
      }
      case 'Wednesday': {
        weekday = { equals: 'Wednesday' };
        break;
      }
      case 'Thursday': {
        weekday = { equals: 'Thursday' };
        break;
      }
      case 'Friday': {
        weekday = { equals: 'Friday' };
        break;
      }
      case 'Saterday': {
        weekday = { equals: 'Saterday' };
        break;
      }
      case 'Sunday': {
        weekday = { equals: 'Sunday' };
        break;
      }
      default: {
        return null;
      }
    }
    return weekday;
  }
  getDayNumber(Weekday: number) {
    let weekday: Prisma.EnumWeekdaysNullableFilter;
    switch (Weekday) {
      case 1: {
        weekday = { equals: 'Monday' };
        break;
      }
      case 2: {
        weekday = { equals: 'Tuesday' };
        break;
      }
      case 3: {
        weekday = { equals: 'Wednesday' };
        break;
      }
      case 4: {
        weekday = { equals: 'Thursday' };
        break;
      }
      case 5: {
        weekday = { equals: 'Friday' };
        break;
      }
      case 6: {
        weekday = { equals: 'Saterday' };
        break;
      }
      case 0: {
        weekday = { equals: 'Sunday' };
        break;
      }
      default: {
        return null;
      }
    }
    return weekday;
  }
  ChangetoNumber(date:Date)
  {
    const months = [31,29,31,30,31,30,31,31,30,31,30,31];
    const month = date.getMonth();
    const day = date.getDate();
    let total = 0;
    for(let i =0; i <= month;i++)
    {
        total += months[i];
    }
    total += day;
    return total-1;
  }
}

