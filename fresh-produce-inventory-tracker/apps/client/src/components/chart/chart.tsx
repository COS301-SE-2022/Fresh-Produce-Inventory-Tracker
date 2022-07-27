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
  data:[[],[],[]]
}


export function Chart(props: ChartProps) {

  const hasWindow = typeof window !== 'undefined';

  const width = hasWindow ? window.innerWidth : null;

  console.log(width);
  const Apples = props.data[0];
  const Pears = props.data[1];
  const Oranges = props.data[2];
  const Grapes = [];

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
            data:[Apples[0],Apples[1],Apples[2],Apples[3],Apples[4],Apples[5],Apples[6],Apples[7],Apples[8],Apples[9],Apples[10],Apples[11]],
            backgroundColor: [
              "rgba(255,50,50,0.5)",
              "rgba(255,50,50,0.5)",
              "rgba(255,50,50,0.5)",
              "rgba(255,50,50,0.5)",
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
            data:[Pears[0],Pears[1],Pears[2],Pears[3],Pears[4],Pears[5],Pears[6],Pears[7],Pears[8],Pears[9],Pears[10],Pears[11]],
            backgroundColor: [
              "rgba(50,255,50,0.5)",
              "rgba(50,255,50,0.5)",
              "rgba(50,255,50,0.5)",
              "rgba(50,255,50,0.5)",
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
            data:[Oranges[0],Oranges[1],Oranges[2],Oranges[3],Oranges[4],Oranges[5],Oranges[6],Oranges[7],Oranges[8],Oranges[9],Oranges[10],Oranges[11]],
            backgroundColor: [
              "rgba(255,156,43,0.5)",
              "rgba(255,156,43,0.5)",
              "rgba(255,156,43,0.5)",
              "rgba(255,156,43,0.5)",
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
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      datasets:[
        {
          label: "Week 1",
          data: [Grapes[0],Grapes[1],Grapes[2],Grapes[3],Grapes,Grapes[5],Grapes[6]],
          borderColor: "rgba(70, 3, 255,1)"
        }
      ]
      };

      if(props.fruit == "Apples")
      {
        data = {
          labels: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          datasets:[
            {
              label: "Average",
              data: [Apples[0],Apples[1],Apples[2],Apples[3],Apples,Apples[5],Apples[6]],
              borderColor: "rgba(255,0,0,1)"
            }
          ]
        }
      }
      else if(props.fruit == "Pears")
      {
        data = {
          labels: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          datasets:[
            {
              label: "Average",
              data: [Pears[0],Pears[1],Pears[2],Pears[3],Pears,Pears[5],Pears[6]],
              borderColor: "rgba(87, 130, 0,1)"
            }
          ]
        }
      } 
      else if(props.fruit == "Oranges")
      {
        data = {
          labels: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          datasets:[
            {
              label: "Average",
              data: [Oranges[0],Oranges[1],Oranges[2],Oranges[3],Oranges,Oranges[5],Oranges[6]],
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
