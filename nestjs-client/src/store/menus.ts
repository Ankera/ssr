import { defineStore } from 'pinia';
import { MenuItem } from '@/components/types/SidebarNav'


export const useMenusStore = defineStore('menu', {
  state: () => ({
    menus: [
      {
        id: 1,
        name: '首页',
        path: 'dashboard'
      },
      {
        id: 2,
        name: '用户管理',
        path: 'users'
      },
      {
        id: 3,
        name: '角色管理',
        path: 'roles'
      },
      {
        id: 4,
        name: '菜单管理',
        path: 'menus'
      },
    ] as MenuItem[]
  })
})
