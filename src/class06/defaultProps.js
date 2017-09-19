import React, {Component} from 'react';

export default class DefaultProps extends Component{
	static propTypes = {
		//name: React.PropTypes.string.isRequired
		// name: React.PropTypes.oneOf(['News', 'World']).isRequired
		// name: React.PropTypes.oneOfType(['React.PropTypes.number','React.PropTypes.bool']).isRequired
		// name: React.PropTypes.number.isRequired
		// name: React.PropTypes.arrayOf({React.PropTypes.string}).isRequired
		// name: React.PropTypes.bool.isRequired
		
		//规定props的首字母必须为大写W，如果不是，报自定义错误
		name(props, propName, componentName){
			if(!/^W/.test(props[propName])){
				return new Error(
					'Invalid prop `'+propName + '` supplied to' + ' `' + componentName + '`. Validation failed.'
				)
			}
		} 
		
	}

	static defaultProps = {
		name: 'dafault'
	}

	render(){
		return(
			<div>
				<span>Hello {this.props.name} !</span>
			</div>
		)
	}
}