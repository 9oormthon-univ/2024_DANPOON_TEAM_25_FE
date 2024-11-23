import { Work } from "@/types/work";

export const sortWorks = (works: Work[], sortType: 'deadline' | 'submission') => {
  if (sortType === 'submission') {
    const order: Record<Work['status'], number> = { pending: 0, late: 1, submitted: 2 };
    return [...works].sort((a, b) => order[a.status] - order[b.status]);
  }
  return [...works].sort((a, b) => a.remainingDays - b.remainingDays);
};