import { useState, useEffect } from 'react';
import { QuotesInterface } from '../entity/quoteInterface';
import { fetchData } from '../API/APIServices';
import QuoteTableRow from './QuoteTableRow';

const defaultQuotes: QuotesInterface[] = [];

const ListQuotes = () => {

  
const [quotes, setQuotes]: [QuotesInterface[], (quotes: QuotesInterface[]) => void] = useState(defaultQuotes);
const [error, setError]: [string, (error: string) => void] = useState("");

  useEffect(() => {
    fetchData()
    .then(
      ( response ) => {
        setQuotes(response.dataFound);
        if (response.errorFound.errorExists === true){
          setError(response.errorFound.errorMessage)
        } 
        else {
          setError("")
        }
      }
    )
  }, []);

  return (
    <>
      {
        error 
        ? 
          <p key="errorLoading" className="error">{error}</p> 
        : 
          quotes.map((quote) => ( 
            <QuoteTableRow key={`QuoteTableRow${quote.id}`} quote={quote} />
          )
      )}
    </>
  );
};

export default ListQuotes;