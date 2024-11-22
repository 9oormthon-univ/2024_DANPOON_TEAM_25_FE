import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface SummaryCardProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
}

export const SummaryCard = ({ label, value, icon: Icon }: SummaryCardProps) => (
  <div className="bg-white max-w-[17%] rounded-xl shadow-sm p-4 border border-gray-100">
    <div className="flex justify-between">
      <div className="space-y-1">
        <div className="inline-flex items-center justify-center p-2 bg-blue-50 text-blue-600 rounded-lg">
          <Icon className="w-4 h-4" />
        </div>
        <p className="text-xl font-semibold text-gray-900">{value}</p>
      </div>
      <p className="text-sm text-gray-500">{label}</p>
    </div>
  </div>
);
