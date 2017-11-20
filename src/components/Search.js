import React, { Component } from 'react';

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			keyword: ''
		};
	}

	onChange = (event) => {
		var target = event.target;
		var name  = target.name;
		var value = target.value;
		
		this.setState({
			[name] : value
		});
	}

	onSearch = () => {
		this.props.onSearch(this.state.keyword);
	}
	
  render() {
		var { keyword } = this.state;
    return (
        <div className="input-group">
            <input 
							type="text" 
							name="keyword" 
							className="form-control" 
							placeholder="Input key..." 
							value={keyword}
							onChange={this.onChange}
						/>
            <div className="input-group-btn"> 
							<button 
								type="button" 
								className="btn btn-large btn-block btn-default"
								onClick={this.onSearch}
							>
								<i className="fa fa-search" aria-hidden="true" /> Search</button>
            </div>
        </div>
    );
  }
}

export default Search;
