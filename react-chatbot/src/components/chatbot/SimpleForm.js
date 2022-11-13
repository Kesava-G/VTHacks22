import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import Post from './Post';
import { storage } from '..../firebaseConfig.js';

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#EF6C00',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#EF6C00',
  botFontColor: '#fff',
  userBubbleColor: '#630031',
  userFontColor: '#fff',
};

const config = {
  headerTitle: 'Virya - The Clean Energy Bot',
};

class SimpleForm extends Component {
  state = {
    serverResponse: [],
    files: [],
  };

  getImageData() {
    const fetchImages = async () => {
      let result = await storage
        .ref()
        .child('data')
        .listAll();
      let urlPromises = result.items.map((imageRef) =>
        imageRef.getDownloadURL()
      );

      return Promise.all(urlPromises);
    };

    const loadImages = async () => {
      const urls = await fetchImages();
      this.state.files = urls;
    };
    loadImages();
    return this.state.files.length;
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <ChatBot
          steps={[
            {
              id: 'intro',
              message: "Hello. I'm Virya, your clean energy assistant.",
              trigger: 'intro1',
            },
            {
              id: 'intro1',
              message: 'What is your name?',
              trigger: 'intro-user',
            },
            {
              id: 'intro-user',
              user: true,
              trigger: 'reply',
            },
            {
              id: 'reply',
              message: 'Nice to meet you, {previousValue}!',
              trigger: 'query',
            },
            {
              id: 'query',
              message: 'What statistics are we looking for today?',
              trigger: 'queryuser',
            },
            {
              id: 'queryuser',
              user: true,
              trigger: 'post',
            },
            {
              id: 'post',
              component: <Post />, // Post component can take queryuser as prop <Post props="queryuser"></Post>
              // message: <Post></Post>,
              asMessage: false,
              trigger: 'stats',
            },
            {
              id: 'stats',
              message: this.getImageData(),
              // component: (
              //   <img
              //     src='https://d6s000001nrjquag-dev-ed.develop.file.force.com/servlet/servlet.ImageServer?id=0156S00000JF0iZ&oid=00D6S000001NRjq&lastMod=1668295726000'
              //     height={250}
              //     width={500}
              //     alt='Statistics'
              //   />
              // ),
              // asMessage: false,
              trigger: 'satisfied-msg',
            },
            {
              id: 'satisfied-msg',
              message: 'Are you satisfied with the results of your query?',
              trigger: 'satisfied',
            },
            {
              id: 'satisfied',
              options: [
                { value: 'y', label: 'Yes', trigger: 'yes-response' },
                { value: 'n', label: 'No', trigger: 'no-response' },
              ],
            },
            {
              id: 'yes-response',
              message: 'Great! Have a great day and make the world cleaner!',
              end: true,
            },
            {
              id: 'no-response',
              message: "Sorry to hear that. Let's try again.",
              trigger: 'queryuser',
            },
          ]}
          {...config}
        />
      </ThemeProvider>
    );
  }
}

export default SimpleForm;
