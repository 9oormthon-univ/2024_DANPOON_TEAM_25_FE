export interface WorkTrainingTabsProps {
  activeTab: number;
  onTabChange: (index: number) => void;
}

export const WorkTrainingTabs = ({
  activeTab,
  onTabChange,
}: WorkTrainingTabsProps) => {
  const tabs = ['워크', '트레이닝'];

  return (
    <div className="flex border-b border-gray-200">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => onTabChange(index)}
          className="px-3 py-[5px] group"
        >
          <span
            className={`px-2 py-2 text-sm font-medium transition-colors duration-300 border-b-2 ${
              activeTab === index
                ? 'border-blue-800 text-blue-800'
                : ' group-hover:text-blue-800 group-hover:font-bold text-gray-500 '
            }`}
          >
            {tab}
          </span>
        </button>
      ))}
    </div>
  );
};
