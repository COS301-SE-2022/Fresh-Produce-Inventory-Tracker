import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { trendRepository } from '../../../repository/src/lib/trend.repository';
//import {MailService} from '../../../../notifications/service/src/lib/notification.service';

@Injectable({})
export class TrendService {
  constructor(private repo: trendRepository) {}
  async getTrendsForItem(userid: number, item: string) {
    return await this.repo.getTrendsForItem(userid, item);
  }
  async getTrendsForDayAndItem(userid: number, item: string, Weekday: string) {
    const weekday = this.getDay(Weekday);
    if (weekday != null) {
      return await this.repo.getTrendsForDayAndItem(userid, item, weekday);
    }
  }
  async getAll(userid: number) {
      return await this.repo.getAll(userid);
    
  }
  async getTrendsAllTrendsForDay(userid: number, Weekday: string) {
    const weekday = this.getDay(Weekday);
    if (weekday != null) {
      return await this.repo.getTrendsAllTrendsForDay(userid, weekday);
    }
  }
  async updateTrend(user: number, scale: number) {
    //variables
    const Scale = await this.repo.getScaleTrend(scale);
    const weekdays = Scale.date;
    const weights = Scale.weight;
    let currentday = weekdays[0].getDate();
    let totalweightForDay = 0;
    //loop through all weights
    for (let i = 1; i < weekdays.length; i++) {
      if (
        currentday == weekdays[i].getDate() 
        
      ) {
        if(weekdays[i + 1] )
          {
          if(currentday == weekdays[i + 1].getDate() )
          {
          if (weights[i - 1] - weights[i] > 0) {
            totalweightForDay = totalweightForDay + (weights[i - 1] - weights[i]);
          }
        }
      }
      }
      if (
        currentday != weekdays[i].getDate() 
        
      ) {
        if(weekdays[i + 1])
        {if(currentday == weekdays[i + 1].getDate()){
        if (weights[i - 1] - weights[i] > 0) {
          totalweightForDay = totalweightForDay + (weights[i - 1] - weights[i]);
        }}}
      }

      if (
        currentday != weekdays[i].getDate()
        
      ) {
        if(weekdays[i + 1])
        {if(currentday != weekdays[i + 1].getDate())
        {if (weights[i - 1] - weights[i] > 0) {
          totalweightForDay = totalweightForDay + (weights[i - 1] - weights[i]);
        }}}
        const Day = this.getDayNumber(weekdays[i].getDay());
        const trendsForDayAnditem = await this.repo.getTrendsForDayAndItem(
          user,
          Scale.ProduceType,
          Day
        );
        let trending =
          trendsForDayAnditem.AverageSalesAmount *
          trendsForDayAnditem.AmountSales;
        trending = trending + totalweightForDay;
        if (trending != 0) {
          const amountofDaysTotal = 1 + trendsForDayAnditem.AmountSales;
          trending = trending / amountofDaysTotal;
          //update amount of days for calculations
          await this.repo.updateAmountSales(
            user,
            Day,
            Scale.ProduceType,
            amountofDaysTotal
          );
          //update average produce on scale
          await this.repo.updateTrendSales(
            user,
            Scale.ProduceType,
            Day,
            trending
          );
          totalweightForDay = 0;
        }
      }
      if (
        currentday == weekdays[i].getDate() 
      ) {
        if(weekdays[i + 1])
        {if(currentday != weekdays[i + 1].getDate())
        {if (weights[i - 1] - weights[i] > 0) {
          totalweightForDay = totalweightForDay + (weights[i - 1] - weights[i]);
        }}}
        const Day = this.getDayNumber(weekdays[i].getDay());
        const trendsForDayAnditem = await this.repo.getTrendsForDayAndItem(
          user,
          Scale.ProduceType,
          Day
        );
        let trending =
          trendsForDayAnditem.AverageSalesAmount *
          trendsForDayAnditem.AmountSales;
        trending = trending + totalweightForDay;
        if (trending != 0) {
          const amountofDaysTotal = 1 + trendsForDayAnditem.AmountSales;
          trending = trending / amountofDaysTotal;
          //update amount of days for calculations
          await this.repo.updateAmountSales(
            user,
            Day,
            Scale.ProduceType,
            amountofDaysTotal
          );
          //update average produce on scale
          await this.repo.updateTrendSales(
            user,
            Scale.ProduceType,
            Day,
            trending
          );
          totalweightForDay = 0;
        }
      }
      currentday = weekdays[i].getDate();
    }
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
}
