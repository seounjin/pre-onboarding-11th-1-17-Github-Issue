import { ReactNode, useState } from 'react';
import { getIssueDetailItem } from '../api/issueApi';
import { DetailIssueContext } from '../contexts/IssueContext';

interface DetailIssueProviderProps {
  children: ReactNode;
}

const DetailIssueProvider = ({ children }: DetailIssueProviderProps) => {
  const [detailIssue, setDetailIssue] = useState(null);

  const handleDetailIssueItemsResponse = async (number: number) => {
    const res = await getIssueDetailItem(number);
    console.log('res', res.data);
    setDetailIssue(res.data);
  };

  return (
    <DetailIssueContext.Provider
      value={{ detailIssue, handleDetailIssueItemsResponse }}
    >
      {children}
    </DetailIssueContext.Provider>
  );
};

export default DetailIssueProvider;
