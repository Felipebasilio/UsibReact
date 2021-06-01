import { QuotesInterface } from './../../entity/quoteInterface';
import React from 'react';
import ReactDOM from 'react-dom';
import QuoteTableRow from '../QuoteTableRow';

import { render } from '@testing-library/react';
import renderer from 'react-test-renderer'
import { BrowserRouter, Route } from 'react-router-dom';



const props: QuotesInterface = {
    id: '1',
    product: 'Parafuso',
    companyName: 'Nome teste',
    quoteDate: '2020-01-01',
    adress: 'Endereço teste',
    quantity: '100',
    email: 'email@teste.com'
} 


it('renders QuoteRableRow without crashing', () => {
    let tbody = document.createElement('tbody');    
    ReactDOM.render(<BrowserRouter><QuoteTableRow quote={props}/></BrowserRouter>, tbody );
    ReactDOM.unmountComponentAtNode(tbody);    
})


it('renders QuoteRableRow properly', () => {
    const { getByTestId } = render(
        <BrowserRouter>
            <Route path="/editQuote" />
            <table>
                <tbody>
                    <QuoteTableRow quote={props} />
                </tbody>
            </table> 
        </BrowserRouter>
    );

    if(props.id) {
        // eslint-disable-next-line jest/no-conditional-expect
        expect(getByTestId(`ID${props.id}`)).toHaveTextContent(props.id)
    }
    expect(getByTestId(`companyName${props.id}`)).toHaveTextContent(props.companyName)
    expect(getByTestId(`quoteDate${props.id}`)).toHaveTextContent(props.quoteDate)
    expect(getByTestId(`adress${props.id}`)).toHaveTextContent(props.adress)
    expect(getByTestId(`email${props.id}`)).toHaveTextContent(props.email)
    expect(getByTestId(`product${props.id}`)).toHaveTextContent(props.product)
    expect(getByTestId(`quantity${props.id}`)).toHaveTextContent(props.quantity)
})

it('Matches snapshot', () => {
    const QuoteTableRowComponnent = renderer.create(
    <BrowserRouter>
        <table>
            <tbody>
                <QuoteTableRow quote={props} />
            </tbody>
        </table>
    </BrowserRouter>
    ).toJSON();
    expect(QuoteTableRowComponnent).toMatchSnapshot();
});


