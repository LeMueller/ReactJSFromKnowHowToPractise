import React, {Component} from 'react';
import $ from 'jquery';

class Test extends Component {
	constructor(props){
		super(props);
		this.state={
			name:'white',
			age: 51
		}
	}

	//注意作用域问题
	componentDidMount(){
		$.get('http://localhost:8181/getData', function(res){
			if(res.code !=0){
				alert(res.msg);
			}else{
				let _data=res.data;
				_data=JSON.parse(_data);
				this.setState({name:_data.name, age:_data.age});
			}
		}.bind(this));
	}

	render(){
		return(
			<div>
				<span>Hello, I am {this.state.name}, I am {this.state.age} years old</span>
			</div>
		)
	}
};

export default class UseAjax extends Component {
	render(){
		return(
			<Test />
		)
	}
}