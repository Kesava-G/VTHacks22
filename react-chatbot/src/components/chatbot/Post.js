import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
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
      .post(`/getServerResponse`, userObject)
      .then((res) => {
        console.log(res.status);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return <div>Thank you! Your data was submitted successfully!</div>;
  }
}

export default Post;
