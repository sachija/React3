import React, { Component } from "react";
class feedback extends Component {
  constructor(props) {
    super(props);

    this.displayData = [];
    this.state = {
      hideForm: false,
      showData: this.displayData,
      Name: "",
      Department: "",
      Rating: "",
    };
    this.appendData = this.appendData.bind(this);
    this.setName = this.setName.bind(this);
    this.setDepartment = this.setDepartment.bind(this);
    this.setRating = this.setRating.bind(this);
    this.hideTheForm = this.hideTheForm.bind(this);
    this.showTheForm = this.showTheForm.bind(this);
  }

  appendData() {
    this.displayData.push(
      <div className="append-data">
        Name: {this.state.name} | Department: {this.state.department} | Rating:{" "}
        {this.state.rating}
      </div>
    );

    this.setState({
      showData: this.displayData,
      name: "",
      department: "",
      rating: "",
    });
  }
  hide(s) {
    this.setState({
      hideForm: !s.target.value,
    });
  }

  setName(s) {
    let getName = s.target.value;
    this.setState({
      name: getName,
    });
  }

  setDepartment(s) {
    let getDepartment = s.target.value;
    this.setState({
      department: getDepartment,
    });
  }

  setRating(s) {
    let getRating = s.target.value;
    this.setState({
      rating: getRating,
    });
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
  };

  hideTheForm() {
    this.appendData();
    this.setState({
      hideForm: !this.state.hideForm,
    });
  }

  showTheForm() {
    this.setState({
      hideForm: !this.state.hideForm,
    });
  }

  render() {
    return (
      <div id="box">
        <h2 className="head">EMPLOYEE'S FEEDBACK FORM</h2>
        {this.state.hideForm ? (
          <>
            <div id="text">{this.displayData}</div>
            <button onClick={this.showTheForm}>Go Back</button>
          </>
        ) : null}

        {!this.state.hideForm ? (
          <form className="form" onSubmit={this.handleSubmit}>
            <label>
              Name:{" "}
              <input type="text" value={this.state.name} onChange={this.setName} />
            </label>
            <label>
              Department:{" "}
              <input type="text" value={this.state.department} onChange={this.setDepartment}
              />
            </label>
            <label>
              Rating:{" "}
              <input type="text" value={this.state.rating} onChange={this.setRating}
              />
            </label>
            <button onClick={this.hideTheForm}>Submit</button>
          </form>
        ) : null}
      </div>
    );
  }
}

export default feedback;