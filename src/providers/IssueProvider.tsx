import { ReactNode, useState } from 'react';
import { IssueContext } from '../contexts/IssueContext';
import { useFetcher } from '../hooks/useFetcher';

interface IssueProviderProps {
  children: ReactNode;
}

const IssueProvider = ({ children }: IssueProviderProps) => {
  const [issue, setIssue] = useState<any[]>([]);
  const [issuePage, setIssuePage] = useState<number>(1);
  const fetcher = useFetcher();

  const getIssueItems = async () => {
    const url = `https://api.github.com/repos/facebook/react/issues?per_page=${20}&page=${issuePage}&sort=comments`;

    const data = await fetcher('GET', url, {});
    console.log('확인', data);
    setIssuePage((issuePage) => issuePage + 1);
    setIssue([...issue, ...data]);
  };

  return (
    <IssueContext.Provider
      value={{
        issue,
        getIssueItems,
      }}
    >
      {children}
    </IssueContext.Provider>
  );
};

export default IssueProvider;
