
import { log } from 'console';
<!-- 作者: 余亚勇 -->
<!-- 创建时间: 2024-02-06 11:41:18 -->
<!-- 模块主要作用:  -->

<template>
  <div class="containe-fluid">
    <div class="row">
      <div class="col-3">
        <SidebarNav :menus="store.menus" />
      </div>
      <div class="col-9">
        <div class="containe-fluid">
          <HeaderNav />
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SidebarNav from '@/components/SidebarNav.vue'
import HeaderNav from '@/components/HeaderNav.vue'
import { useMenusStore } from '@/store/menus';

const store = useMenusStore();

console.log('=====', store.menus);
</script>

<style scoped></style>
