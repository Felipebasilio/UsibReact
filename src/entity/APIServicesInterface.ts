import { QuotesInterface } from './quoteInterface';

export interface fetchReturn {
    dataFound: QuotesInterface[]; 
    dataFromId: QuotesInterface;
    errorFound: { 
      errorExists: boolean, 
      errorMessage: string 
    };
  }