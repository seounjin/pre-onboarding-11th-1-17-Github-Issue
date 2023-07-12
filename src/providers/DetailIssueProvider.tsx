import { ReactNode, useState } from 'react';
import { DetailIssueContext } from '../contexts/IssueContext';
import { useFetcher } from '../hooks/useFetcher';

interface DetailIssueProviderProps {
  children: ReactNode;
}

const DetailIssueProvider = ({ children }: DetailIssueProviderProps) => {
  const [detailIssue, setDetailIssue] = useState(null);
  const fetcher = useFetcher();

  const getIssueDetailItem = async (number: number) => {
    const url = `https://api.github.com/repos/facebook/react/issues/${number}`;
    const data = await fetcher('GET', url, {});
    console.log('data', data);
    setDetailIssue(data);
  };

  return (
    <DetailIssueContext.Provider value={{ detailIssue, getIssueDetailItem }}>
      {children}
    </DetailIssueContext.Provider>
  );
};

export default DetailIssueProvider;
