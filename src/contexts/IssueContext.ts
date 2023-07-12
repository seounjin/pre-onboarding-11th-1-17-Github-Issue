import { createContext } from 'react';

// todo 이슈 타입 지정
export type IssueContextType = {
  issue: any[];
  handleIssueItemsResponse: () => void;
};

export const IssueContext = createContext<IssueContextType>({
  issue: [],
  handleIssueItemsResponse: () => null,
});

export type DetailIssueContextType = {
  detailIssue: any;
  handleDetailIssueItemsResponse: (number: number) => Promise<void>;
};

export const DetailIssueContext = createContext<DetailIssueContextType>({
  detailIssue: null,
  handleDetailIssueItemsResponse: () => Promise.resolve(),
});
