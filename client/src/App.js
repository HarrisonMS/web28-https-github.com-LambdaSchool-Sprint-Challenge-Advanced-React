import React from 'react';
import axios from 'axios';
import{ Display} from './components/Display'
import './App.css'; // reg css style
// import './styles/index.css'; // tailwinds style

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
      <h1 className='headerTitle'>Women's World Cup players</h1>
      <Display playerData={this.state.users} />
      </div>
    );    
  }
}

export default App;
