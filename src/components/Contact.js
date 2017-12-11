import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';

class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    }
  }

  onClick = (isChecked) => {
    this.setState({
      isChecked: isChecked
    });
  }
  
  render() {
    var { isChecked } = this.state;
    return (
      <div className="alert alert-success">
        <strong>Contact page</strong>
        <br />
        <button type="button" className="btn btn-success" onClick={() => this.onClick(false)} >Allow</button>
        <button type="button" className="btn btn-danger" onClick={() => this.onClick(true)} >Do not allow</button>

        <Prompt  
          when={isChecked}
          message={ location => (`Are you sure you want to go to ${location.pathname}`) }
        />
      </div>
    );
  }
}

export default Contact;
