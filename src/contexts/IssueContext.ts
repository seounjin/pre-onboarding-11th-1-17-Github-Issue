import { createContext } from 'react';

// todo 이슈 타입 지정
type IssueContextType = { issue: any[] };

export const IssueContext = createContext<IssueContextType | null>(null);
