import { SubmissionItemProps } from "@/components/layout/Submission/SubmissionItem";

export const submissionData: SubmissionItemProps[] = [
    {
      student: "김00",
      status: "submitted", 
      time: "03.18 14:30",
      comment: "제출완료",
    },
    {
      student: "이00",
      status: "submitted",
      time: "03.18 15:45",
      comment: "과제 제출합니다",
    },
    {
      student: "박00",
      status: "pending",
      time: null,
      comment: null,
    },
    {
      student: "최00",
      status: "late",
      time: "03.21 09:15",
      comment: "늦어서 죄송합니다",
    },
    {
      student: "최00",
      status: "late",
      time: "03.21 09:15",
      comment: "늦어서 죄송합니다",
    },
  ];
