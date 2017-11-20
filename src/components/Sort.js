import React, { Component } from 'react';

class Sort extends Component {

	// constructor(props) {
	// 	super(props)
	// 	this.state = {
	// 		sort: {
	// 			by: 'name',
	// 			value: 1
	// 		}
	// 	};
	// }


	// componentWillReceiveProps(nextProps) {
	// 	console.log(nextProps);
	// }

	onClick = (sortBy, sortValue) => {
		// this.setState({
		// 	sort: {
		// 		by: sortBy,
		// 		value: sortValue
		// 	}
		// });
		this.props.onSort(sortBy, sortValue);
	}

  render() {

		// var { sort } = this.state;

    return (
        <div className="input-group">
            <div className="dropdown">
                <button id="dropdownMenu1" className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown"> Sort
                    &nbsp;&nbsp;<span className="caret" /></button>
                <ul className="dropdown-menu">
									<li onClick={ () => {this.onClick('name', 1)}} >
										<a
											role="button"
											className={(this.props.sortBy === 'name' && this.props.sortValue === 1)
											? 'sort-selected' : '' }
										>
											<i className="fa fa-sort-alpha-asc" aria-hidden="true"></i>&nbsp;&nbsp;
											A - Z
										</a>
									</li>
									<li onClick={ () => {this.onClick('name', -1)}} >
										<a
											role="button"
											className={(this.props.sortBy === 'name' && this.props.sortValue === -1)
											? 'sort-selected' : '' }
										>
											<i className="fa fa-sort-alpha-desc" aria-hidden="true"></i>&nbsp;&nbsp;
												Z - A
											</a>
									</li>
									<li role="separator" className="divider"></li>
									<li onClick={ () => {this.onClick('status', 1)}}>
										<a
											role="button"
											className={(this.props.sortBy === 'status' && this.props.sortValue === 1)
											? 'sort-selected' : '' }
										>
											Active
										</a>
									</li>
									<li onClick={ () => {this.onClick('status', -1)}}>
										<a
											role="button"
											className={(this.props.sortBy === 'status' && this.props.sortValue === -1)
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

export default Sort;
