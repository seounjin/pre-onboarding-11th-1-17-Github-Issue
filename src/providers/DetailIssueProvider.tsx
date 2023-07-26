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

  const resetDetailIssue = () => {
    setDetailIssue(null);
  };

  return (
    <DetailIssueContext.Provider
      value={{ detailIssue, getIssueDetailItem, resetDetailIssue }}
    >
      {children}
    </DetailIssueContext.Provider>
  );
};

export default DetailIssueProvider;
