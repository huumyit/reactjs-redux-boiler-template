import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskForm extends Component {

				constructor(props) {
						super(props);
						this.state = {
								id: '',
								name: '',
								status: false
						};
				}

				componentWillMount() {
						if(this.props.task) {
								this.setState({
										id: this.props.task.id,
										name: this.props.task.name,
										status: this.props.task.status
								});
								console.log(this.props.task);
						}
				}

				componentWillReceiveProps(nextProps) {
						if( nextProps && nextProps.task) {
								this.setState({
										id: nextProps.task.id,
										name: nextProps.task.name,
										status: nextProps.task.status
								});
						}else if( !nextProps.task ) {
								this.setState({
										id: '',
										name: '',
										status: false
								});
						}
				}
				

		onCloseForm = () => {
				this.props.onCloseForm();
				}
				
				onChange = (event) => {
						var target = event.target;
						var name  = target.name;
						var value = target.value;
						
						if( name === 'status') {
								value = target.value === 'true' ? true : false;
						}
						this.setState({
								[name] : value
						});
				}

				onSubmit = (event) => {
						event.preventDefault();
						// this.props.onSubmit(this.state);
						this.props.onAddTask(this.state);

						// After submit, cancle and close form
						this.onClear();
						this.onCloseForm();
				}

				onClear = () => {
						this.setState({
								name: '',
								status: false
						});
				}

	render() {
				
				var { id } = this.state;

		return (
				<div className="panel panel-info">
						<div className="panel-heading">
								<h3 className="panel-title">
																		{ id !== '' ? 'Update Job' : 'Add Job'}
								 <i 
										className="fa fa-times-circle pull-right"
										aria-hidden="true"
										onClick={this.onCloseForm}  
									/>
								</h3>
								
								</div>
								<div className="panel-body">
																{/* form */}
								<form onSubmit={this.onSubmit}>
										<div className="form-group">
										<label>Name: </label>
										<input 
																						type="text" 
																						className="form-control" 
																						name="name" 
																						value={this.state.name}
																						onChange={this.onChange}
																				/>
										</div>
										<div className="form-group">
										<label>Status: </label>
										<select 
																						className="form-control" 
																						name="status"
																						value={this.state.status}
																						onChange={this.onChange}
																				>
												<option value={true}>Active</option>
												<option value={false}>Disable</option>
										</select>
										</div>
										<div className="form-group text-center">
										<button 
																						type="submit" 
																						className="btn btn-large btn-success"
																				>Save</button>&nbsp;
										<button 
																						type="reset" 
																						className="btn btn-large btn-danger"
																						onClick={this.onClear}
																				>Cancle</button>&nbsp;
										</div>
								</form>
						</div>
				</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
			// prop: state.prop
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		onAddTask: (task) => {
				dispatch(actions.addTask(task))
		},
		onCloseForm : () => {
			dispatch(actions.closeForm());
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm)
// export default TaskForm;
