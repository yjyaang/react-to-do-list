import React from 'react'
import styled from 'styled-components'
import Todos from './Todos'
import { Link } from 'react-router-dom'

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px;
`

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: space-evenly; */
    align-items: center;
    height: 90vh;
    width: 100%;
    max-width: 768px;
    /* background-color: #fcc3c2; */
    padding: 10px;
`

const NewTodoBtn = styled.button`
    width: 20vh;
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
        bottom: 2px;
    }
    &:active {
        top: 4px;
    }
`

const TodoUl = styled.ul`
    padding: 0;
`

// 할 일 추가하기 버튼 만들기
// ul 안에 li로 할일들이 나열되게 만들기
// li -> 할 일 목록 배열에 있는 요소들이 나열되게 하기
// 나열되어야 할 요소: 할 일 이름, 체크박스, 수정 버튼, 삭제 버튼


const Main = ({todo, setTodo}) => {
    return (
        <Container>
            <MainContainer>
                <Link to='/newTodo'><NewTodoBtn>할 일 추가하기</NewTodoBtn></Link>
                <TodoUl>
                    {todo.map((el) => {
                        return <Todos id={el.id} work={el.work} todo={todo} setTodo={setTodo}/>
                    })}
                </TodoUl>
            </MainContainer>
        </Container>
    )
}

export default Main