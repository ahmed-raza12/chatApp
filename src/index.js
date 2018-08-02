import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Signup from './component/signup';
import MyRoutes from './router';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware } from 'redux';
import allReducers from './store/reducer'
import reducers from './store/reducer';
import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


const store = createStore(
    allReducers,
    {},
    applyMiddleware(thunk)
    )

store.subscribe(()=>{
    console.log(store.getState(),'Whole State')
})

ReactDOM.render(
<Provider store={store} >
    <MyRoutes />
</Provider>
    , document.getElementById('root'));
registerServiceWorker();
