import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import Nav from './component/routing';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Nav />, document.getElementById('root'));

registerServiceWorker();
