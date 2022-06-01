/* eslint-disable-next-line */
export interface TrendsProps {}
// react plugin used to create charts
import {Chart} from "./../../src/components/chart/chart"

export function Trends(props: TrendsProps) {
  return (
      <div className="chart">
        <Chart type="Bar"></Chart>
      </div>
  );
}

export default Trends;
