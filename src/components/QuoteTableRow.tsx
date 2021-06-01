import { faEdit, faTrashAlt as faDelete } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { deleteData } from '../API/APIServices';
import { QuotesInterface } from '../entity/quoteInterface';


const QuoteTableRow = (props: { quote: QuotesInterface }) => {
  return (
  <>
    <tr data-testid={`RowId${props.quote.id}`} id={`RowId${props.quote.id}`} key={props.quote.id}>
      <td 
          data-testid={`ID${props.quote.id}`}
          key={`ID${props.quote.id}`}
        >
          {props.quote.id}
        </td>
      <td 
          data-testid={`companyName${props.quote.id}`}
          key={`companyName${props.quote.id}`}
        >
          {props.quote.companyName}
        </td>
      <td
          data-testid={`quoteDate${props.quote.id}`}
          key={`quoteDate${props.quote.id}`}
        >
          {props.quote.quoteDate}
        </td>
      <td 
          data-testid={`adress${props.quote.id}`}
          key={`adress${props.quote.id}`}
        >
          {props.quote.adress}
        </td>
      <td 
          data-testid={`email${props.quote.id}`}
          key={`email${props.quote.id}`}
        >
          {props.quote.email}
        </td>
      <td 
          data-testid={`product${props.quote.id}`}
          key={`product${props.quote.id}`}
        >
          {props.quote.product}
        </td>
      <td 
          data-testid={`quantity${props.quote.id}`}
          key={`quantity${props.quote.id}`}
        >
          {props.quote.quantity}
        </td>
      <td 
        data-testid={`edit${props.quote.id}`}
        key={`edit${props.quote.id}`}
      >
  
          <Link 
            to={{
              pathname: `/editQuote?id=${props.quote.id}`,
              state: props.quote
            }} 
            className="px-4 btn" 
          >
            <FontAwesomeIcon icon={ faEdit } />
          </Link>

        </td>
      <td 
          data-testid={`delete${props.quote.id}`}
          key={`delete${props.quote.id}`}
        >
          <button
            onClick={(() => {
              deleteData(String(props.quote.id));
            })}
            className="px-4 btn" 
          >
            <FontAwesomeIcon icon={ faDelete } />
          </button>
        </td>
    </tr>
    </>
  );

};

export default QuoteTableRow;