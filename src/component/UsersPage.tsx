import axios from 'axios'
import { FC, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { IUser } from '../types/types'
import List from './List'
import UserItem from './UserItem'

export const UsersPage: FC = () => {

  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    fetchUsers()
  }, [])

  const history = useHistory()

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users?_limit=10')
      setUsers(response.data)
    } catch(e) {
      console.log(e)
    }
  }

  return (
    <List items={users} renderItem={(user: IUser) => <UserItem onClick={(user) => history.push(`/users/${user.id}`)} key={user.id} user={user}/>}/>
  )
}
