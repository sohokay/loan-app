<template>
  <div>
    <div class="container">
      <div class="balance-warp">
        <div class="yue_box">
          <div class="header">账户余额(元)</div>
          <div class="tixian"><span class="txmoney">0.00</span>
            <span style="font-size: 26px;">提现
            <van-icon name="arrow"/>
            </span></div>
          <div class="tixian2"><span>已提现额度(元)￥ 0.00</span><span
            data-v-7c646841="">到账金额(元)￥0.00</span></div>
        </div>
      </div>
      <h2>我的银行卡</h2>
      <div class="bank_box" >
        <div class="header" >
          <van-image :src="iconBank" :width="40"></van-image>
        
          <div  style="margin-left: 10px;">****</div>
        </div>
        <div class="bank_code" data-v-7c646841="">101 ********* 0000</div>
      </div>
      <h2 data-v-7c646841="">明细</h2>
      <div>
        <van-empty description="暂无数据"> </van-empty>
      </div>
    </div>
  </div>
</template>

<script>
import iconBank from '../../assets/icon-bank.png'
export default {
  name: "my-wallet",
  data(){
    return{
      iconBank
    }
  }}
</script>

<style scoped lang="less">
.container {
  height: calc(100vh - 46px);
  background-color: #f9f9f9;
  overflow: auto;
  padding: 15px;
}

.balance-warp {
  display: flex;
  flex-direction: column;
  align-content: center;
  background: linear-gradient(180deg, #1777ff, #69a6ff);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .5);
  border-radius: 6px;
  color: #fff;
  box-sizing: border-box;
  padding: 7px 10px;

  .header {
    font-size: 17px;
  }

  .tixian {
    display: flex;
    margin: 15px 0;
    justify-content: space-between;
    align-items: center;
  }

  .tixian2 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .txmoney {
    font-size: 26px;
    font-weight: 700;
  }
}

h2 {
  font-size: 22px;
  color: #3c3c3c;
}
.bank_box {
  background-color: #1777ff;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.5);
  border-radius: 6px;
  color: #fff;
  box-sizing: border-box;
  padding: 20px;
   .header {
    display: flex;
    align-items: center;
    font-size: 18px;
  }
   .bank_code {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
