"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card,CardBody } from '@nextui-org/react';
import { UserCircle, Users, UserPlus } from 'lucide-react';
import { toast } from 'sonner';
import { DateRangePicker } from '@nextui-org/react';
import { Input } from '@nextui-org/react';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState({
    recordCount: 'Loading',
    userCount: 'Loading',
    doctorCount: 'Loading'
  });
  const [chartData, setChartData] = useState([]);
  const [dateRange, setDateRange] = useState({ startDate: null, endDate: null });
  const [address, setAddress] = useState('');
  const [disease, setDisease] = useState('');

  useEffect(() => {
    fetchDashboardData();
  }, [dateRange, address, disease]);

  const fetchDashboardData = async () => {
    try {
      const [dashboardResponse, recordsResponse] = await Promise.all([
        axios.get('/api/admin/dashboard'),
        axios.get('/api/health-records', {
          params: {
            startDate: dateRange.startDate,
            endDate: dateRange.endDate,
            address,
            disease
          }
        })
      ]);

      setDashboardData(dashboardResponse.data);
      setChartData(recordsResponse.data.chartData);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      toast.error('Error fetching dashboard data');
    }
  };

  const DashboardCard = ({ title, count, Icon, gradientFrom, gradientTo }) => (
    <Card className={`max-w-[350px] overflow-hidden bg-gradient-to-br from-${gradientFrom}-500 to-${gradientTo}-700 hover:from-${gradientFrom}-600 hover:to-${gradientTo}-800 transform hover:scale-105 transition duration-300 ease-in-out`}>
      <CardBody className="text-center">
        <Icon className="w-16 h-16 text-white mx-auto mb-4" />
        <h5 className="mb-2 text-white">{title}</h5>
        <h2 className="text-3xl font-bold text-white">{count}</h2>
      </CardBody>
    </Card>
  );

  const pieChartOptions = {
    chart: {
      type: 'pie',
    },
    labels: chartData.map(item => item.disease),
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };

  const pieChartSeries = chartData.map(item => item.count);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl text-center my-8">Dashboard</h1>
      
      <div className="mb-8 flex flex-wrap gap-4">
        <DateRangePicker
          onChange={(range) => setDateRange(range)}
          value={dateRange}
        />
        <Input
          placeholder="Filter by address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <Input
          placeholder="Filter by disease"
          value={disease}
          onChange={(e) => setDisease(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <DashboardCard
          title="Total Records"
          count={dashboardData.recordCount}
          Icon={UserCircle}
          gradientFrom="blue"
          gradientTo="blue"
        />
        <DashboardCard
          title="Total Users"
          count={dashboardData.userCount}
          Icon={Users}
          gradientFrom="green"
          gradientTo="green"
        />
        <DashboardCard
          title="Total Doctors"
          count={dashboardData.doctorCount}
          Icon={UserPlus}
          gradientFrom="yellow"
          gradientTo="yellow"
        />
      </div>

      <div className="mb-8">
        <h2 className="text-2xl mb-4">Disease Distribution</h2>
        <div style={{ height: '400px' }}>
          <Chart
            options={pieChartOptions}
            series={pieChartSeries}
            type="pie"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
}