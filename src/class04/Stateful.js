import React, {Component} from 'react';

class ChildList extends Component{
	constructor(props){
		super(props);
	}

	render(){
		let results=this.props.results;
		return(
			<ol>
				{results.map((result)=>{
					return <li key={result.id}>{result.text}</li>;
				})}
			</ol>
		)
	}
}

export default class Stateful extends Component{
	render(){
		return(
			<ChildList results={data}></ChildList>
		)
	}
}

let data=[{id:1,text:'one'},{id:2,text:'two'},{id:3,text:'three'}];
