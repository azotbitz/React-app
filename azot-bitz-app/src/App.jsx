import './App.css';
import Message from "./Message";

function App() {

  const name = 'Andrew';

  return (
    <div className="App">
      <Message name = {name} />
    </div>
  );
}

export default App;
