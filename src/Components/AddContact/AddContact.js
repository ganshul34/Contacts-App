import React, {  Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

import "./AddContact.css";

export default class AddContact extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      error: false,
      errorMessage: ""
    };
  }
  onChangeName = e => {
    this.setState({
      name: e.target.value
    });
  };
  onChangePhone = e => {
    this.setState({
      phone: e.target.value
    });
  };
  addContact = e => {
    e.preventDefault();
    const phone = this.state.phone;
    if (phone.length !== 10||isNaN(phone)) {
      this.setState({
        error: true,
        errorMessage: "Please enter a valid phone no."
      });
    } else {
      this.props.addContact({
        name: this.state.name,
        phone: this.state.phone
      });
    }
  };
  render() {
    let errorMessage;
    if (this.state.error) {
      errorMessage = this.state.errorMessage;
    }
    return (
      <Fragment>
        <Header>Add a contact</Header>
        <div className="AddContact_container">
          <Link to="/" className="form_link">
            Go Back
          </Link>
          <form className="AddContact_form" onSubmit={this.addContact}>
            <div className="form_control">
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                id="name"
                onChange={this.onChangeName}
                required
              />
            </div>
            <div className="form_control">
              <label htmlFor="phone">Phone: </label>
              <input
                type="text"
                id="phone"
                onChange={this.onChangePhone}
                required
              />
            </div>
            <h4 className="form_error">{errorMessage}</h4>
            <hr />
            <h3>Subscriber to be added:</h3>
            <div className="form_display">
              Name: <span>{this.state.name}</span>
            </div>
            <div className="form_display">
              Phone: <span>{this.state.phone}</span>
            </div>
            <button type="submit" className="form_add">
              ADD
            </button>
          </form>
        </div>
      </Fragment>
    );
  }
}

