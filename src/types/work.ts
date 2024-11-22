export interface Work {
    id: number;
    title: string;
    dueDate: string;
    remainingDays: number;
    status: 'submitted' | 'pending' | 'late';
}