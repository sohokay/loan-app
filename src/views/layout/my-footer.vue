<template>
  <div>
    <van-tabbar route v-model="active">
      <van-tabbar-item replace to="/index">
        首页
        <template #icon="props">
          <img :src="props.active ? icon.homeActive : icon.homeDefault" alt=""/>
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/wallet">
        钱包
        <template #icon="props">
          <img :src="props.active ? icon.walletActive : icon.walletDefault" alt=""/>
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/customer">
        客服
        <template #icon="props">
          <img :src="props.active ? icon.customerActive : icon.customerDefault" alt=""/>
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/home">
        我的
        <template #icon="props">
          <img :src="props.active ? icon.userActive : icon.userDefault" alt=""/>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import {ref} from "vue";
import homeDefault from '../../assets/icon-home-default.png';
import homeActive from '../../assets/icon-home-active.png';
import walletDefault from '../../assets/icon-wallet-default.png'
import walletActive from '../../assets/icon-wallet-active.png'
import customerDefault from '../../assets/icon-customer-default.png'
import customerActive from '../../assets/icon-customer-active.png'
import userDefault from '../../assets/icon-user-default.png'
import userActive from '../../assets/icon-user-active.png'

export default {
  name: "my-footer",
  setup() {
    const active = ref(0);
    const icon = {
      homeDefault,
      homeActive, walletDefault, walletActive, customerDefault, customerActive, userDefault, userActive
    };
    return {active, icon};
  },
}
</script>

<style scoped>

</style>
