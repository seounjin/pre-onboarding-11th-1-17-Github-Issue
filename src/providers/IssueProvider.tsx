import { ReactNode, useState } from 'react';
import { getIssueItems } from '../api/issueApi';
import { IssueContext } from '../contexts/IssueContext';

interface IssueProviderProps {
  children: ReactNode;
}

const IssueProvider = ({ children }: IssueProviderProps) => {
  const [issue, setIssue] = useState<any[]>([]);
  const [issuePage, setIssuePage] = useState<number>(1);

  const handleIssueItemsResponse = async () => {
    const res = await getIssueItems(20, issuePage);
    console.log('확인', res.data);
    setIssuePage((issuePage) => issuePage + 1);
    setIssue([...issue, ...res.data]);
  };

  return (
    <IssueContext.Provider
      value={{
        issue,
        handleIssueItemsResponse,
      }}
    >
      {children}
    </IssueContext.Provider>
  );
};

export default IssueProvider;
