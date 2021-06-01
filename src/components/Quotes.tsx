import React from 'react';
import { NavLink } from 'react-router-dom';
import ListQuotes from './ListQuotes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Quotes = () => {
    return (
        <>
            <div className="container">
              <div className="my-5">
                <h2 className="col-12">Lista de Orçamentos</h2>
              </div>
              <p className="d-flex justify-content-end align-items-center" id="addQuote">
                Fazer novo orçamento
                <NavLink to="/addQuote" className="px-4 btn" activeClassName="active">
                  <FontAwesomeIcon icon={faPlus} />
                </NavLink>
              </p>
              <div>
                <table id="quotesTable" className="table text-center">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Nome da empresa</th>
                      <th scope="col">Data de orçamento</th>
                      <th scope="col">Endereço</th>
                      <th scope="col">Email</th>
                      <th scope="col">Produto</th>
                      <th scope="col">Quantidade</th>
                      <th scope="col">Editar</th>
                      <th scope="col">Deletar</th>
                    </tr>
                  </thead>
                  <tbody>
                    <ListQuotes />  
                  </tbody>
                </table>
              </div>
            </div>
        </>
    );
  };
  
  export default Quotes;