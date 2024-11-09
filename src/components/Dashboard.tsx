import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import LiveView from './LiveView';
import ScheduledPatrols from './ScheduledPatrols';
import StatCard from './StatCard';

const Dashboard: React.FC = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex flex-col w-full">
                <Header />
                <div className="p-8 bg-gray-100 min-h-screen">
                    <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
                    <div className="grid grid-cols-4 gap-6 mb-8">
                        <StatCard
                            title="Device Summary"
                            value="1 Ozzy"
                            iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/110d9707119bf2996a3c546b453653e209783971bca837d1f37e81ff382ac702?apiKey=8ad2e754a7b24b1fa8ef7017bbf89200&&apiKey=8ad2e754a7b24b1fa8ef7017bbf89200"
                        />
                        <StatCard
                            title="Device Health"
                            value="OK"
                            iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/54b27335721f5cf4e99c04fd1199ba51df1b034caaa8e90268381c62be176fa3?apiKey=8ad2e754a7b24b1fa8ef7017bbf89200&&apiKey=8ad2e754a7b24b1fa8ef7017bbf89200"
                        />
                        <StatCard
                            title="Critical Alerts"
                            value="123456"
                            iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/f3d2d0b486ef24c6675372f31d801a02ffa86d4205077214587fc13bfbfa7aff?apiKey=8ad2e754a7b24b1fa8ef7017bbf89200&&apiKey=8ad2e754a7b24b1fa8ef7017bbf89200"
                            change={-4.3}
                        />
                        <StatCard
                            title="General Alerts"
                            value="123456"
                            iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/c68b597dab78c846b749e363a72fefd69f01b6237012e97a7a66d38711bdb6dd?apiKey=8ad2e754a7b24b1fa8ef7017bbf89200&&apiKey=8ad2e754a7b24b1fa8ef7017bbf89200"
                            change={1.8}
                        />
                    </div>
                    <LiveView />
                    <ScheduledPatrols />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
