import { FC } from 'react'
import { IUser } from '../types/types'

interface UserItemProps{
  user: IUser;
  onClick: (user: IUser) => void;
}

const UserItem: FC<UserItemProps> = ({user, onClick}) => {
  return (
    <div onClick={() => onClick(user)}>{user.id}. {user.name} live in city {user.address.city}</div>
  )
}

export default UserItem
