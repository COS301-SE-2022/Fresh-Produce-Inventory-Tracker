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
  const ApplesMonday = Object.values(props.dataMonday[3]);
  const PearsMonday = Object.values(props.dataMonday[0]);
  const OrangesMonday = Object.values(props.dataMonday[1]);
  const GrapesMonday = Object.values(props.dataMonday[2]);

  const ApplesTuesday = Object.values(props.dataTuesday[3]);
  const PearsTuesday = Object.values(props.dataTuesday[0]);
  const OrangesTuesday = Object.values(props.dataTuesday[1]);
  const GrapesTuesday = Object.values(props.dataTuesday[2]);

  const ApplesWednesday = Object.values(props.dataWednesday[3]);
  const PearsWednesday = Object.values(props.dataWednesday[0]);
  const OrangesWednesday = Object.values(props.dataWednesday[1]);
  const GrapesWednesday = Object.values(props.dataWednesday[2]);

  const ApplesThursday = Object.values(props.dataThursday[3]);
  const PearsThursday = Object.values(props.dataThursday[0]);
  const OrangesThursday = Object.values(props.dataThursday[1]);
  const GrapesThursday = Object.values(props.dataThursday[2]);

  const ApplesFriday = Object.values(props.dataFriday[3]);
  const PearsFriday = Object.values(props.dataFriday[0]);
  const OrangesFriday = Object.values(props.dataFriday[1]);
  const GrapesFriday = Object.values(props.dataFriday[2]);

  const ApplesSaturday = Object.values(props.dataSaturday[3]);
  const PearsSaturday = Object.values(props.dataSaturday[0]);
  const OrangesSaturday = Object.values(props.dataSaturday[1]);
  const GrapesSaturday = Object.values(props.dataSaturday[2]);

  const ApplesSunday = Object.values(props.dataSunday[3]);
  const PearsSunday = Object.values(props.dataSunday[0]);
  const OrangesSunday = Object.values(props.dataSunday[1]);
  const GrapesSunday = Object.values(props.dataSunday[2]);
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
          data:[ApplesMonday[4],ApplesTuesday[4],ApplesWednesday[4],ApplesThursday[4],ApplesFriday[4],ApplesSaturday[4],ApplesSunday[4]],
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
          data:[PearsMonday[4],PearsTuesday[4],PearsWednesday[4],PearsThursday[4],PearsFriday[4],PearsSaturday[4],PearsSunday[4]],
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
          data:[OrangesMonday[4],OrangesTuesday[4],OrangesWednesday[4],OrangesThursday[4],OrangesFriday[4],OrangesSaturday[4],OrangesSunday[4]],
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
          data:[GrapesMonday[4],GrapesTuesday[4],GrapesWednesday[4],GrapesThursday[4],GrapesFriday[4],GrapesSaturday[4],GrapesSunday[4]],
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

export default Chart;
