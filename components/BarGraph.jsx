import React, { useState } from 'react';
import { Chart } from 'primereact/chart';
import Image from 'next/image'
import { useEffect } from 'react';
const BarChartDemo = (props) => {

    const [basicData,setBasicData] = useState({
        labels: [],
        datasets: [
            {
                label: " ",
                backgroundColor: ["blue"],
                data:[]
            }
        ]
    });

    useEffect(() => {
        setBasicData({
            labels: props.labels,
            datasets: [
                {
                    label: props.heading,
                    backgroundColor: ["blue"],
                    data: props.data
                }
            ]
        });
    }, [props]);


    const getLightTheme = () => {
        let basicOptions = {
            maintainAspectRatio: false,
            aspectRatio: .8,
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#495057',
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                }
            }
        };

        

        return {
            basicOptions,
        }
    }

    const { basicOptions} = getLightTheme();

    return (
        <div>
            <div className="card">
                <Chart type="bar" data={basicData} options={basicOptions} />
            </div>
        </div>
    )
}

export default BarChartDemo