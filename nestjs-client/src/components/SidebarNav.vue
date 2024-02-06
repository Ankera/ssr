import path from 'path';
<!-- 作者: 余亚勇 -->
<!-- 创建时间: 2024-02-06 11:49:20 -->
<!-- 模块主要作用:  -->

<template>
  <ul class="nav flex-column">
    <li class="nav-item" v-for="(item, index) in menus" :key="index">
      <router-link
        class="nav-link active"
        aria-current="page"
        :to="item.routerName ? { name: item.routerName } : item.path"
        >{{ item.name }}</router-link
      >
    </li>
    <!-- <li class="nav-item">
      <router-link class="nav-link" :to="{name: 'users'}">用户管理</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" :to="{name: 'roles'}">角色管理</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" :to="{name: 'menus'}">菜单管理</router-link>
    </li> -->
  </ul>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { MenuItem } from './types/SidebarNav'

defineProps({
  menus: {
    type: Array as PropType<Array<MenuItem>>,
    default: () => [] as MenuItem[],
  },
});
</script>

<style scoped></style>
