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
}


export function Chart(props: ChartProps) {

  const hasWindow = typeof window !== 'undefined';

  const width = hasWindow ? window.innerWidth : null;

  console.log(width);
  const Apples = [];
  const Pears = [];
  const Oranges = []
  const Grapes = []

  if(props.dataMonday != undefined)
  {
    Apples.push(Object.values(props.dataMonday[3]));
    Pears.push(Object.values(props.dataMonday[0]));
    Oranges.push(Object.values(props.dataMonday[1]));
    Grapes.push(Object.values(props.dataMonday[2]));
  }
  if(props.dataTuesday != undefined)
  {
     Apples.push(Object.values(props.dataTuesday[3]));
     Pears.push(Object.values(props.dataTuesday[0]));
     Oranges.push(Object.values(props.dataTuesday[1]));
     Grapes.push(Object.values(props.dataTuesday[2]));
  }
  if(props.dataWednesday != undefined)
  {
     Apples.push(Object.values(props.dataWednesday[3]));
     Pears.push(Object.values(props.dataWednesday[0]));
     Oranges.push(Object.values(props.dataWednesday[1]));
     Grapes.push(Object.values(props.dataWednesday[2]));
  }
  if(props.dataThursday != undefined)
  {
     Apples.push(Object.values(props.dataThursday[3]));
     Pears.push(Object.values(props.dataThursday[0]));
     Oranges.push(Object.values(props.dataThursday[1]));
     Grapes.push(Object.values(props.dataThursday[2]));
  }
  if(props.dataFriday != undefined)
  {
     Apples.push(Object.values(props.dataFriday[3]));
     Pears.push(Object.values(props.dataFriday[0]));
     Oranges.push(Object.values(props.dataFriday[1]));
     Grapes.push(Object.values(props.dataFriday[2]));
  }
  if(props.dataSaturday != undefined)
  {
     Apples.push(Object.values(props.dataSaturday[3]));
     Pears.push(Object.values(props.dataSaturday[0]));
     Oranges.push(Object.values(props.dataSaturday[1]));
     Grapes.push(Object.values(props.dataSaturday[2]));
  }
  if(props.dataSunday != undefined)
  {
     Apples.push(Object.values(props.dataSunday[3]));
     Pears.push(Object.values(props.dataSunday[0]));
     Oranges.push(Object.values(props.dataSunday[1]));
     Grapes.push(Object.values(props.dataSunday[2]));
  }

  if(Apples.length != 0)
  {
    if(props.type == "Bar")
    {
      const data = {
        labels: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        datasets:[
          {
            label:"Apples",
            borderRadius:5,
            data:[Apples[0][4],Apples[1][4],Apples[2][4],Apples[3][4],Apples[4][4],Apples[5][4],Apples[6][4]],
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
            barThickness:width/46,
            borderWidth: 1
          },{
            label:"Pears",
            borderRadius:5,
            data:[Pears[0][4],Pears[1][4],Pears[2][4],Pears[3][4],Pears[4][4],Pears[5][4],Pears[6][4]],
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
            barThickness:width/46,
            borderWidth: 1
          },{
            label:"Oranges",
            borderRadius:5,
            data:[Oranges[0][4],Oranges[1][4],Oranges[2][4],Oranges[3][4],Oranges[4][4],Oranges[5][4],Oranges[6][4]],
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
            barThickness:width/46,
            borderWidth: 1
          },{
            label:"Grapes",
            borderRadius:5,
            data:[Grapes[0][4],Grapes[1][4],Grapes[2][4],Grapes[3][4],Grapes[4][4],Grapes[5][4],Grapes[6][4]],
            backgroundColor: [
              "rgba(107,53,255,0.5)",
              "rgba(107,53,255,0.5)",
              "rgba(107,53,255,0.5)",
              "rgba(107,53,255,0.5)",
            ],
            borderColor: [
              'rgb(102, 0, 255,1)',
              'rgb(102, 0, 255,1)',
              'rgb(102, 0, 255,1)',
              'rgb(102, 0, 255,1)'
            ],
            barThickness:width/46,
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
          data: [Grapes[0][4],Grapes[1][4],Grapes[2][4],Grapes[3][4],Grapes[4][4],Grapes[5][4],Grapes[6][4]],
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
              data: [Apples[0][4],Apples[1][4],Apples[2][4],Apples[3][4],Apples[4][4],Apples[5][4],Apples[6][4]],
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
              data: [Pears[0][4],Pears[1][4],Pears[2][4],Pears[3][4],Pears[4][4],Pears[5][4],Pears[6][4]],
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
              data: [Oranges[0][4],Oranges[1][4],Oranges[2][4],Oranges[3][4],Oranges[4][4],Oranges[5][4],Oranges[6][4]],
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
  else
  {
    if(props.type == "Bar")
    {
      const data = {
        labels: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        datasets:[
          {
            label:"Apples",
            borderRadius:5,
            data:[0,0,0,0,0,0,0],
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
            barThickness:width/46,
            borderWidth: 1
          },{
            label:"Pears",
            borderRadius:5,
            data:[0,0,0,0,0,0,0],
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
            barThickness:width/46,
            borderWidth: 1
          },{
            label:"Oranges",
            borderRadius:5,
            data:[0,0,0,0,0,0,0],
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
            barThickness:width/46,
            borderWidth: 1
          },{
            label:"Grapes",
            borderRadius:5,
            data:[0,0,0,0,0,0,0],
            backgroundColor: [
              "rgba(107,53,255,0.5)",
              "rgba(107,53,255,0.5)",
              "rgba(107,53,255,0.5)",
              "rgba(107,53,255,0.5)",
            ],
            borderColor: [
              'rgb(102, 0, 255,1)',
              'rgb(102, 0, 255,1)',
              'rgb(102, 0, 255,1)',
              'rgb(102, 0, 255,1)'
            ],
            barThickness:width/46,
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
          data: [7,5,6,3,4],
          borderColor: "rgba(255,0,0,1)"
        },
        {
          label: "Week 2",
          data: [3,8,5,9,5],
          fill: false,
          borderColor: "rgba(0,255,0,1)"
        },
        {
          label: "Week 3",
          data: [5,2,4,2,1],
          borderColor: "rgba(0,0,255,1)"
        },
        {
          label: "Week 4",
          data: [5,7,8,2,8],
          fill: false,
          borderColor: "rgbs(255,255,0,1)"
        }
      ]
      };

      if(props.fruit == "ApplesMonday")
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
              label: "Week 1",
              data: [7,5,6,3,4],
              borderColor: "rgba(255,0,0,1)"
            },
            {
              label: "Week 2",
              data: [3,8,5,9,5],
              fill: false,
              borderColor: "rgba(0,255,0,1)"
            },
            {
              label: "Week 3",
              data: [5,2,4,2,1],
              borderColor: "rgba(0,0,255,1)"
            },
            {
              label: "Week 4",
              data: [5,7,8,2,8],
              fill: false,
              borderColor: "rgbs(255,255,0,1)"
            }
          ]
        }
      }
      else if(props.fruit == "PearsMonday")
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
              label: "Week 1",
              data: [7,5,6,3,4],
              borderColor: "rgba(255,0,0,1)"
            },
            {
              label: "Week 2",
              data: [3,8,5,9,5],
              fill: false,
              borderColor: "rgba(0,255,0,1)"
            },
            {
              label: "Week 3",
              data: [5,2,4,2,1],
              borderColor: "rgba(0,0,255,1)"
            },
            {
              label: "Week 4",
              data: [5,7,8,2,8],
              fill: false,
              borderColor: "rgbs(255,255,0,1)"
            }
          ]
        }
      } 
      else if(props.fruit == "OrangesMonday")
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
              label: "Week 1",
              data: [7,5,6,3,4],
              borderColor: "rgba(255,0,0,1)"
            },
            {
              label: "Week 2",
              data: [3,8,5,9,5],
              fill: false,
              borderColor: "rgba(0,255,0,1)"
            },
            {
              label: "Week 3",
              data: [5,2,4,2,1],
              borderColor: "rgba(0,0,255,1)"
            },
            {
              label: "Week 4",
              data: [5,7,8,2,8],
              fill: false,
              borderColor: "rgbs(255,255,0,1)"
            }
          ]
        }
      }
      else
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
              label: "Week 1",
              data: [7,5,6,3,4],
              borderColor: "rgba(255,0,0,1)"
            },
            {
              label: "Week 2",
              data: [3,8,5,9,5],
              fill: false,
              borderColor: "rgba(0,255,0,1)"
            },
            {
              label: "Week 3",
              data: [5,2,4,2,1],
              borderColor: "rgba(0,0,255,1)"
            },
            {
              label: "Week 4",
              data: [5,7,8,2,8],
              fill: false,
              borderColor: "rgbs(255,255,0,1)"
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
}

export default Chart;
