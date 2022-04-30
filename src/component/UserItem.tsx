import { FC } from 'react'
import { IUser } from '../types/types'

interface UserItemProps{
  user: IUser;
}

const UserItem: FC<UserItemProps> = ({user}) => {
  return (
    <div>{user.id}. {user.name} live in city {user.address.city}</div>
  )
}

export default UserItem
