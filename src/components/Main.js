import React, {useEffect} from 'react'
import styled from 'styled-components'
import Todos from './Todos'
import { Link } from 'react-router-dom'
import { database } from '../Firebase'
// db에 접근해서 데이터를 꺼내게 도와줄 친구들
import { collection, getDocs } from "firebase/firestore";

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


const Main = ({newTodo, setNewTodo}) => {
    
    const usersCollectionRef = collection(database, "todo");

    useEffect(() => {
        // 비동기로 데이터 받을준비
        const getTodos = async () => {
            // getDocs로 컬렉션안에 데이터 가져오기
            const data = await getDocs(usersCollectionRef);
            // users에 data안의 자료 추가. 객체에 id 덮어씌우는거
            setNewTodo(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getTodos();
    }, [])


    return (
        <Container>
            <MainContainer>
                <Link to='/newTodo'><NewTodoBtn>할 일 추가하기</NewTodoBtn></Link>
                <TodoUl>
                    {newTodo.map((el) => {
                        return <Todos key={el.id} id={el.id} work={el.todo} isDone={el.isDone} setNewTodo={setNewTodo}/>
                    })}
                </TodoUl>
            </MainContainer>
        </Container>
    )
}

export default Main