import { Bar ,Line, Pie } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
)

/* eslint-disable-next-line */
export interface ChartProps {
  type:string,
  fruit:string,
  dataMonday: [[],[],[],[]],
  dataTuesday: [[],[],[],[]],
  dataWednesday: [[],[],[],[]],
  dataThursday: [[],[],[],[]],
  dataFriday: [[],[],[],[]],
  dataSaturday: [[],[],[],[]],
  dataSunday: [[],[],[],[]],
  data:[[],[],[]],
  lineData:any[];
}


export function Chart(props: ChartProps) {

  const hasWindow = typeof window !== 'undefined';

  const width = hasWindow ? window.innerWidth : null;

  let FruitVeg = [0,0,0,0,0,0,0,0,0,0,0,0];
  let Meat = [0,0,0,0,0,0,0,0,0,0,0,0];
  let Pastries = [0,0,0,0,0,0,0,0,0,0,0,0];

  if(props.data[0] != undefined)
  {
    FruitVeg = props.data[0];
  }

  if(props.data[1] != undefined)
  {
    Meat = props.data[1];
  }

  if(props.data[2] != undefined)
  {
    Pastries = props.data[2];
  }

    if(props.type == "Bar")
    {
      const data = {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        datasets:[
          {
            label:"Fruit&Veg",
            borderRadius:5,
            data:[FruitVeg[0],FruitVeg[1],FruitVeg[2],FruitVeg[3],FruitVeg[4],FruitVeg[5],FruitVeg[6],FruitVeg[7],FruitVeg[8],FruitVeg[9],FruitVeg[10],FruitVeg[11]],
            backgroundColor: [
              "rgba(255,50,50,0.5)"
            ],
            borderColor: [
              'rgb(255, 0, 0,1)',
              'rgb(255, 0, 0,1)',
              'rgb(255, 0, 0,1)',
              'rgb(255, 0, 0,1)',
            ],
            barThickness:width/75,
            borderWidth: 1
          },{
            label:"Poultry&Meat",
            borderRadius:5,
            data:[Meat[0],Meat[1],Meat[2],Meat[3],Meat[4],Meat[5],Meat[6],Meat[7],Meat[8],Meat[9],Meat[10],Meat[11]],
            backgroundColor: [
              "rgba(50,255,50,0.5)"
            ],
            borderColor: [
              'rgb(0, 255, 0,1)',
              'rgb(0, 255, 0,1)',
              'rgb(0, 255, 0,1)',
              'rgb(0, 255, 0,1)',
            ],
            barThickness:width/75,
            borderWidth: 1
          },{
            label:"Pastries",
            borderRadius:5,
            data:[Pastries[0],Pastries[1],Pastries[2],Pastries[3],Pastries[4],Pastries[5],Pastries[6],Pastries[7],Pastries[8],Pastries[9],Pastries[10],Pastries[11]],
            backgroundColor: [
              "rgba(255,156,43,0.5)"
            ],
            borderColor: [
              'rgb(255, 137, 0,1)',
              'rgb(255, 137, 0,1)',
              'rgb(255, 137, 0,1)',
              'rgb(255, 137, 0,1)',
            ],
            barThickness:width/75,
            borderWidth: 1
          }
        ]
      }

      return (
        <div>
          <Bar data={data}></Bar>
        </div>
      );
    }
    else if(props.type == "Line")
    {
      let data = {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
      ],
      datasets:[
        {
          label: props.fruit,
          data: [FruitVeg[0],FruitVeg[1],FruitVeg[2],FruitVeg[3],FruitVeg[4],FruitVeg[5],FruitVeg[6],FruitVeg[7],FruitVeg[8],FruitVeg[9],FruitVeg[10],FruitVeg[11]],
          borderColor: "rgba(70, 3, 255,1)"
        }
      ]
      };

      if(props.fruit == "Meat")
      {
        data = {
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
          ],
          datasets:[
            {
              label: props.fruit,
              data: [Meat[0],Meat[1],Meat[2],Meat[3],Meat[4],Meat[5],Meat[6],Meat[7],Meat[8],Meat[9],Meat[10],Meat[11]],
              borderColor: "rgba(87, 130, 0,1)"
            }
          ]
        }
      } 
      else if(props.fruit == "Pastries")
      {
        data = {
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
          ],
          datasets:[
            {
              label: props.fruit,
              data: [Pastries[0],Pastries[1],Pastries[2],Pastries[3],Pastries[4],Pastries[5],Pastries[6],Pastries[7],Pastries[8],Pastries[9],Pastries[10],Pastries[11]],
              borderColor: "rgba(255, 112, 3,1)"
            }
          ]
        }
      }

      return (
        <div>
          <Line data={data}></Line>
        </div>
      );
    }
    else
    {
      const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };

      return(
        <div>
          <Pie data={data}></Pie>
        </div>
      )
    }
}

export default Chart;
