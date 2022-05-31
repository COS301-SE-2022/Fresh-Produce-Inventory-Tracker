/* eslint-disable-next-line */
export interface TrendsProps {}
// react plugin used to create charts
import { Bar } from "react-chartjs-2";

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
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const data = {
  labels: [
    "Apples",
    "Pears",
    "Oranges",
    "Grapes"
  ],
  datasets:[
    {
      label:"FRUIT",
      borderRadius:5,
      data:[1,5,7,2],
      backgroundColor: [
        "rgba(255,50,50,0.5)",
        "rgba(50,255,50,0.5)",
        "rgba(255,156,43,0.5)",
        "rgba(107,53,255,0.5)",
      ],
      borderColor: [
        'rgb(255, 0, 0,1)',
        'rgb(0, 255, 0,1)',
        'rgb(255, 137, 0,1)',
        'rgb(102, 0, 255,1)'
      ],
      barThickness:100,
      borderWidth: 1
    }
  ]
}

export function Trends(props: TrendsProps) {
  return (
      <div className="chart">
        <Bar data={data}></Bar>
      </div>
  );
}

export default Trends;
