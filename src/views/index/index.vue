<template>
  <div>
    <div class="warp-1">
      方便快捷，闪电借款
      <span class="message" @click="handleGoMessage">
        <van-icon name="chat-o"/>
      </span>
    </div>
    <div class="warp-2">
      <p class="p1">预估可借款金额(元) <span class="s1"></span></p>
      <h2 class="h2">30000</h2>
      <div class="jie">立即借款</div>
    </div>
    <div class="warp-3">
      <div class="item"><img src="../../assets/hk2.png" alt="">
        <p>速注册</p></div>
      <div class="item"><img src="../../assets/hk1.png" alt="">
        <p>易下款</p></div>
      <div class="item"><img src="../../assets/hk3.png" alt="">
        <p>低费率</p></div>
      <div class="item"><img src="../../assets/hk4.png" alt="">
        <p>纯信用</p></div>
    </div>
    <div class="warp-4">
      <h6><span></span> 纯信用信贷服务 </h6>
    </div>
    <div class="warp-5">
      <van-swipe class="my-swipe" :autoplay="3000" lazy-render indicator-color="white">
        <van-swipe-item>
          <img src="../../assets/48b7b07036ac6beb48ea3f9eea953903.png" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/e0ee0321dc5926f1fd50e28a478f8971.png" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="warp-6">
      <h5>万元借款急速到账</h5>
    </div>
    <div class="warp-7">
      <p class="bujie"><span class="student"></span>不向学生提供任何服务</p>
    </div>
    首页
    <router-link to="/message">消息</router-link>
  </div>
</template>

<script>
export default {
  name: "my-index",
  methods: {
    handleGoMessage: function () {
      this.$router.push('/message')
    }
  }
}
</script>

<style scoped lang="less">
.warp-1 {
  width: 345px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  margin: 16px auto;
  position: relative;

  .message {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 28px;
  }
}

.warp-2 {
  background: url("../../assets/banner.png") no-repeat 50%;
  background-size: 100%;
  width: 365px;
  height: 220px;
  margin: 8px auto 0;
  text-align: center;

  .p1 {
    color: #676767;
    font-size: 13px;
    padding-top: 50px;
    font-weight: 600;

    .s1 {
      display: inline-block;
      background: url(../../assets/kejie.png) no-repeat 50%;
      background-size: 100%;
      width: 57px;
      height: 22px;
      vertical-align: middle;
      margin-left: 5px;
    }
  }

  .h2 {
    background-image: -webkit-linear-gradient(bottom, #5db7ff, #758ffd);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 49px;
    margin-top: 10px;
  }

  .jie {
    width: 120px;
    height: 40px;
    background: linear-gradient(180deg, #6394ea, #387afd);
    color: #fff;
    font-size: 14px;
    line-height: 40px;
    text-align: center;
    border-radius: 20px;
    margin: 10px auto 0;
  }
}

.warp-3 {
  width: 350px;
  display: flex;
  justify-content: space-between;
  margin: 10px auto 0;

  .item {
    width: 75px;
    text-align: center;

    img {
      width: 75px;
    }

    p {
      color: #191919;
      font-size: 14px;
    }
  }
}

.warp-4 {
  h6 {
    text-align: left;
    width: 350px;
    font-size: 14px;
    font-weight: 500;
    margin: 20px auto 0;

    span {
      display: inline-block;
      width: 4px;
      height: 16px;
      border-radius: 2px;
      background: linear-gradient(180deg, #5eb6ff, #7590fd);
      vertical-align: middle;
      margin-top: -3px;
    }
  }
}

.warp-5 {
  .my-swipe {
    width: calc(100vw - 40px);
    //width: 100vw;
    margin: 10px auto 20px;

    .van-swipe-item {
      color: #fff;
      font-size: 20px;
      height: 120px;
      text-align: center;
      border-radius: 10px;

      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }

}

.warp-6 {
  h5 {
    color: #010101;
    font-size: 14px;
    font-weight: 600;
    margin-top: 15px;
    text-align: center;
  }
}

.warp-7 {
  .bujie {
    margin-bottom: 80px;
    margin-top: 18px;
    color: #656565;
    font-size: 14px;
    text-align: center;

    .student {
      display: inline-block;
      background: url("../../assets/student.png") no-repeat 50%;;
      background-size: 100%;
      width: 15px;
      height: 22px;
      vertical-align: middle;
      margin-top: -1px;
      margin-right: 3px;
    }
  }

}
</style>
