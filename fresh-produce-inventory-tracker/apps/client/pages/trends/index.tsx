/* eslint-disable-next-line */
export interface TrendsProps {
  userId:string
}
// react plugin used to create charts
import {Chart} from "./../../src/components/chart/chart"

const api_url = 'http://localhost:3333/api/trend/gettrendsalltrendsforday';

export function Trends(props: TrendsProps) {
    const Form = "id=1&weekday=Monday";
    const GetTrends = async () => {
  
    const response = await fetch(api_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
      body: Form,
    });

    const trendData = await response.json();
  
    if (response.status == 201) {
      console.log(trendData);
      return;
    }
  
    if (response.status == 500) {
      alert('Incorrect id');
    }
  };

  GetTrends();

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
