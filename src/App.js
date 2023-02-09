import './App.css';
import Header from './components/Header';
// import Start from './components/Start';
import Main from './components/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components';
import NewTodo from './components/NewTodo';
import {useState} from 'react'


const GlobalStyle = createGlobalStyle`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  body {
    font-family: 'GmarketSansMedium';
  }
`

function App() {
  const [newTodo, setNewTodo] = useState([]);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Main newTodo={newTodo} setNewTodo={setNewTodo}/>} />
        <Route path="/newtodo" element={<NewTodo newTodo={newTodo}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
