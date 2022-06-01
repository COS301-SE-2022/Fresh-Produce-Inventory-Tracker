/* eslint-disable-next-line */
export interface TrendsProps {}
// react plugin used to create charts
import {Chart} from "./../../src/components/chart/chart"

export function Trends(props: TrendsProps) {
  return (
      <div className="grid grid-cols-2">
        <div>
          <h1>Fruit</h1>
          <Chart type="Bar"></Chart>
        </div>
        <div>
          <h1>Apples</h1>
          <Chart type="Line"></Chart>
        </div>
      </div>
  );
}

export default Trends;
