import React from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import {useState} from 'react'
import { database } from '../Firebase'
import { doc, setDoc } from "firebase/firestore";

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px;
`

const NewContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: space-evenly; */
    align-items: center;
    height: 90vh;
    width: 100%;
    max-width: 768px;
    padding: 10px;
    margin: 30px;
`

const NewTodoInput = styled.input`
`

const InputContainer = styled.div`
    display: flex;
    margin: 30px;
`

const InputLabel = styled.label`
    margin: 10px;
`

const Button = styled.button`
    margin: 10px;
    width: 15vh;
    height: 5vh;
    color: #fff;
    font-family: GmarketSansMedium;
    font-size: 2vh;
    background-color: #de0501;
    border-style: none;
    border-radius: 20px;
    cursor: pointer;
    position: relative;
    &:hover {
        opacity: .8;
        transition: 0.2s;
        transform: translateY(-2px);
    }
    &:active {
        transform: translateY(4px);
    }
`

// 들어갈 것: 제목(할 일 추가하기), 인풋, 추가 버튼, 취소 버튼
// 추가 버튼을 누르면 setTodo로 todo에 새 할 일 추가, useNavigate로 이동

const NewTodo = ({newTodo}) => {

    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const clickHandler = async() => {
        const newid = String(newTodo.length);
        if(content !== '') {
            const arr = {
                todo: content
            }
            await setDoc(doc(database, "todo", newid), arr);
            navigate("/")
        }
    }

    const changeHandler = (e) => {
        setContent(e.target.value)
    }
    return (
        <Container>
            <NewContainer>
                <h1>할 일 추가하기</h1>
                <InputContainer>
                    <InputLabel htmlFor="newtodo">할 일</InputLabel>
                    <NewTodoInput type="text" id="newtodo" value={content} onChange={changeHandler} />
                </InputContainer>
                <InputContainer>
                    <Button onClick={clickHandler}>추가하기</Button>
                    <Link to="/"><Button>취소</Button></Link>
                </InputContainer>
            </NewContainer>
        </Container>
    )
}

export default NewTodo