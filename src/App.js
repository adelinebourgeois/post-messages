import React from 'react';

import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import MessageForm from "./app/components/messages/MessageForm";
import MessageList from "./app/components/messages/MessageList";


function App() {
  return (
    <div className="App">
        <CssBaseline />
        <Container>
            <MessageList />
            <MessageForm />
        </Container>
    </div>
  );
}

export default App;
