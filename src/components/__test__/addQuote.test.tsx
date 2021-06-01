import ReactDOM from 'react-dom';
import { cleanup } from '@testing-library/react';

import renderer from 'react-test-renderer'
import AddQuote from '../AddQuote';

afterEach(cleanup);

it('renders AddQuote without crashing', () => {
    let div = document.createElement('div');
    ReactDOM.render( <AddQuote />, div );
    ReactDOM.unmountComponentAtNode(div);
});

it('Matches snapshot', () => {
    const AddQuoteComponent = renderer.create(<AddQuote />).toJSON();
    expect(AddQuoteComponent).toMatchSnapshot();
});

