import './App.css';
import Todo from './components/Todo';
import Form from './components/Form';
function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <Todo name = 'Vincent'/>
      <Form/>
    </div>
  );
}

export default App;
