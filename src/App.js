import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';
import Loading from './Components/Loading';
import Users from './Components/Users';

class App extends React.Component {
  
  async componentDidMount() {
    this.setState({loading: true})
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    this.setState({users: res.data})
    this.setState({loading: false})
  }
  
  state = {
    users: [],
    loading: false,
    showAddress: false
  }
  
  render() {
    
    const {users, loading, showAddress} = this.state

    const addressStatesToggle = () => {
      if(showAddress) {
        this.setState({showAddress: false})
      } else {
        this.setState({showAddress: true})
      }
    }

if (loading) {
    return (
    <div className="container">
      <h1>Test</h1>
      <Loading />
    </div>
    )
  }

  return (
    <div className="container">
      <h1 className="header">Company Employee Roster</h1>
      <Users users={users} 
      addressStatesToggle={addressStatesToggle}
      showAddress={showAddress}
      />
    </div>
  )

  }
}

export default App;




// check = {
  // {/* Make state of loading, users, showAdress */}
  //       {/* Make componentdidmount that reaches out to 
  //         https://jsonplaceholder.typicode.com/users
  //       */}
  //     {/* Set the users state with data you get back */}
  //     {/* Set loading to true while data is being fetched and render loading component */}
  //     {/* when loading is false (conditional rendering) render the users component that loops through props of users and renders userItem component */}
  //     {/* Look at data you get back. Notice what you have access to */}
  //     {/* create a button in the users component that allows change in the showAddress(boolean) state */}
  //       {/* If the showaddress boolean is true, show all addresses of users */}
  
  //     }