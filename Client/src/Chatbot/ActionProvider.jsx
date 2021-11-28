//Create an action to trigger after having Parser rule set

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  // Greet method 
  greet() {
    const greetingMessage = this.createChatBotMessage("Hi, friend.");
    this.updateChatbotState(greetingMessage);
  }
  // Displays Test Timings
  handleTestTime=()=>{
    const message = this.createChatBotMessage("10am - 1pm");
    this.updateChatbotState(message);
  }
  // Displays Test Subject Name
  handleTestSubject=()=>{
    const message = this.createChatBotMessage("Operating System - Test");
    this.updateChatbotState(message);
  }

  handleJavascriptList = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on Javascript:",
      {
        widget: "javascriptLinks",
      }
    );

    this.updateChatbotState(message);
  };
//Displays Test topics
  handleTestTopics = () => {
    const message = this.createChatBotMessage(
      "Test Topics : ",
      {
        widget: "testTopics",
      }
    );

    this.updateChatbotState(message);
  };
//Displays Time Table
  handleTimeTable = () => {
    const message = this.createChatBotMessage(
      "Time Table",
      {
        widget: "timeTable",
      }
    );

    this.updateChatbotState(message);
  };
//Method invoked when User asks for help
  handleHelp = () => {
    const message = this.createChatBotMessage(
      "Hi, I'm here to help. What do you want to learn?",
      {
        widget: "learningOptions",
      }
    );

    this.updateChatbotState(message);
  };

  updateChatbotState(message) {
    // NOTE: This function is passed in from the top level Chatbot component.
    //  The top level state of the Chatbot is manipulated by setState function. 
    //  so we have to make sure that we preserve the previous state.

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
