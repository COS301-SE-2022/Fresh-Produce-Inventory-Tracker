/* eslint-disable-next-line */
// react plugin used to create charts
import {Chart} from "./../../src/components/chart/chart"
let fruitData = [];

const table_api = 'http://localhost:3333/api/trend/getTrendsAllTrendsForDay';

export async function getServerSideProps() {
    const  Form = "id=1&weekday=Monday";

    const response = await fetch(table_api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
      body: Form,
    });

    const trendData = await response.json();
  
    if (response.status == 201) {
      fruitData = trendData;
      
    }
  
    if (response.status == 500) {
      alert('Incorrect id');
    }

  return {
    props: {fruitData}
  }
}


export function Trends({fruitData}) {
  return (
      <div className="grid grid-rows-3 m-2 gap-0">
        <div>
          <h1>Fruit</h1>
          <Chart type="Bar" fruit="Fruit" data={fruitData[0]}></Chart>
        </div>
        <div className="grid grid-cols-2 h-1/2">
          <div>
            <h1>Apples</h1>
            <Chart type="Line" fruit="Apples" data={fruitData[0]}></Chart>
          </div>
          <div>
            <h1>Pears</h1>
            <Chart type="Line" fruit="Pears" data={fruitData[0]}></Chart>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <h1>Oranges</h1>
            <Chart type="Line" fruit="Oranges" data={fruitData[0]}></Chart>
          </div>
          <div>
            <h1>Grapes</h1>
            <Chart type="Line" fruit="Grapes" data={fruitData[0]}></Chart>
          </div>
        </div>
      </div>
  );
}

export default Trends;
