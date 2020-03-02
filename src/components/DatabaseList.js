import React, { useContext } from 'react'
import Chart from 'react-google-charts';
import { DatabaseContext } from '../context/DatabaseContext'

export const DatabaseList = () => {
  const { databases } = useContext(DatabaseContext);

  const group = (myArray, property) => {
    return myArray.reduce((accumulator, object) => {
      const key = object[property];
      !accumulator[key] ? (accumulator[key] = [object]) : (accumulator[key].push(object));
      return accumulator;
    }, {})
  }

  const groupedDbs = group(databases, 'name');
  const entries = Object.entries(groupedDbs);
  const entriesByCount = entries.map(
    entry => [
      entry[0],
      entry[1].reduce((accumulator, item) => {
        return (
          accumulator + item['hits']
        )
      }, 0)
    ]
  )

  entriesByCount.sort((a,b) => {
    return b[1] - a[1];
  });

  // console.log(entriesByCount.slice(0, 10));

  const chartData = [['Database', 'Hits'], ...entriesByCount.slice(0, 10)]
  console.log(chartData);

  return (
    <div>
      <ul>
        {entriesByCount.slice(0, 10).map((entry, index) => (
          <li key={index}>
            {entry[0]} - {entry[1]}
          </li>
        ))}
      </ul>
      <Chart width={'700px'} height={'500px'} chartType='BarChart' loader={<div>Loading Chart</div>} data={chartData} options={{
        title: 'Databases with most Hits', chartArea: { width: '50%' }, hAxis: { title: 'Number of Hits', minValue: 0 }, vAxis: { title: 'Database Name' }
      }} />
    </div>
  )
}
