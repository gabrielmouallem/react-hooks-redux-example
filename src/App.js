import React from 'react';
import { Provider } from 'react-redux';

import store from './store' //Disponibilizamos o store de forma global para a aplicação

import CourseList from './components/CourseList'

function App() {

  /*
    <Provider store={store}>

    Com  isso todos os elementos do App
    que  estiverem  dentro  do provider
    possuem  agora  acesso  ao   store.

    O que irá  mudar  com os  Hooks será
    a  forma  na  qual  iremos  consumir
    as informações e disparar as actions.
  */

  return (
    <Provider store={store}>
      <CourseList />
    </Provider>
  );
}

export default App;
