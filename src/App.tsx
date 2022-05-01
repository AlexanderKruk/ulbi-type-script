import axios from 'axios';
import { useState, useEffect } from 'react';
import { Card, CardVariant } from "./component/Card";
import List from './component/List';
import UserItem from './component/UserItem';
import { IUser } from "./types/types";

function App() {

  // const users: IUser[] = [
  //   { id: 1 , name: 'Alex', email: '1@1.by', address: { street: 'Victory', city: 'Wroclaw', zipcode: 14123 }},
  //   { id: 2, name: 'Victor', email: '1@2.by', address: {street: 'Wisdom', city: 'Warszawa', zipcode: 12452 }}
  // ]

  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    fetchUsers()
  }, [])

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users?_limit=10')
      setUsers(response.data)
    } catch(e) {
      console.log(e)
    }
  }

  return (
    <div>
      <Card 
        width="200px" 
        height="200px" 
        variant={CardVariant.primary} 
        onClick={(num) => console.log('number', num )}>
        <button>Test</button>
      </Card>
      <List items={users} renderItem={(user: IUser) => <UserItem key={user.id} user={user}/>}/>
    </div>
  )
}

export default App;
