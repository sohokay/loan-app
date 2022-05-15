<template>
  <div>
    <my-header></my-header>
    <router-view/>
<!--    <keep-alive :include="cachedViews">-->
<!--      <router-view :key="key" />-->
<!--    </keep-alive>-->
    <my-footer></my-footer>
  </div>
</template>

<script>
import myFooter from "@/views/layout/my-footer";
import myHeader from "@/views/layout/my-header";
export default {
  name: "my-layout",
  components:{myHeader,myFooter},
  setup(){
    console.log(111);
  },
}
</script>

<style scoped>

</style>
