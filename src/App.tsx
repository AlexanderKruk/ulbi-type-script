import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import { TodosPage } from './component/TodosPage';
import { UserItemPage } from './component/UserItemPage';
import { UsersPage } from './component/UsersPage';

function App() {
  
  return (
    <BrowserRouter>
      <div>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/todos">Todos</NavLink>
      </div>
      <Route path="/todos" exact>
        <TodosPage />
      </Route>
      <Route path="/users" exact>
        <UsersPage />
      </Route>
      <Route path="/users/:id" exact>
        <UserItemPage />
      </Route>
    </BrowserRouter>
  )
}

export default App;
