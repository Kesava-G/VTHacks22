import React, { Component } from 'react';
import axios from 'axios';
// import imgData from './Images';
import dataJSON from './data.json';

export class Post extends Component {
  constructor(props) {
    super(props);
    const { steps } = this.props;
    const { queryuser } = steps;
    this.state = { queryuser };
  }
  response = null;
  componentDidMount() {
    const userObject = {
      queryuser: this.state.queryuser.value,
    };
    axios
      .post(`http://localhost:5000/getServerResponse`, userObject)
      .then((res) => {
        console.log(res.status);
        console.log(res.data.keywords);
        this.response = res.data.keywords;
        dataJSON.response = res.data.keywords;
        window.r = res.data.keywords;
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        {/* <img
            src={imgData[this.response.keywords]}
            id='myimg'
            height={250}
            width={350}
            alt={this.response.keywords}
          /> */}
        {/* <div className='data-container'>
          {this.response.map((data, key) => {
            return <div key={key}>{data.keywords}</div>;
          })}
        </div> */}
      </div>
    );
    // return this.state.serverResponse;
  }
}

// export default Post;
export const responseNo = Post.response;
