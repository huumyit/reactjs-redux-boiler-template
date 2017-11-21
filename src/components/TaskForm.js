import React, {Component} from 'react';
import {connect} from 'react-redux';
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
    if (this.props.itemEditing && this.props.itemEditing.id !== null) {
      this.setState({
				id: this.props.itemEditing.id, 
				name: this.props.itemEditing.name, 
				status: this.props.itemEditing.status
			});
		} else {
      this.onClear();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.itemEditing) {
      this.setState({
				id: nextProps.itemEditing.id, 
				name: nextProps.itemEditing.name, 
				status: nextProps.itemEditing.status
			});
    } else {
      this.onClear();
    }
  }

  onCloseForm = () => {
    this.props.onCloseForm();
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;

    if (name === 'status') {
      value = target.value === 'true'
        ? true
        : false;
    }
    this.setState({[name]: value});
  }

  onSave = (event) => {
    event.preventDefault();
    this.props.onSaveTask(this.state);

    // After submit, cancle and close form
    this.onClear();
    this.onCloseForm();
  }

  onClear = () => {
    this.setState({
      // id: '',  // If id = '' return Add job
      name: '', 
      status: false
    });
  }

  render() {
    var { id } = this.state;
    if (!this.props.isDisplayForm) return null;
    
    return (
      <div className="panel panel-info">
        <div className="panel-heading">
          <h3 className="panel-title">
            {id !== ''
              ? 'Update Job'
              : 'Add Job'}
            <i
              className="fa fa-times-circle pull-right"
              aria-hidden="true"
              onClick={this.onCloseForm}/>
          </h3>

        </div>
        <div className="panel-body">
          <form onSubmit={this.onSave}>
            <div className="form-group">
              <label>Name:
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={this.state.name}
                onChange={this.onChange}/>
            </div>
            <div className="form-group">
              <label>Status:
              </label>
              <select
                className="form-control"
                name="status"
                value={this.state.status}
                onChange={this.onChange}>
                <option value={true}>Active</option>
                <option value={false}>Disable</option>
              </select>
            </div>
            <div className="form-group text-center">
              <button type="submit" className="btn btn-large btn-success">Save</button>&nbsp;
              <button
                type="reset"
                className="btn btn-large btn-danger"
                onClick={this.onClear}>Cancle</button>&nbsp;
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
		isDisplayForm: state.isDisplayForm, 
    itemEditing: state.itemEditing
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSaveTask: (task) => {
      dispatch(actions.saveTask(task));
    },
    onCloseForm: () => {
      dispatch(actions.closeForm());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm)