<template>
  <div>
    <div class="page_box">
      <header>
        <van-nav-bar title="我的" border safe-area-inset-top>
          <template #right>
            <van-icon name="setting-o" style="color: #fff" :size="20"></van-icon>
          </template>
        </van-nav-bar>
        <div class="mine_info flex">
          <van-uploader :after-read="afterRead">
            <van-image :src="defaultHead" :width="60"></van-image>
          </van-uploader>
          <p>你好小主，请先登录</p></div>
      </header>
      <ul class="level_list flex-center">
        <li class="flex-center">
          <img src="../../assets/per_loanrecord.png" alt=""
          ><span>借款记录</span></li>
        <li class="flex-center"><img
          src="../../assets/my-bank.png"
          alt=""><span>我的银行卡</span></li>
      </ul>
      <ul class="ver_list">
        <li class="flex-center">
          <img class="img1" src="../../assets/icon-auth.png" alt="">
          <span>我的认证</span>
          <img class="img2" src="../../assets/icon-arrow.png" alt="">
        </li>
        <li class="flex-center">
          <img class="img1" src="../../assets/icon-message.png" alt="">
          <span>我的消息</span>
          <img class="img2" src="../../assets/icon-arrow.png" alt="">
        </li>
        <li class="flex-center">
          <img class="img1" src="../../assets/icon-question.png" alt="">
          <span>常见问题</span>
          <img class="img2" src="../../assets/icon-arrow.png" alt="">
        </li>
        <li class="flex-center">
          <img class="img1" src="../../assets/icon-contact.png" alt="">
          <span>联系我们</span>
          <img class="img2" src="../../assets/icon-arrow.png" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import defaultHead from '../../assets/img_deafault_head.png'

export default {
  name: "my-home",
  setup() {
    const afterRead = (file) => {
      /*todo 上传文件至服务器*/
      console.log(file);
    }
    return {
      afterRead,
      defaultHead
    }
  }
}
</script>

<style scoped lang="less">

header {
  width: 100%;
  background: linear-gradient(90deg, #1777ff, #6e9ee3);

  .mine_info {
    flex-direction: column;
    align-items: center;
    min-height: 135.8px;
    font-size: 14px;
    color: #fff;

    p {
      padding: 10px 0 45px;
    }
  }
}

/deep/ .van-nav-bar {
  background: transparent;

  &:after {
    width: 0
  }

  .van-nav-bar__title {
    color: #fff
  }

}


</style>

