import React, {Component} from 'react';
import ReactDOM from 'react-dom';

let countTime = 3;

class Child extends Component {
	constructor(props){
		super(props);

		this.state={
			time: new Date().toTimeString()
		}
	}

	componentWillReceiveProps(){
		this.setState({time: new Date().toTimeString()})

		//只能通过拥有者进行移除
		/*if(this.props.number==3){
			ReactDOM.unmountComponentAtNode(this.refs.myDiv);//最顶尖的元素可以这么干
			//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
			//this.refs.myDiv.remove();
		}*/

		
	}

	shouldComponentUpdate(nextProps, nextState){
		console.log('shouldComponentUpdate');
		return true;
	}

	componentWillUpdate(nextProps, nextState){
		//在接收到新props或state后，更新之前调用
		console.log('componentWillUpdate');
		
	}

	componentDidUpdate(nextProps, nextState){
		//在接收到新props或state后，更新之后调用
		console.log('componentDidUpdate');
		console.log(countTime);
		let _this=this;


	}

	//被父级元素替换掉，或者删除掉是执行
	componentWillUnmount(){
		console.log('child will be unmounted...');
	}

	render(){
		return(
			<div ref="myDiv">Child get props: {this.props.number} at {this.state.time}</div>
		)
	}
}

class Parent extends Component{
	constructor(props){
		super(props);
		this.state={
			count:0
		}

		this.clickHandler=this.clickHandler.bind(this);
	}

	componentWillMount(){
		this.setState({count:1});
	}

	clickHandler(){
		this.setState({count:this.state.count+1});
	}

	render(){
		return(
			<div onClick={this.clickHandler}>
				{this.state.count ==3 ?
					'' :
					<Child number={this.state.count}></Child>
				}
			</div>
		)
	}
}

export default class UseComponentWillUnmount extends Component {
	render(){
		return(
			<Parent />
		)
	}
}