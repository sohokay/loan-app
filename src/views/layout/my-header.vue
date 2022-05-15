<template>
  <div>
    <template v-if="noHeader">
      <van-nav-bar v-if="noHeader" left-text="返回" left-arrow @click-left="onClickLeft" title="标题" />
    </template>
  </div>
</template>

<script>
export default {
  name: "my-header",
  computed: {
    noHeader: function() {
      return !this.$route.meta.noHeader;
    }
  },
  setup() {
    const onClickLeft = () => history.back();
    return {
      onClickLeft,
    };
  },
};
</script>

<style scoped></style>
