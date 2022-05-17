<template>
  <header>
    <template v-if="noHeader">
      <van-nav-bar v-if="noHeader" :left-arrow="!noBack" @click-left="onClickLeft" :title="title" safe-area-inset-top />
    </template>
  </header>
</template>

<script>
export default {
  name: "my-header",
  computed: {
    noHeader: function() {
      return !this.$route.meta.noHeader;
    },
    noBack: function() {
      return this.$route.meta.noBack;
    },
    title:function (){
      return this.$route.meta.title;
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
