import React, { Component } from 'react';
import TaskItem from './TaskItem';
import {connect} from 'react-redux';

class TaskList extends Component {
  constructor(props) {
		super(props)
		this.state = {
			filterName: '',
			filterStatus: -1  // all: -1, active: 1, deactive: 0
		}
	}

	onChange = (event) => {
		var target = event.target;
		var name  = target.name;
		var value = target.value;
		
		this.props.onFilter(
			name === 'filterName' ? value : this.state.filterName,
			name === 'filterStatus' ? value : this.state.filterStatus
		)
		this.setState({
			[name] : value
		});
	}
	

  render() {
		var { tasks } = this.props; // var tasks = this.props.tasks;
		var { filterName, filterStatus } = this.state;
    var elmTasks = tasks.map((task,index) => {
        return (
            <TaskItem 
                key={task.id} 
                index={index} 
                task={task} 
                onUpdateStatus={this.props.onUpdateStatus}
                onDelete={this.props.onDelete}
                onUpdate={this.props.onUpdate}
             />
        );
    });
    return (
        <table className="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Active</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td />
                    <td>
                        <div className="input-group">
                            <input 
															type="text" 
															className="form-control" 
															name="filterName"
															value={filterName}
															onChange={this.onChange}
														/>
                        </div>
                    </td>
                    <td>
                        <select 
													className="form-control" 
													name="filterStatus"
													value={filterStatus}
													onChange={this.onChange}
												>
                            <option value={-1}>All</option>
                            <option value={1}>Active</option>
                            <option value={0}>DeActive</option>
                        </select>
                    </td>
                    <td />
                </tr>

                {/* List item */}
                {elmTasks}
            </tbody>
        </table>
    );
  }
}

const mapStateToProps = (state) => {
    return {
			tasks : state.tasks
    }
}

export default connect(mapStateToProps, null)(TaskList);
// export default TaskList;
