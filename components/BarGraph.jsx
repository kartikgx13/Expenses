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
                data:[],
                fill: true,
                borderColor: props.color,
                backgroundColor: props.bgcolor,
            }
        ]
    });

    useEffect(() => {
        setBasicData({
            labels: props.labels,
            datasets: [
                {
                    label: props.heading,
                    data: props.data,
                    fill: true,
                    borderColor: props.color,
                    backgroundColor: props.bgcolor,
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
                <Chart type="line" data={basicData} options={basicOptions} />
            </div>
        </div>
    )
}

export default BarChartDemo