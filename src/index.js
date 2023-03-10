import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import DesignerButton from './DesignerButton';


import { Provider } from 'react-redux'
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <DesignerButton />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA