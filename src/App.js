
import './App.css';


// components
import Header from './components/header'
import Footer from './components/footer'
import ToDo from './components/todo'
import todosData from './components/todoData'

function App() {
  const todoComponent = todosData.map(item =>{
    return <ToDo 
    key = {item.id}
    text = {item.text}
    completed = {item.completed}/>
  })
  return (
    <div className="App">
      <Header />
      {todoComponent}
      <Footer />
    </div>
  );
}

export default App;
