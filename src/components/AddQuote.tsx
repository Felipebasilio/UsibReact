import React, { useState } from 'react';
import { postData } from '../API/APIServices';
import { QuotesInterface } from '../entity/quoteInterface';


const AddQuote = () => {
  const quoteToEdit: QuotesInterface = {} as QuotesInterface;
  const [quotes, setQuotes] = useState<QuotesInterface>(quoteToEdit);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    postData(quotes)
    
  }; 
  
  const onChange = (event: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement>): void => {
    const fieldValue = event.currentTarget.value; 
    setQuotes({...quotes, [(event.target as Element).id]: fieldValue});    
    console.log(quotes);

  }
  
  return (
    <>
      <div className="container my-5">
        <div className="my-5">
          <h2 className="col-12">Cadastro de novo orçamento</h2>
        </div>
        <form className="row g-3" id="add-quote-form" onSubmit={handleSubmit}>

        <div className="col-md-6 mt-2">
          <label htmlFor="companyName" className="form-label">Nome da empresa:</label>
          <input 
            type="text"
            className="form-control"
            id="companyName"
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
              onChange={onChange} 
              required>

              <option disabled value="Selecione um produto" >Selecione um produto</option>
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
            value={ quotes.quantity } 
            onChange={onChange} 
            required/>
          <div className="invalid-feedback">
            Digite uma quantidade(número) valida.
          </div>
        </div>

        <div className="col-12 d-flex justify-content-center my-5">
          <button className="btn btn-primary col-12" type="submit">
            Solicitar orçamento
          </button>
        </div>
        </form>
      </div>
    </>
  );
};

export default AddQuote;