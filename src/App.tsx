import React, { useEffect } from 'react';
import { getIssueItems } from './api/issueApi';

function App(): JSX.Element {
  const handleIssueItemsResponse = async () => {
    const res = await getIssueItems();
    console.log('확인', res.data);
  };

  useEffect(() => {
    handleIssueItemsResponse();
  }, []);

  return (
    <div className="App">
      <div>시작</div>
    </div>
  );
}

export default App;
