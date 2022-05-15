<template>
<div>
  <van-nav-bar
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      title="标题" />

</div>
</template>

<script>
export default {
  name: "my-header",
  setup() {
    const onClickLeft = () => history.back();
    return {
      onClickLeft,
    };
  },
}
</script>

<style scoped>

</style>
