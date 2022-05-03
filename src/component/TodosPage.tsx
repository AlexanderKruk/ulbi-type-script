import axios from 'axios'
import { FC, useEffect, useState } from 'react'
import { ITodo } from '../types/types'
import List from './List'
import TodoItem from './TodoItem'

export const TodosPage: FC = () => {

  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    fetchTodos()
  }, [])

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
      setTodos(response.data)
    } catch(e) {
      console.log(e)
    }
  }

  return (
    <List items={todos} renderItem={(todo: ITodo) => <TodoItem key={todo.id} todo={todo}/>}/>
  )
}
