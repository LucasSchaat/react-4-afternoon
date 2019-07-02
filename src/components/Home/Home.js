import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div className="box">
        <button className='btn'>
          <Link to='/classlist/MATH1010'>Math 1010</Link>
        </button>
        <button className='btn'>
          <Link to='/classlist/ENG2010'>English 2010</Link>
        </button>
        <button className='btn'>
          <Link to='/classlist/BIO2020'>Biology 2020</Link>
        </button>
      </div>
    );
  }
}
