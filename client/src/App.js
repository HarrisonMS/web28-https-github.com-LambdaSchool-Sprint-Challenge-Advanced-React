import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      users: []
    }
  }
  componentDidMount() {
    axios.get(`http://localhost:5000/api/players`)
    .then((res) => {
      this.setState({
        users:res.data
      })
      console.log("users data", res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }
  render(){
    return (
      <div className="App">
      <h1>Women's World Cup players</h1>
      </div>
    );    
  }
}

export default App;
