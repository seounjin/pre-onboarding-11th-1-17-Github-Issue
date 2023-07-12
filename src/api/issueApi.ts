import { axiosClient } from './axiosClient';

export const getIssueItems = async () => {
  return await axiosClient.get(
    'https://api.github.com/repos/facebook/react/issues'
  );
};
