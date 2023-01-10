import './App.css';
import Header from './components/Header';
// import Start from './components/Start';
import Main from './components/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components';
import NewTodo from './components/NewTodo';
import {useState} from 'react'
import { todos } from './components/data/Todo'


const GlobalStyle = createGlobalStyle`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  body {
    font-family: 'GmarketSansMedium';
  }
`

function App() {
  const [todo, setTodo] = useState(todos)

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        {/* <Route path="/" element={<Start />} /> */}
        <Route path="/" element={<Main todo={todo} setTodo={setTodo}/>} />
        <Route path="/newtodo" element={<NewTodo setTodo={setTodo} todo={todo}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
