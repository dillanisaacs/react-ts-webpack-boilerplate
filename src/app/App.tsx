import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Home } from './containers/Home/Home';
declare let module: any

ReactDOM.render(<Home />, 
document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
}