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
  data: [[],[],[],[]]
}


export function Chart(props: ChartProps) {
  const Apples = Object.values(props.data[3]);
  const Pears = Object.values(props.data[0]);
  const Oranges = Object.values(props.data[1]);
  const Grapes = Object.values(props.data[2]);
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
          data:[Apples[4],15,19,5],
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
          barThickness:35,
          borderWidth: 1
        },{
          label:"Pears",
          borderRadius:5,
          data:[Pears[4],10,21,7],
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
          barThickness:35,
          borderWidth: 1
        },{
          label:"Oranges",
          borderRadius:5,
          data:[Oranges[4],11,29,2],
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
          barThickness:35,
          borderWidth: 1
        },{
          label:"Grapes",
          borderRadius:5,
          data:[Grapes[4],10,25,5],
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
          barThickness:35,
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

export default Chart;
