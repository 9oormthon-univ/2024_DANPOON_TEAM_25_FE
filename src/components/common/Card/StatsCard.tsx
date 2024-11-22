import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface StatCardProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, icon: Icon }) => (
  <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
    <div className="flex justify-between">
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-xl font-semibold text-gray-900">{value}</p>
      </div>
      <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
        <Icon size={20} />
      </div>
    </div>
  </div>
);

export default StatCard;
