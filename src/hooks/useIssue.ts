import { useContext } from 'react';
import { IssueContext } from '../contexts/IssueContext';

export const useIssue = () => useContext(IssueContext);
