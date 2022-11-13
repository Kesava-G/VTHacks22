import React, { useState, Component } from 'react';
import axios from 'axios';

class Classifier extends Component {
  constructor(props) {
    super(props);
    const { steps } = this.props;
    const { queryuser } = steps;
    this.state = { queryuser };
  }

  componentDidMount() {
    const userObject = {
      queryuser: this.state.queryuser.value,
    };
    axios
      .post(`http://localhost:5000/getServerResponse`, userObject)
      .then((res) => {
        console.log(res.status);
        console.log(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    // return <div>Thank you! Your data was submitted successfully!</div>;
    return this.state.serverResponse;
  }
}

export default Classifier;
