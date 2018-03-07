import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      users:[]
      
    };
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => { console.log(res);
        this.setState({
        users: res.data
      })
    })
      .catch((err) => {console.log(err);})
  };
  
  render() {

      const users = this.state.users.map((item, index)=>{
      
      let list=[item.id, item.name, item.email]
      let address=[item.address.suite, item.address.street, item.address.city].join(",")
      return <tr key={index}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{address}</td>
      </tr>
    });
    return (
        <div>
          <center>
          <h1>Coba Get Data</h1>    
          </center>
          <table>
                        <thead>
                        <tr>
                            <th>No </th>
                            <th>Nama </th>
                            <th>Email </th>
                            <th>Alamat </th>
                        </tr>
                        </thead>
                        <tbody>
                            {users}
                        </tbody>
                    </table>
            
        </div>
    );
  }
}


export default App;
