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
