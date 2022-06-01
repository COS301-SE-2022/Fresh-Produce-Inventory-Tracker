/* eslint-disable-next-line */
export interface TrendsProps {}
// react plugin used to create charts
import {Chart} from "./../../src/components/chart/chart"

export function Trends(props: TrendsProps) {
  return (
      <div className="grid grid-rows-3 m-2 gap-0">
        <div>
          <h1>Fruit</h1>
          <Chart type="Bar" fruit="Fruit"></Chart>
        </div>
        <div className="grid grid-cols-2 h-1/2">
          <div>
            <h1>Apples</h1>
            <Chart type="Line" fruit="Apples"></Chart>
          </div>
          <div>
            <h1>Pears</h1>
            <Chart type="Line" fruit="Pears"></Chart>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <h1>Oranges</h1>
            <Chart type="Line" fruit="Oranges"></Chart>
          </div>
          <div>
            <h1>Grapes</h1>
            <Chart type="Line" fruit="Grapes"></Chart>
          </div>
        </div>
      </div>
  );
}

export default Trends;
