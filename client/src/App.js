import React from 'react';

import './App.css';

class App extends React.Component() {
  constructor(props) {
    super();
    this.state = {
      users: []
    }
  }
  rednder(){
    return (
      <div className="App">
      <h1>Women's World Cup players</h1>
      </div>
    );    
  }
}

export default App;
