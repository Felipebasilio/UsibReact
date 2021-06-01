import { QuotesInterface } from './../../entity/quoteInterface';
import ReactDOM from 'react-dom';
import { createMemoryHistory } from 'history'
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import EditQuote from '../EditQuote';
import renderer from 'react-test-renderer'



const props: QuotesInterface = {
    id: '1',
    product: 'Parafuso',
    companyName: 'Nome teste',
    quoteDate: '2020-01-01',
    adress: 'Endereço teste',
    quantity: '100',
    email: 'email@teste.com'
} 


jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useLocation: () => ({
        pathname: `localhost:3000/editQuote?id=${props.id}`,
        state: props
    })
}));

it('renders EditQuote without crashing', () => {
    let div = document.createElement('div');    
    ReactDOM.render(<EditQuote />, div );
    ReactDOM.unmountComponentAtNode(div);    
})

it('renders EditQuote properly', () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
        <Router history={ history }>
            <EditQuote />
        </Router>
    );

    expect(getByTestId(`companyName${props.id}`)).toHaveValue(props.companyName)
    expect(getByTestId(`quoteDate${props.id}`)).toHaveValue(props.quoteDate)
    expect(getByTestId(`adress${props.id}`)).toHaveValue(props.adress)
    expect(getByTestId(`email${props.id}`)).toHaveValue(props.email)
    expect(getByTestId(`product${props.id}`)).toHaveValue(props.product)
    expect(getByTestId(`quantity${props.id}`)).toHaveValue(parseInt(props.quantity))
})

it('Matches snapshot', () => {
    const EditQuoteComponnent = renderer.create(<EditQuote />).toJSON();
    expect(EditQuoteComponnent).toMatchSnapshot();
});
