import React, { Component } from 'react'
import './contactform.scss'

export default class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name || '',
      email: props.email || '',
      error: ''
    }
  }

  onChangeInput = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmitForm = (e) => {
    e.preventDefault();
    const {name, email} = this.state;

    this.props.onSubmitForm({name, email});
  }

  render() {
    const {name, email} = this.state;
    return (
      <div className="contact-form">
        <form onSubmit={this.onSubmitForm} className="form">
          <div>
            <label>Name</label>
            <input name="name" value={name} onChange={this.onChangeInput}/>
          </div>
          <div>
            <label>Email</label>
            <input name="email" value={email} onChange={this.onChangeInput}/>
          </div>
          <button>Contact Form</button>
        </form>
      </div>
    )
  }
}
