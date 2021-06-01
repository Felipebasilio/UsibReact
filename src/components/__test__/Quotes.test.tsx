import ReactDOM from 'react-dom';
import { cleanup } from '@testing-library/react';

import renderer from 'react-test-renderer'
import Quotes from '../Quotes';
import { BrowserRouter } from 'react-router-dom';

afterEach(cleanup);

it('renders Quotes without crashing', () => {
    let div = document.createElement('div');
    ReactDOM.render( 
        <BrowserRouter>
            <Quotes />
        </BrowserRouter>
    , div );
    ReactDOM.unmountComponentAtNode(div);
});

it('Matches snapshot', () => {
    const QuotesComponent = renderer.create(
        <BrowserRouter>
            <Quotes />
        </BrowserRouter>
    ).toJSON();
    expect(QuotesComponent).toMatchSnapshot();
});


