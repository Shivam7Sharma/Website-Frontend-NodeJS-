import React from 'react';

const ScheduledPatrols: React.FC = () => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-md mt-8">
            <h2 className="text-xl font-bold mb-4">List of Scheduled Patrols</h2>
            <table className="w-full text-left">
                <thead>
                    <tr>
                        <th className="pb-2">Address</th>
                        <th className="pb-2">Way Points</th>
                        <th className="pb-2">Scheduled</th>
                        <th className="pb-2">Est. Time</th>
                        <th className="pb-2">Last Patrol</th>
                        <th className="pb-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="pt-2">1 ABC Drive, Los Angeles</td>
                        <td className="pt-2">Living Room, Kitchen</td>
                        <td className="pt-2">Everyday, 10:00 AM</td>
                        <td className="pt-2">10 Mins</td>
                        <td className="pt-2">07.26.2024 - 10:00 AM</td>
                        <td className="pt-2 text-green-500">Active</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ScheduledPatrols;
