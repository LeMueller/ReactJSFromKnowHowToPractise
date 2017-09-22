import React, {Component} from 'react';
import $ from 'jquery';

let _score=[
	{ name:"zhang3", gender:"male", chinese: 85, math: 98, _id: 0 },
	{ name:"zhang3", gender:"female", chinese: 95, math: 90, _id: 1 },
	{ name:"li4", gender:"male", chinese: 65, math: 48, _id: 2 },
	{ name:"damei", gender:"female", chinese: 95, math: 100, _id: 3 },
	{ name:"wangwu", gender:"male", chinese: 75, math: 88, _id: 4 },
	{ name:"yhaoqian", gender:"male", chinese: 75, math: 98, _id: 5 },
	{ name:"ermei", gender:"female", chinese: 90, math: 98, _id: 6 },
];

//最外层学生列表
class StudentScoreTable extends Component {
	constructor(props){
		super(props);
		this.state={
			genderFilter: 0,
			nameFilter: '',
			data:_score,
			modifyScore: null
		}

		this.onGenderChange=this.onGenderChange.bind(this);
		this.onDeleteScoreItem=this.onDeleteScoreItem.bind(this);
		this.onNameChange=this.onNameChange.bind(this);
		this.onModify=this.onModify.bind(this);
		this.saveHandler=this.saveHandler.bind(this);
	}

	onGenderChange(gender){
		this.setState({genderFilter:gender});
	}

	onDeleteScoreItem(id){
		let data = this.state.data.map(function(item){
			if(item._id===id){
				item.deleteFlag = true;
			}

			return item;
		});

		this.setState({data:data});
	}

	onNameChange(name){
		this.setState({nameFilter:name});
	}

	onModify(id){
		let _this=this;
		//array.find(function(var){if(条件){return}}) @var array中每个item，@条件 筛选条件， 
		this.state.data.find(function(val){
			if(val._id == id){
				_this.setState({modifyScore: val});
				return true;
			}
		})
	}

	//保存修改
	saveHandler(newScore){
		let data = this.state.data.map(function(val){
			if (val._id == newScore._id){
				for(var i in val){
					val[i] = newScore[i]
				}
			}

			return val;
		});
		this.setState({data:data});
	}

	render(){
		return(
			<div>
				<GenderFilter onGenderChange={this.onGenderChange} genderFilter={this.state.genderFilter}/>
				<NameFilter onNameChange={this.onNameChange} nameFilter={this.state.nameFilter}/>
				<ModifyScore val={this.state.modifyScore} save={this.saveHandler}/>
				<ScoreTable 
					scoreNotes={this.state.data}
					genderFilter={this.state.genderFilter}
					nameFilter={this.state.nameFilter}
					deleteScoreItem={this.onDeleteScoreItem}
					modifyItem={this.onModify}
					/>
			</div>
		)
	}
}

class ModifyScore extends Component {
	constructor(props){
		super(props);
		this.state={
			name:'',
			gender:1,
			chinese:0,
			math:0,
			_id:0
		}

		this.saveHandler=this.saveHandler.bind(this);
	}

	componentWillReceiveProps(nextProps){
		if(!nextProps || !nextProps.val) return;
		//this.replaceState(nextProps.val);
		console.log(nextProps);
		
		this.setState({name:nextProps.val.name, gender:nextProps.val.gender, 
			chinese:nextProps.val.chinese, math:nextProps.val.modifyHandler, _id:nextProps.val._id});

		let tmpData=nextProps.val;
		this.refs.name.value=tmpData.name;
		this.refs.gender.value=tmpData.gender;
		this.refs.chinese.value=tmpData.chinese;
		this.refs.math.value=tmpData.math;
	}

	saveHandler(){
		if(this.state._id==-1){
			alert("please select a student!");
			return;
		}

		this.props.save({
			name:this.refs.name.value,
			gender:this.refs.gender.value,
			chinese:this.refs.chinese.value,
			math: this.refs.math.value,
			_id:this.state._id
		});
	}

	render(){
		return(
			<div>
				<span>Name</span>
				<input ref="name" defaultValue={this.state.name}/>
				<span>Gender</span>
				<select ref="gender" defaultValue={this.state.gender}>
					<option value="male">male</option>
					<option value="female">female</option>
				</select>
				<span>Chinese</span>
				<input ref='chinese' defaultValue={this.state.chinese}/>
				<span>Math</span>
				<input ref='math' defaultValue={this.state.math}/>
				<button onClick={this.saveHandler}>Save</button>
			</div>
		)
	}
}

