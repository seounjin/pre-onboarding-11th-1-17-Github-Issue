import { createContext } from 'react';

// todo 이슈 타입 지정
export type IssueContextType = { issue: any[] };

export const IssueContext = createContext<IssueContextType>({ issue: [] });
