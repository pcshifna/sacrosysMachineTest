import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const LineChart = () => {
  const generateColors = (data) => {
    return data.map((d, idx) => {
      let color = d > 1000 ? '#05FF00' : '#FF0202';
      return {
        offset: (idx / data.length) * 100,
        color,
        opacity: 0.9,
      };
    });
  };

  const [chartData, setChartData] = useState({
    series: [
      {
        name: '',
        data: [null, 1000, 2700, 2300, 300, 500, 2500, 1200, 600, 500],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'line',
        width: '100%', 
        zoom: {
          enabled: false,
        },
      },
      grid: {
        show: false,
        xaxis: {
          lines: {
            show: false,
          },
        },
      },
      stroke: {
        width: 5,
        curve: 'smooth',
      },
      xaxis: {
        axisBorder: {
          show: false,
          color: '#FFFFFF',
          height: 0,
        },
        title: {
          text: 'Date',
          style: {
            color: '#FFFFFF',
            fontSize: '15px',
            fontWeight: 400,
          },
        },
        categories: [ 0,1, 2, 3, 4, 5, 6, 7, 8,9],
        tickAmount: 8,
        labels: {
          formatter: function (value) {
            return value === 0 ? '' : value;
          },
          style: {
            colors: '#FFFFFF',
            fontSize: '15px',
            fontWeight: 400,
          },
        },
        axisTicks: {
          show: false,
          borderType: 'solid',
          color: '#78909C',
          height: 6,
          offsetX: 0,
          offsetY: 0,
        },
      },
      title: {
        text: 'Day wise comparison',
        align: 'center',
        style: {
          fontSize: '25px',
          color: '#FFFFFF',
          fontWeight: 600,
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          gradientToColors: ['#FDD835'],
          shadeIntensity: 0.5,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          colorStops: generateColors([1000, 2700, 2300, 300, 500, 2500, 1200, 600, 500]),
        },
      },
      yaxis: {
        min: 0,
        max: 3000,
        title: {
          text: 'Price',
          style: {
            color: '#FFFFFF',
            fontSize: '15px',
            fontWeight: 400,
          },
        },
        ticks: [0, 1000, 2000, 3000],
        tickAmount: 3,
        labels: {
          style: {
            colors: '#FFFFFF',
            fontSize: '15px',
            fontWeight: 400,
          },
        },
      },
      tooltip: {
        x: {
          formatter: function (value, { dataPointIndex }) {
            const date = new Date(2022, 7, chartData.options.xaxis.categories[dataPointIndex]);
            return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
          },
        },
      },
      markers: {
        colors: '#141414',
      },
    },
  });

  return (
    <div>
      <div id="chart" style={{ width: '1000px', background: 'black' }}>
        <ReactApexChart options={chartData.options} series={chartData.series} type="line" height={400} width={1000} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default LineChart;
