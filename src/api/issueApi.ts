import { axiosClient } from './axiosClient';

export const getIssueItems = async (perPage: number, page: number) => {
  return await axiosClient.get(
    `https://api.github.com/repos/facebook/react/issues?per_page=${perPage}&page=${page}&sort=comments`
  );
};

export const getIssueDetailItem = async (number: number) => {
  return await axiosClient.get(
    `https://api.github.com/repos/facebook/react/issues/${number}`
  );
};
