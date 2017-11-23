import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class Sort extends Component {

	onSort = (sortBy, sortValue) => {
		this.props.onSort({
			by: sortBy,
			value: sortValue
		});
	}

  render() {

    return (
        <div className="input-group">
            <div className="dropdown">
                <button id="dropdownMenu1" className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown"> Sort
                    &nbsp;&nbsp;<span className="caret" /></button>
                <ul className="dropdown-menu">
									<li onClick={ () => {this.onSort('name', 1)}} >
										<a
											role="button"
											className={(this.props.sort.by === 'name' && this.props.sort.value === 1)
											? 'sort-selected' : '' }
										>
											<i className="fa fa-sort-alpha-asc" aria-hidden="true"></i>&nbsp;&nbsp;
											A - Z
										</a>
									</li>
									<li onClick={ () => {this.onSort('name', -1)}} >
										<a
											role="button"
											className={(this.props.sort.by === 'name' && this.props.sort.value === -1)
											? 'sort-selected' : '' }
										>
											<i className="fa fa-sort-alpha-desc" aria-hidden="true"></i>&nbsp;&nbsp;
												Z - A
											</a>
									</li>
									<li role="separator" className="divider"></li>
									<li onClick={ () => {this.onSort('status', 1)}}>
										<a
											role="button"
											className={(this.props.sort.by === 'status' && this.props.sort.value === 1)
											? 'sort-selected' : '' }
										>
											Active
										</a>
									</li>
									<li onClick={ () => {this.onSort('status', -1)}}>
										<a
											role="button"
											className={(this.props.sort.by === 'status' && this.props.sort.value === -1)
											? 'sort-selected' : '' }
										>
											Deactive
										</a>
									</li>
                </ul>
            </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
	return {
    sort: state.sortTask
  };
}

const mapDispatchToProps = (dispatch, props) => {
	return {
    onSort : (dataSort) => { // sortBy, sortValue
			dispatch(actions.sortTask(dataSort));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Sort)
