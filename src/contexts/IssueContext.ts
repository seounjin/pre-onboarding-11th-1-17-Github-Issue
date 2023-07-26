import { createContext } from 'react';

// todo 이슈 타입 지정
export type IssueContextType = {
  issue: any[];
  getIssueItems: () => void;
};

export const IssueContext = createContext<IssueContextType>({
  issue: [],
  getIssueItems: () => null,
});

export type DetailIssueContextType = {
  detailIssue: any;
  getIssueDetailItem: (number: number) => Promise<void>;
  resetDetailIssue: () => void;
};

export const DetailIssueContext = createContext<DetailIssueContextType>({
  detailIssue: null,
  getIssueDetailItem: () => Promise.resolve(),
  resetDetailIssue: () => null,
});
