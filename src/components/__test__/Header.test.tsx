import ReactDOM from 'react-dom';
import Header from '../Header';
import renderer from 'react-test-renderer'
import { Router } from 'react-router-dom';

import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

it('renders Header without crashing', () => {
    let div = document.createElement('div');
    ReactDOM.render( <Router history={ history }><Header/></Router>, div );
    ReactDOM.unmountComponentAtNode(div);
    
})


it('Matches snapshot', () => {
    const HeaderComponnet = renderer.create(
        <Router history={history}>
            <Header />
        </Router>
    ).toJSON();
            
    expect(HeaderComponnet).toMatchSnapshot();
})

