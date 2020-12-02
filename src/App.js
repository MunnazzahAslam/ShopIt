import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Header from './components/Header'
import Pages from './components/Pages'
import {DataProvider} from './components/reduxreactindex'


class App extends React.Component{
  render(){
    return(
      <DataProvider>
        <div className="app">
          <Router>
            <Header />
            <Pages />
          </Router>
        </div>
      </DataProvider>
    );
  }
}

export default App;
