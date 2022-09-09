import React from 'react'
import {useEffect,useState} from 'react'
import {Chart as ChartJS, LineElement, CategoryScale, LinearScale,PointElement} from 'chart.js'
import {Line} from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement
    
)
//https://api.coinranking.com/v2/coins/?limit=10
function Chart() {
   const [chart, setChart] = useState([])

     const baseUrl=" https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
     const proxyUrl='https://cors-anywhere.herokuapp.com/'
     const apikey = "coinranking06c7087acd99a164d60c206dd7dee2fdefb3be281ce49833"

     useEffect(()=>{
        const fetchCoins = async () =>{
            await fetch(`${proxyUrl}${baseUrl}`,{
                method:'GET',
                headers:{
                    'Content-Type': 'application/json',
                    'x-access-token': `${apikey}`,
                    'Access-Control-Allow-Origin':'*'
                }
            }).then((response)=>{
                response.json().then((json)=>{
                    console.log(json) 
                })
               
            }).catch(error=>{
                console.log(error);
            })
          
        }
        fetchCoins()
        
     },[baseUrl,proxyUrl,apikey])

    console.log('chart', chart)
    const data= {
       labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of votes',
           data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }

    const options= {
        maintainAspectRatio:false,
        scales: {
            y: {
                beginAtZero: true
            }
        },
    legend:{
        labels:{
           fontSize:1
        }
    },
    scales:{
        y:{display:false}, x:{display:false}
    }
    }

  return (
    <div>
        <Line
        data={data}
           
           options={options}
        
        
        />
    </div>
  )
}

export default Chart