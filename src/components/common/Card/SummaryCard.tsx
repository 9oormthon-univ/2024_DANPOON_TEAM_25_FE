import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface SummaryCardProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
}

export const SummaryCard = ({ label, value, icon: Icon }: SummaryCardProps) => (
  <div className="bg-white rounded-xl shadow-sm px-4 py-6 border border-gray-100">
    <div className="flex justify-between">
      <div className="space-y-3">
        <div className="inline-flex items-center justify-center p-2 bg-blue-50 text-blue-600 rounded-lg">
          <Icon className="w-4 h-4" />
        </div>
        <p className="text-xl font-semibold text-gray-900">{value}</p>
      </div>
      <p className="text-sm text-gray-700">{label}</p>
    </div>
  </div>
);
