import ReactDOM from 'react-dom';
import { cleanup } from '@testing-library/react';
import Home from '../Home';

import renderer from 'react-test-renderer'

afterEach(cleanup);

it('renders Home without crashing', () => {
    let div = document.createElement('div');
    ReactDOM.render( <Home />, div );
    ReactDOM.unmountComponentAtNode(div);
});


it('Matches snapshot', () => {
    const HomeComponnet = renderer.create(<Home />).toJSON();
    expect(HomeComponnet).toMatchSnapshot();
});
