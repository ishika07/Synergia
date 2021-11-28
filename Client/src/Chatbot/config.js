import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import LearningOptions from "./LearningOptions/LearningOptions";
import LinkList from "./LinkList/LinkList";
// Register the component in the config.js as a widget function

const config = {
  botName: "LearningBot",
  initialMessages: [
    createChatBotMessage("Hi, I'm here to help. What do you want to learn?", {
      widget: "learningOptions",
    }),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#007fff",
    },
    chatButton: {
      backgroundColor: "#fd3a69",
    },
  },
  widgets: [
    {
      widgetName: "learningOptions",//List of learning resources when user inputs "javascript"
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: "javascriptLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Introduction to JS",
            url:
            "https://www.geeksforgeeks.org/introduction-to-javascript/",
            id: 1,
          },
          {
            text: "Mozilla JS Guide",
            url:
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            id: 2,
          },
          {
            text: "W3schools Tutorial",
            url: "https://www.w3schools.com/js/DEFAULT.asp",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "testTopics",//Displays the Test Topics 
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Computer Network",
            id: 1,
          },
          {
            text: "Digital Image Processing",
            id: 2,
          },
          {
            text: "DBMS",
            id: 3,
          }
        ],
      },
        
    },
    {
      widgetName: "timeTable",//Displays the time table
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Computer Networks - 29/11/2021",
            id: 1,
          },
          {
            text: "Digital Image Processing - 1/12/2021",
            id: 2,
          },
          {
            text: "DBMS - 2/12/2021",
            id: 3,
          }
        ],
      },  
    }
    
  ],
};

export default config;
