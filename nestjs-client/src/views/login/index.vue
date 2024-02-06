<!-- 作者: 余亚勇 -->
<!-- 创建时间: 2024-02-05 22:25:53 -->
<!-- 模块主要作用:  -->

<template>
  <div class="container d-flex justify-content-center align-items-center vh-100">
    <div class="col-6">
      <form class="border shadow-sm rounded px-4">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">用户名</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">密码</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">记住我</label>
        </div>
        <div class="d-flex flex-column align-items-center px-1 mb-2">
          <button type="submit" class="btn btn-primary w-100 mb-2" @click="handleSumbit">登录</button>
          <router-link to="/reg" class="btn border rounded w-100 px-0 text-decoration-none">
            <button type="submit" class="btn">注册</button>
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from "@/utils/axios";
import { useRouter } from "vue-router";

const router = useRouter();

const loginData = async () => {
  const result = await axios.get("/user");

  console.log("===", result);
};

loginData();

const handleSumbit = () => {
  console.log('=========')
  router.push('/home')

}
</script>

<style scoped></style>
