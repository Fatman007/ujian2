import React from 'react';
import axios from 'axios';
import Pemain from './components/Pemain';
import './App.css';

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			search: '',
			data: []
		}
	}
	getData = team => 
		axios.get(`https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=${team}`)
		.then(res => this.setState({data: res.data.player}))
		.catch(err => console.log(err))
	render = () =>
		<div id="app">
			<div className="form-group col-sm-10 col-sm-offset-1">
				<h1><center>{`Daftar Pemain ${this.state.search}`}</center></h1>
        <div className="input-group">
				<input onChange={() => this.setState({search: this.refs.search.value})}className="form-control" type="text" ref="search"/>
				<span class="input-group-btn">
        <button onClick={() => this.getData(this.refs.search.value)} className="btn btn-success">Lihat Daftar</button>
        </span>
      </div>
      </div>
			<div id="display">
				{this.state.data.map(x => <Pemain key={x.idPlayer} {...x}/>)}
			</div>
		</div>
}