import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';

class Control extends Component {

    onToggleForm = () => {
        this.props.onToggleForm();
    }

  render() {
    return (
        <div className="panel panel-info">
            <div className="panel-heading">
            <button
                type="button"
                className="btn btn-large btn-default"
                onClick={this.onToggleForm}
            >
            <i className="fa fa-plus-circle"  /> Add job</button>
            </div>
            <div className="panel-body">
                <div className="row">

                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <Search
                            onSearch={this.props.onSearch}
                        />
                    </div>

                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <Sort
                          onSort={this.props.onSort}
                          sortBy={this.props.sortBy}
                          sortValue={this.props.sortValue}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Control;
