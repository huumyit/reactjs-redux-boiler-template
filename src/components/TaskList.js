import React, {Component} from 'react';
import TaskItem from './TaskItem';
import {connect} from 'react-redux';
import * as actions from './../actions/index';

class TaskList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filterName: '',
      filterStatus: -1 // all: -1, active: 1, deactive: 0
    }
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    var filter = {
      name: name === 'filterName' ? value : this.state.filterName,
      status: name === 'filterStatus' ? value : this.state.filterStatus
    };
    this.props.onFilterTable(filter);
    this.setState({[name]: value});
  }

  render() {
    var { tasks, filterTable, keyword, sort } = this.props;

    tasks = tasks.filter((task) => {
      return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });

    // Input filter name
    if (filterTable.name) {
      tasks = tasks.filter((task) => {
        return task.name.toLowerCase().indexOf(filterTable.name) !== -1;
      });
    }

    tasks= tasks.filter((task) => {
      if (filterTable.status === -1) {
        return task;
      } else {
        return task.status === (filterTable.status === 1 ? true : false);
      }
    });

    // sort
    if (sort.by === 'name') {
      tasks.sort((a,b) => {
        if (a.name > b.name) return -sort.value;
        else if (a.name < b.name) return sort.value;
        else return 0;
      });
    }else {
      tasks.sort((a,b) => {
        if (a.status > b.status) return -sort.value;
        else if (a.status < b.status) return sort.value;
        else return 0;
      });
    }

    var { filterName, filterStatus } = this.state;
    var elmTasks = tasks.map((task, index) => {
      return (<TaskItem key={task.id} index={index} task={task}/>);
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
            <td/>
            <td>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  name="filterName"
                  value={filterName}
                  onChange={this.onChange}/>
              </div>
            </td>
            <td>
              <select
                className="form-control"
                name="filterStatus"
                value={filterStatus}
                onChange={this.onChange}>
                <option value={-1}>All</option>
                <option value={1}>Active</option>
                <option value={0}>DeActive</option>
              </select>
            </td>
            <td/>
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
    tasks: state.tasks,
    filterTable: state.filterTable,
    keyword: state.searchTask,
    sort: state.sortTask
  }
}

const mapDispatchToProps = (dispatch, props) => {
	return {
    onFilterTable : (filter) => {
      dispatch(actions.filterTask(filter));
    }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList)
