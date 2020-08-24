export interface IQueryParams {
  token?: string;
  limit?: string;
}

export interface IFilesQueryParams {
  token?: string;
  show_files_hidden_by_limit?: boolean;
  count?: EFilesCount;
  file?: string;
  query?: string;
}

export enum EFilesCount {
  count10 = '10',
  count25 = '25',
  count50 = '50',
  count100 = '100'
}

