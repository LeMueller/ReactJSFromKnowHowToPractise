import React, {Component} from 'react';

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
		//array.find(function(var){if(条件){return}}) @var array中每个item，@条件 筛选条件， 
		this.state.data.find(function(val){
			if(val._id == id){
				this.setState({modifyScore: val});
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

	componentWillRecieveProps(nextProps){
		if(!nextProps || !nextProps.val) return;
		this.replaceState(nextProps.val);
		let tmpData=nextProps.val;
		this.refs.name.value=tmpData.name;
		this.refs.gender.value=tmpData.gender;
		this.refs.chinese.value=tmpData.chinese;
		this.refs.math.value=tmpData.math;
	}

	saveHandler(){
		if(this.state._id==0){
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














export default class UseStudent extends Component {
	render(){
		return(
			<StudentScoreTable />
		)
	}
}

