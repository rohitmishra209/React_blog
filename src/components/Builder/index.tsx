import * as React from "react";
import { Component } from 'react';
import { render } from 'react-dom';
import * as ReactDOM from 'react-dom';
import './style.scss';

export default class Builder extends Component {
  render() {
    const fields = [
      'Single Line Textbox',
      'Rich Text Editor', 
      'Image Field',
       'Group Field'
       ];
    const listItems = fields.map((fields) =>
      <li>{fields}</li>
    );
    return (
      <div className="container">
        <div className="field">
          <ul>{listItems}</ul>
        </div>
        <div className="field-holder"></div>
      </div>
    );
  }
}

render(<Builder />, document.getElementById('root'));
