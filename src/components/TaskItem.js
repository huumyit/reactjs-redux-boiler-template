import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskItem extends Component {

	onUpdateStatus = () => {
		this.props.onUpdateStatus(this.props.task.id);
		
	}

	onDelete = () => {
		this.props.onDelete(this.props.task.id);
    }
    
	onUpdate = () => {
		this.props.onUpdate(this.props.task.id);
	}

  render() {

    var {task, index} = this.props;

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{task.name}</td>
            <td>
                <span 
                    className={ task.status === true ? 'label label-success' : 'label label-danger' } 
                    onClick={this.onUpdateStatus}
                >{ task.status === true ? 'Active' : 'Disable' }
                </span>
            </td>
            <td>
                <button 
                    type="button" 
                    className="btn btn-large btn-default"
                    onClick={this.onUpdate}
                >
                <i className="fa fa-pencil-square-o" aria-hidden="true" />
                &nbsp; Edit
                </button>
                &nbsp;&nbsp;
                <button 
                    type="button" 
                    className="btn btn-large btn-danger"
                    onClick={this.onDelete}
                ><i className="fa fa-trash" aria-hidden="true" />
                &nbsp; Delete
                </button>
            </td>
        </tr>
    );
  }
}

const mapStateToProps = (state) => {
	return {};
}

const mapDispatchToProps = (dispatch, props) => {
	return {
    onUpdateStatus : (id) => {
      dispatch(actions.updateStatus(id));
    }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem)
// export default TaskItem;
