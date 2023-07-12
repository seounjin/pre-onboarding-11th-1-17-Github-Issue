import { ReactNode, useState, useEffect } from 'react';
import { getIssueItems } from '../api/issueApi';
import { IssueContext } from '../contexts/IssueContext';

interface IssueProviderProps {
  children: ReactNode;
}

export function IssueProvider({ children }: IssueProviderProps) {
  const [issue, setIssue] = useState<any[]>([]);

  const handleIssueItemsResponse = async () => {
    const res = await getIssueItems();
    console.log('확인', res.data);
    setIssue(res.data);
  };

  useEffect(() => {
    handleIssueItemsResponse();
  }, []);

  return (
    <IssueContext.Provider value={{ issue }}>{children}</IssueContext.Provider>
  );
}
