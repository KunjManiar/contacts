import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

//REDUX
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk'

//REDUCERS
import authReducer from './store/reducers/auth'
import contactsReducer from './store/reducers/contacts'


import Routes from './routes';

const rootReducer = combineReducers({
  auth: authReducer,
  contacts: contactsReducer
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));




ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
          <Routes/>
      </BrowserRouter>
  </Provider>
  ,document.getElementById('root'));

