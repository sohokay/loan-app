<template>
<div>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o">
      <router-link to="/index">首页</router-link>
     </van-tabbar-item>
    <van-tabbar-item icon="search">
      <router-link to="/wallet">钱包</router-link>
    </van-tabbar-item>
    <van-tabbar-item icon="friends-o">
      <router-link to="/customer">客服</router-link>
    </van-tabbar-item>
    <van-tabbar-item icon="setting-o">
      <router-link to="/home">我的</router-link>
    </van-tabbar-item>
  </van-tabbar>
</div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "my-footer",
  setup() {
    const active = ref(0);
    return { active };
  },
}
</script>

<style scoped>

</style>
