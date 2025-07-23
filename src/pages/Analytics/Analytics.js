import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const Analytics = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartDom = chartRef.current;
    if (chartDom) {
      const myChart = echarts.init(chartDom);
      const option = {
        tooltip: { trigger: 'axis' },
        legend: { data: ['Page Views', 'Visitors', 'Conversions'] },
        grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: { type: 'value' },
        series: [
          {
            name: 'Page Views',
            type: 'line',
            smooth: true,
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            lineStyle: { width: 3 },
          },
          {
            name: 'Visitors',
            type: 'line',
            smooth: true,
            data: [500, 600, 550, 620, 800, 850, 900],
            lineStyle: { width: 3 },
          },
          {
            name: 'Conversions',
            type: 'line',
            smooth: true,
            data: [120, 132, 101, 134, 90, 230, 210],
            lineStyle: { width: 3 },
          },
        ],
      };
      myChart.setOption(option);

      // Resize chart on window resize
      const handleResize = () => myChart.resize();
      window.addEventListener('resize', handleResize);

      // Cleanup on unmount
      return () => {
        myChart.dispose();
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <div className="flex-1 p-6 overflow-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Analytics</h2>
        <p className="text-gray-600 mt-2">Track your store's performance</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Visitor Summary</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Total Visitors</span>
              <span className="text-lg font-semibold text-gray-800">4,820</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Returning Visitors</span>
              <span className="text-lg font-semibold text-gray-800">1,240</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Bounce Rate</span>
              <span className="text-lg font-semibold text-gray-800">42%</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Conversion Metrics</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Total Conversions</span>
              <span className="text-lg font-semibold text-gray-800">320</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Conversion Rate</span>
              <span className="text-lg font-semibold text-gray-800">3.2%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Average Order Value</span>
              <span className="text-lg font-semibold text-gray-800">$85.50</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Traffic Sources</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Organic Search</span>
              <span className="text-lg font-semibold text-gray-800">60%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Social Media</span>
              <span className="text-lg font-semibold text-gray-800">25%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Direct</span>
              <span className="text-lg font-semibold text-gray-800">15%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-800">Performance Trends</h3>
          <div className="flex space-x-2">
            <button className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full cursor-pointer !rounded-button whitespace-nowrap">
              Last 7 Days
            </button>
            <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-full cursor-pointer !rounded-button whitespace-nowrap">
              Last 30 Days
            </button>
          </div>
        </div>
        <div id="analytics-chart" ref={chartRef} className="h-80 w-full"></div>
      </div>
    </div>
  );
};

export default Analytics;