import React, { useEffect, useState } from 'react'
import './TwtChart.scss'
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const TwtChart = () => {

  // const [data, setData] = useState([])

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  }
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  useEffect(()=>{

    let today = new Date()

    let seven_days_ago = new Date(today.getTime() - (6 * 24 * 60 * 60 * 1000))

    let current_date_ms = today.getTime() 
    let past_date_ms = seven_days_ago.getTime()
    
    // Construct the API request URL
    const url = "https://api.livecoinwatch.com/coins/single/history"
    

    // Make the API request
    fetch(url, { 
      method: "POST",
      headers: new Headers({
        "content-type": "application/json",
        "x-api-key": "647ba7d7-b149-4524-8984-992e37467be7",
      }),
      body: JSON.stringify({
        currency: "USD",
        code: "___TWD",
        start: past_date_ms,
        end: current_date_ms,
        meta: true,
      }),
    })
    .then(res => res.json())
    .then(data => {
      let myArray = data.history.map(e => (
        {...e, date: new Date(e.date).toISOString().split('T')[0]}
      ))
      const uniqueArray = myArray.filter((obj, index, arr) => {
        return index === arr.findIndex(t => t.date === obj.date);
      }); 

      // setData({
      //   labels: [1, 2, 3, 4],
      //   datasets: [
      //     {
      //       label: 'Dataset 1',
      //       data: [6, 7, 10, 3],
      //       borderColor: 'rgb(255, 99, 132)',
      //       backgroundColor: 'rgba(255, 99, 132, 0.5)',
      //     },
      //   ],
      // })

    })
    .catch(error => console.log(error))

  },[])

  return (
    <div className='max-wrapper margin-top'>
        <div className="max-wrapper__content" id="live-data">
          data ? <Line options={options} data={data}/> : null
        </div>
    </div>
  )
}

export default TwtChart