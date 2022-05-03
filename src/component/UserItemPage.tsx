import axios from 'axios'
import { FC, useState, useEffect } from 'react'
import { IUser } from '../types/types'
import { useHistory, useParams } from 'react-router-dom'

interface paramsProps {
  id: string;
}


export const UserItemPage: FC = () => {

  const [user, setUser] = useState<IUser | null> (null)

  useEffect(() => {
    fetchUser()
  }, [])

  const params = useParams<paramsProps>()
  const history = useHistory()

  async function fetchUser() {
    try {
      const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params?.id)
      setUser(response.data)
    } catch(e) {
      console.log(e)
    }
  }

  return (
    <div>
      <button onClick={() => history.push('/users')}>Back</button>
      <div>{user?.name}</div>
    </div>
  )
}
