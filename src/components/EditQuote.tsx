import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { QuotesInterface } from '../entity/quoteInterface';
import { fetchData, putData } from '../API/APIServices';


const EditQuote = () => {

  var state: QuotesInterface = useLocation().state as QuotesInterface;

  var id = new URLSearchParams(useLocation().search).get('id');

  var quoteToEdit: QuotesInterface = {} as QuotesInterface;

  if (state.id) {
    quoteToEdit = state;
  } else if(id) {
    fetchData(String(id)).then((response) => {
      console.log(response.dataFromId)
      quoteToEdit = response.dataFromId 
    })
  } else {

      alert("ID inexistente")

  }

  const [quote, setquote] = useState<QuotesInterface>(quoteToEdit);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    putData(quote)
    
  }; 
  
  const onChange = (event: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement>): void => {
    const fieldValue = event.currentTarget.value; 
    setquote({...quote, [(event.target as Element).id]: fieldValue});    
    
  }
  
  return (
    <div className="container my-5">
      <div className="my-5">
        <h2 className="col-12">Alteração de dados do orçamento { quote.id }</h2>
      </div>
      
      <form className="row g-3" id="edit-quote-form" onSubmit={handleSubmit}>

      <div className="col-md-6 mt-2">
        <label htmlFor="companyName" className="form-label">Nome da empresa:</label>
        <input 
          type="text"
          className="form-control"
          id="companyName"
          data-testid={`companyName${quote.id}`}
          value={ quote.companyName }
          onChange={onChange} 
          required/>
        <div className="invalid-feedback">
          Digite um nome de empresa válido.
        </div>
      </div>

      <div className="col-md-6 mt-2">
        <label htmlFor="email" className="form-label">Email de contato:</label>
        <input 
          type="email" 
          className="form-control" 
          id="email"
          data-testid={`email${quote.id}`}
          value={ quote.email } 
          onChange={onChange} 
          required/>
        <div className="invalid-feedback">
          Digite um email válido.
        </div>
      </div>

      <div className="col-6 mt-2">
        <label htmlFor="adress" className="form-label">Endereço:</label>
        <input 
          type="text" 
          className="form-control" 
          id="adress"
          data-testid={`adress${quote.id}`}
          value={ quote.adress }
          onChange={onChange} 
          required/>
        <div className="invalid-feedback">
          Digite um endereço válido.
        </div>
      </div>

      <div className="col-6 mt-2">
        <label htmlFor="quote-date" className="form-label">Data do orçamento:</label>
        <input 
          type="date" 
          className="form-control" 
          id="quoteDate" 
          data-testid={`quoteDate${quote.id}`}
          value={ quote.quoteDate } 
          onChange={onChange} 
          required/>
        <div className="invalid-feedback">
          Selecione uma data válida.
        </div>
      </div>

      <div className="col-6 mt-2 ">
          <label htmlFor="product" className="form-label">Produto</label>
          <select 
            className="form-select 
            custom-select" 
            id="product"
            data-testid={`product${quote.id}`}
            value={ quote.product }
            onChange={onChange} 
            required>

            <option value={ quote.product } disabled>{ quote.product }</option>
            <option value="Parafuso">Parafuso</option>
            <option value="Broca">Broca</option>

          </select>
          <div className="invalid-tooltip">
            Please select a valid state.
          </div>
        </div>

      <div className="col-6 mt-2">
        <label htmlFor="quantity" className="form-label">Quantidade:</label>
        <input 
          type="number" 
          className="form-control" 
          id="quantity" 
          data-testid={`quantity${quote.id}`}
          value={ quote.quantity } 
          onChange={onChange} 
          required/>
        <div className="invalid-feedback">
          Digite uma quantidade(número) valida.
        </div>
      </div>

      <div className="col-12 d-flex justify-content-center my-5">
        <button className="btn btn-primary col-12" type="submit">Atualizar pedido de orçamento</button>
      </div>
      </form>
    </div>
  );
};

export default EditQuote;

