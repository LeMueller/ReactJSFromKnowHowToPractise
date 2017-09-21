import React, {Component} from 'react';
import $ from 'jquery';

class Test extends Component {
	constructor(props){
		super(props);
		this.state={
			isloading:true,
			error:null,
			data:null
		}
	}

	componentDidMount(){
		this.serverRequest = $.get('http://localhost:8181/getData', function(res){
			if(res.code != 0){
				this.setState({isloading:false, error: res.msg});
			}else{
				let _data = res.data;
				_data = JSON.parse(_data);
				this.setState({isloading:false, error:null, data:{name: _data.name, age: _data.age}});
			}
		}.bind(this));
	}

	componentWillUnmount(){
		this.serverRequest.abort();
	}

	render(){
		if(this.state.isloading){
			return <span>loading...</span>;
		}else if(this.state.error){
			return <span>Error: {this.state.error}</span>;
		}else{
			return <span>Hello, I am {this.state.data.name}, I am {this.state.data.age} years old</span>
		}		
	}
}

export default class UseLoading extends Component {
	render(){
		return(
			<Test />
		)
	}
}