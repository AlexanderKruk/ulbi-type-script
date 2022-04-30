import { Card, CardVariant } from "./component/Card";
import { UserList } from "./component/UserList";
import { IUser } from "./types/types";

function App() {

  const users: IUser[] = [
    { id: 1 , name: 'Alex', email: '1@1.by', address: { street: 'Victory', city: 'Wroclaw', zipcode: 14123 }},
    { id: 2, name: 'Victor', email: '1@2.by', address: {street: 'Wisdom', city: 'Warszawa', zipcode: 12452 }}
  ]

  return (
    <div>
      <Card 
        width="200px" 
        height="200px" 
        variant={CardVariant.primary} 
        onClick={(num) => console.log('number', num )}>
        <button>Test</button>
      </Card>
      <UserList users={users}/>
    </div>
  )
}

export default App;
