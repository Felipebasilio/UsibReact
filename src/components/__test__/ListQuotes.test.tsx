import ReactDOM from 'react-dom';
import { cleanup } from '@testing-library/react';

import renderer from 'react-test-renderer'
import ListQuotes from '../ListQuotes';

afterEach(cleanup);

it('renders ListQuotes without crashing', () => {
    let div = document.createElement('div');
    ReactDOM.render( <ListQuotes />, div );
    ReactDOM.unmountComponentAtNode(div);
});

it('Matches snapshot', () => {
    const ListQuotesComponent = renderer.create(<ListQuotes />).toJSON();
    expect(ListQuotesComponent).toMatchSnapshot();
});

