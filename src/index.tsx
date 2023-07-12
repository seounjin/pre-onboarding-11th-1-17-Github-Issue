import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import IssueProvider from './providers/IssueProvider';
import DetailIssueProvider from './providers/DetailIssueProvider';
import LoadingProvider from './providers/LoadingProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <LoadingProvider>
      <IssueProvider>
        <DetailIssueProvider>
          <App />
        </DetailIssueProvider>
      </IssueProvider>
    </LoadingProvider>
  </React.StrictMode>
);
