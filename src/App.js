import React, { Component } from 'react';
import _ from 'lodash'; //All function of the lodash
import './App.css';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';
import { connect } from 'react-redux';
import * as actions from './actions/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // tasks : [],
      // isDisplayForm: false,
      taskEditing: null,
      // filter: {
      //   name: '',
      //   status: -1 // all: -1, active: 1, deactive: 0
      // },
      keyword: '',
      // sort: {
      //   by: 'name',
      //   value: 1
      // }
      sortBy: 'name',
      sortValue: 1
    };
  }

  // componentWillMount() {
  //   if(localStorage && localStorage.getItem('tasks')) {
  //     var tasks = JSON.parse(localStorage.getItem('tasks'));
  //     this.setState({
  //       tasks: tasks
  //     });
  //   }
  // }

  onGenerateData = () => {
    var tasks = [
      {
        id: this.generateID(),
        name: 'Nguyen Van A',
        status: false
      },
      {
        id: this.generateID(),
        name: 'Nguyen Van B',
        status: true
      },
      {
        id: this.generateID(),
        name: 'Nguyen Van C',
        status: false
      }
    ];

    this.setState({
      tasks: tasks
    });

    // set localStorage on browser and convert object to JSON
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // // random key ID
  // s4() {
  //   return Math.floor(( 1 + Math.random()) * 0x10000).toString(16).substring(1);
  // }

  // generateID() {
  //   return (
  //     this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4()
  //   )
  // }

  onToggleForm = () => {
    // if (this.state.isDisplayForm && this.state.taskEditing !== null) {
    //   this.setState({
    //     isDisplayForm: true,
    //     taskEditing: null
    //   });
    // } else {
    //   this.setState({
    //     isDisplayForm: !this.state.isDisplayForm,
    //     taskEditing: null
    //   });
    // }

    this.props.onToggleForm();
  }

  // onCloseForm = () => {
  //   this.setState({
  //     isDisplayForm: false
  //   });
  // }

  onShowForm = () => {
    this.setState({
      isDisplayForm: true
    });
  }

  // onSubmit = (data) => {
  //   var { tasks } = this.state; // tasks  = this.state.tasks;

  //   if (data.id === '') {
  //     data.id = this.generateID(); // task
  //     tasks.push(data);
  //   } else {
  //     // Editing
  //     var index = this.findIndex(data.id);
  //     tasks[index] = data;
  //   }

  //   this.setState({
  //     tasks: tasks,
  //     taskEditing: null
  //   });

  //   // Save tasks into localStorage
  //   localStorage.setItem('tasks', JSON.stringify(tasks));
  // }

  onUpdateStatus = (id) => {
    var {tasks} = this.state;
    // var index = this.findIndex(id);
    // Using lodash
    var index = _.findIndex(tasks, (task) => {
      return task.id === id;
    });

    if(index !== -1) {
      tasks[index].status = !tasks[index].status;
      this.setState({
        tasks: tasks
      });

      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }

  findIndex = (id) => {
    var { tasks } = this.state;
    var result  = -1;

    tasks.forEach(function(task, index) {
      if(task.id === id) {
        result = index;
      }
    });
    return result;
  }

  onDelete = (id) => {
    var {tasks} = this.state;
    var index = this.findIndex(id);

    if(index !== -1) {
      // The splice() method adds/removes items to/from an array
      tasks.splice(index, 1);
      this.setState({
        tasks: tasks
      });

      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    this.onCloseForm();
  }

  onUpdate = (id) => {
    var {tasks} = this.state;
    var index = this.findIndex(id);
    var taskEditing  = tasks[index];

    this.setState({
      taskEditing: taskEditing
    });

    this.onShowForm();
  }

  onFilter = (filterName, filterStatus) => {
    filterStatus = parseInt(filterStatus, 10);
    this.setState({
      filter: {
        name: filterName.toLowerCase(),
        status: filterStatus
      }
    });
  }

  onSearch = (keyword) => {
    this.setState({
      keyword: keyword
    });
  }

  onSort = (sortBy, sortValue) => {

    this.setState({
      sortBy: sortBy,
      sortValue: sortValue
    });
  }

  render() {
    // parameter according to ES6
    var {
      // tasks,
      // isDisplayForm,
      taskEditing,
      // filter,
      // keyword,
      sortBy,
      sortValue
    } = this.state; // var tasks = this.state.tasks

    var { isDisplayForm } = this.props;


    // if (filter) {
    //   if (filter.name) {
    //     tasks = tasks.filter((task) => {
    //       return task.name.toLowerCase().indexOf(filter.name) !== -1;
    //     });
    //   }
    //   // if (filter.status) // !== null, !== undefined, !== 0
    //   tasks= tasks.filter((task) => {
    //     if (filter.status === -1) {
    //       return task;
    //     } else {
    //       return task.status === (filter.status === 1 ? true : false);
    //     }
    //   });
    // }

    // if (keyword) {
    //   // tasks = tasks.filter((task) => {
    //   //   return task.name.toLowerCase().indexOf(keyword) !== -1; // Returns -1 if the item is not found.
    //   // });

    //   // Using lodash
    //   tasks = _.filter(tasks, (task) => {
    //      return task.name.toLowerCase().indexOf(keyword) !== -1;
    //   });
    // }

    // if (sortBy === 'name') {
    //   tasks.sort((a,b) => {
    //     if (a.name > b.name) return -sortValue;
    //     else if (a.name < b.name) return sortValue;
    //     else return 0;
    //   });
    // }else {
    //   tasks.sort((a,b) => {
    //     if (a.status > b.status) return -sortValue;
    //     else if (a.status < b.status) return sortValue;
    //     else return 0;
    //   });
    // }

    var elmTaskForm = isDisplayForm
        ? <TaskForm
            // onCloseForm={this.onCloseForm}
            // onSubmit={this.onSubmit}
            task={taskEditing}
          />
        : '';

    return (
      <div className="container mt-50">
          <div className="row">
            <div className={ isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''} >
              {/* <TackForm /> */}
              {elmTaskForm}
            </div>

            <div className={ isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'} >

              {/* <button
                type="button"
                className="btn btn-large btn-danger"
                onClick={this.onGenerateData}
              >
              Generate Data
            </button>
              <br/>
              <br/> */}

              <Control
                onToggleForm={this.onToggleForm}
                onSearch={this.onSearch}
                onSort={this.onSort}
                sortBy={sortBy}
                sortValue={sortValue}
              />

              <TaskList
                // tasks={tasks}
                onUpdateStatus={this.onUpdateStatus}
                onDelete={this.onDelete}
                onUpdate={this.onUpdate}
                onFilter={this.onFilter}
              />
            </div>

          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isDisplayForm: state.isDisplayForm 
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onToggleForm : () => {
      dispatch(actions.toggleForm());
    },
    onShowForm : () => {
      dispatch(actions.openForm());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
// export default App;
