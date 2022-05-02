import axios from 'axios';
import { useState, useEffect } from 'react';
import { Card, CardVariant } from "./component/Card";
import { EventExample } from './component/EventExample';
import List from './component/List';
import TodoItem from './component/TodoItem';
import UserItem from './component/UserItem';
import { ITodo, IUser } from "./types/types";

function App() {

  const [users, setUsers] = useState<IUser[]>([])
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    fetchUsers()
    fetchTodos()
  }, [])

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users?_limit=10')
      setUsers(response.data)
    } catch(e) {
      console.log(e)
    }
  }

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
      setTodos(response.data)
    } catch(e) {
      console.log(e)
    }
  }

  return (
    <div>
      <EventExample />
      <Card 
        width="200px" 
        height="200px" 
        variant={CardVariant.primary} 
        onClick={(num) => console.log('number', num )}>
        <button>Test</button>
      </Card>
      <List items={users} renderItem={(user: IUser) => <UserItem key={user.id} user={user}/>}/>
      <List items={todos} renderItem={(todo: ITodo) => <TodoItem key={todo.id} todo={todo}/>}/>
    </div>
  )
}

export default App;
