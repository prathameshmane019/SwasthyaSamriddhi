import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardBody } from '@/components/ui/card';
import { UserCircle, Users, UserPlus } from 'lucide-react';
import { toast } from 'sonner';

export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState({
    recordCount: 'Loading',
    userCount: 'Loading',
    doctorCount: 'Loading'
  });

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const response = await axios.get('/api/admin/dashboard');
      setDashboardData(response.data);
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

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl text-center my-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
    </div>
  );
}