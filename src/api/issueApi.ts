import { axiosClient } from './axiosClient';

export const getIssueItems = async (perPage: number, page: number) => {
  console.log('per_page', perPage, page);
  return await axiosClient.get(
    `https://api.github.com/repos/facebook/react/issues?per_page=${perPage}&page=${page}&sort=comments`
  );
};
