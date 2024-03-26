'use client';

import { useSelector, useDispatch } from "react-redux"
import { RootState, RootDispatch, useAppSelector, useAppDispatch } from '../../store/index'
import { UserModal, addUser, userQuery } from '../../store/service/userService'

export default function Page() {
  // const users = useSelector((state: RootState) => state.user.users)
  const users = useAppSelector((state) => state.user.users)
  console.log('=======', users);

  // const dispatch: RootDispatch = useDispatch();
  const dispatch = useAppDispatch();
  return (
   <div>
     <h1>todos</h1>
     {
      users.map((item: UserModal) => (
        <div key={item.id}>
          <div>{item.name}</div>
        </div>
      ))
     }

     <button onClick={async () => {
      await dispatch(userQuery())
     }}>查询</button>
     <button onClick={() => {
      dispatch(addUser({
        id: new Date().getTime(),
        name: 'Tom---Tom'
      }))
     }}>
      追加
     </button>
   </div>
  )
}
