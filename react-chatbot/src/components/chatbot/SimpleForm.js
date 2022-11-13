import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import { Post } from './Post';

import imgData from './Images';
import tips from './Tips';
import facts from './Facts';
import dataJSON from './data.json';
// import { storage } from '../../firebaseConfig';
// import { ref, listAll, getDownloadURL } from 'firebase/storage';

// // const storage = getStorage();
// const storageRef = ref(storage, 'data');

// const pathReference = ref(storage, 'data/instagram_features.png');

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

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

const r = window.r;
console.log(r);

const config = {
  headerTitle: 'Virya - The Clean Energy Bot',
  height: '100%',
};

class SimpleForm extends Component {
  // state = {
  //   serverResponse: [],
  //   files: [],
  // };

  // getImageData() {
  //   // `url` is the download URL for 'images/stars.jpg'

  //   // This can be downloaded directly:
  //   // const xhr = new XMLHttpRequest();
  //   // xhr.responseType = 'blob';
  //   // xhr.onload = (event) => {
  //   //   const blob = xhr.response;
  //   // };
  //   // xhr.open('GET', url);
  //   // xhr.send();

  //   // Or inserted into an <img> element
  //   const img1 = document.getElementById('myimg');
  //   img1.setAttribute('src', imgData[r]);
  // }

  // getImageData() {
  //   const fetchImages = async () => {
  //     let result = await listAll(storageRef);
  //     return result.length;
  //     // let urlPromises = result.items.map((imageRef) =>
  //     //   getDownloadURL(imageRef)
  //     // );

  //     // return Promise.all(urlPromises);
  //   };

  //   const loadImages = async () => {
  //     const urls = await fetchImages();
  //     this.state.files = urls;
  //   };
  //   loadImages();
  //   return this.state.files.length;
  // }

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
              trigger: 'req_type',
            },
            //
            {
              id: 'req_type',
              message: 'How would you like me to help you?',
              trigger: 'req',
            },
            {
              id: 'req',
              options: [
                { value: 'a', label: 'Analytics', trigger: 'a-response' },
                { value: 't', label: 'Tips', trigger: 't-response' },
                { value: 'f', label: 'Facts', trigger: 'f-response' },
              ],
            },
            {
              id: 'a-response',
              message: 'What statistics are we looking for today?',
              trigger: 'queryuser',
            },
            {
              id: 't-response',
              message: tips[getRandomInt(5)],
              trigger: 'satisfied-msg',
            },
            {
              id: 'f-response',
              message: facts[getRandomInt(5)],
              trigger: 'satisfied-msg',
            },
            //
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
              component: <Post />,
              asMessage: false,
              trigger: 'img',
            },
            {
              id: 'img',
              component: (
                <img
                  src={imgData[dataJSON.response]}
                  id='myimg'
                  height={250}
                  width={375}
                  alt='Estimated carbon emissions for laptop parts'
                />
              ),
              trigger: 'satisfied-msg',
            },
            // {
            //   id: 'stats',
            //   message: this.getImageData(),
            //   trigger: 'satisfied-msg',
            // },
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
              trigger: 'req',
            },
          ]}
          {...config}
        />
      </ThemeProvider>
    );
  }
}

export default SimpleForm;
