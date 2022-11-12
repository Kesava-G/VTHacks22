import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

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

class SimpleForm extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <ChatBot
          steps={[
            {
              id: 'intro',
              message: 'Hello. What is your name?',
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
              trigger: 'query-user',
            },
            {
              id: 'query-user',
              user: true,
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
              trigger: 'query-user',
            },
          ]}
        />
      </ThemeProvider>
    );
  }
}

export default SimpleForm;
