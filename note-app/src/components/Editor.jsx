import { Component } from 'react';
import './Editor.css'
export default class Editor extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    };
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
        <div>
    <h1>Kalvium Pro-note</h1>
      <div className='parent'>
        <div className='input'>
          <h3>Input</h3>
          <textarea className='inputs' onChange={this.handleChange} value={this.state.text}></textarea>
        </div>
        <div className='output'>
          <h3>Pro Note</h3>
          <textarea className='holder' readOnly value={this.state.text}></textarea>
        </div>
      </div>
      </div>
    );
  }
}