class GenderFilter extends Component {
	constructor(props){
		super(props);
		this.genderChangeHandler=this.genderChangeHandler.bind(this);
	}

	genderChangeHandler(){
		this.props.onGenderChange(this.refs.genderFilter.value);
	}

	render(){
		return(
			<div className="condition-item">
				<label>
					<span>Select according to gender</span>
					<select onChange={this.genderChangeHandler} value={this.props.genderFilter} ref="genderFilter">
						<option value="0">All</option>
						<option value="1">Male</option>
						<option value="2">Female</option>
					</select>
				</label>
			</div>
		)
	}

}

class NameFilter extends Component {
	constructor(props){
		super(props);

		this.nameChangeHandler=this.nameChangeHandler.bind(this);
	}

	nameChangeHandler(){
		this.props.onNameChange(this.refs.nameFilter.value);
	}

	render(){
		return(
			<div className="condition-item">
				<label>
					<span>Select according to name</span>
					<input type="text" ref="nameFilter" onChange={this.nameChangeHandler} value={this.props.nameFilter}/>
				</label>
			</div>
		)
	}
}

class ScoreTable extends Component{
	constructor(props){
		super(props);

		this.deleteItemHandler=this.deleteItemHandler.bind(this);
		this.modifyItemHandler=this.modifyItemHandler.bind(this);
	}

	deleteItemHandler(id){
		this.props.deleteScoreItem(id);
	}

	modifyItemHandler(id){
		this.props.modifyItem(id);
	}

	render(){
		let scoreNotes=[];
		let genderFilter=this.props.genderFilter,
			nameFilter=this.props.nameFilter,
			GENDER = ['','male','female'],
			_this=this;
		$.each(this.props.scoreNotes, function(index, scoreItem){
			if(genderFilter !== 0 && nameFilter === ''){
				//仅genderFilter生效
				if(GENDER[genderFilter]===scoreItem.gender){
					!scoreItem.deleteFlag && scoreNotes.push(<ScoreItem key={scoreItem._id} score={scoreItem} onDelete={_this.deleteItemHandler} onModify={_this.modifyItemHandler}/>);
				}
				return;
			}

			if(genderFilter ===0 && nameFilter !== ''){
				//仅nameFilter生效
				if(scoreItem.name.indexOf(nameFilter) > -1){
					!scoreItem.deleteFlag && scoreNotes.push(<ScoreItem key={scoreItem._id} score={scoreItem} onDelete={_this.deleteItemHandler} onModify={_this.modifyItemHandler}/>);
				}
				return;
			}

			if(genderFilter !==0 && nameFilter !== ''){
				//两个都生效
				if(GENDER[genderFilter]===scoreItem.gender && scoreItem.name.indexOf(nameFilter) > -1){
					!scoreItem.deleteFlag && scoreNotes.push(<ScoreItem key={scoreItem._id} score={scoreItem} onDelete={_this.deleteItemHandler} onModify={_this.modifyItemHandler}/>);
				}
				return;
			}

			//两个都不生效
			!scoreItem.deleteFlag && scoreNotes.push(<ScoreItem key={scoreItem._id} score={scoreItem} onDelete={_this.deleteItemHandler} onModify={_this.modifyItemHandler}/>);
		});

		return(
			<table>
				<thread>
					<tr>
						<th>Name</th>
						<th>Gender</th>
						<th>Chinese</th>
						<th>Math</th>
						<th>Option</th>
					</tr>
				</thread>
				<tbody>
					{scoreNotes}
				</tbody>
			</table>
		);
	}
}

class ScoreItem extends Component {
	constructor(props){
		super(props);

		this.deleteHandler=this.deleteHandler.bind(this);
		this.modifyHandler=this.modifyHandler.bind(this);
	}

	deleteHandler(){
		this.props.onDelete(this.props.score._id);
	}

	modifyHandler(){

		this.props.onModify(this.props.score._id);
	}

	render(){
		let score=this.props.score;
		return(
			<tr>
				<td>{score.name}</td>
				<td>{score.gender}</td>
				<td>{score.chinese}</td>
				<td>{score.math}</td>
				<td><span className="trigger" onClick={this.modifyHandler}>Change</span>
					<span className="trigger" onClick={this.deleteHandler}>Delete</span>
				</td>
			</tr>
		)
	}
}


export default class UseStudent extends Component {
	render(){
		return(
			<StudentScoreTable />
		)
	}
}

