import { useContext } from 'react';
import { DetailIssueContext, IssueContext } from '../contexts/IssueContext';

export const useIssue = () => useContext(IssueContext);

export const useDetailIssue = () => useContext(DetailIssueContext);
