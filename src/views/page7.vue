<style scoped>
.page {
  height: 100vh;
  width: 100vw;
  background: #e6e8ea;
  overflow-y: auto;
}
.header img {
  width: 100vw;
}
.form_style {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8vw;
}
.item {
  width: 80vw;
  height: 10vw;
  margin-bottom: 5vw;
  background: #ffffff;
  border-radius: 1vw;
  display: flex;
  flex: row;
}
.submit {
  width: 50vw;
  height: 12vw;
  background: #192a38;
  border-radius: 1vw;
  margin-top: 2vw;
  color: #f0f1f2;
  text-align: center;
  line-height: 12vw;
  margin-bottom: 5vw;
  font-size: 4vw;
}
.item_icon {
  width: 6vw;
  margin-top: 2vw;
  margin-left: 2.5vw;
}
.item_input {
  margin-left: 2.5vw;
  height: 9vw;
  font-size: 4vw;
  border: none;
  color: #111111;
}
input {
  outline: none;
}
</style>

<template>
  <div class="page" id="start7">
    <div class="header">
      <img src="../assets/头图.png" alt />
    </div>
    <div class="form_style">
      <div class="item">
        <div>
          <img class="item_icon" src="../assets/销售型H5-27.png" alt />
        </div>
        <input v-model="leasinger.type" class="item_input" type="text" placeholder="租赁类别(Leasing)" />
      </div>
      <div class="item">
        <div>
          <img class="item_icon" src="../assets/销售型H5-28.png" alt />
        </div>
        <input v-model="leasinger.name" class="item_input" type="text" placeholder="姓名(Name)" />
      </div>
      <div class="item">
        <div>
          <img class="item_icon" src="../assets/销售型H5-29.png" alt />
        </div>
        <input v-model="leasinger.company" class="item_input" type="text" placeholder="公司(Company)" />
      </div>
      <div class="item">
        <div>
          <img class="item_icon" src="../assets/销售型H5-30.png" alt />
        </div>
        <input v-model="leasinger.email" class="item_input" type="text" placeholder="电子邮件(E-mail)" />
      </div>
      <div class="item">
        <div>
          <img class="item_icon" src="../assets/销售型H5-31.png" alt />
        </div>
        <input v-model="leasinger.tel" class="item_input" type="text" placeholder="手机(Tel.)" />
      </div>
      <div class="item">
        <div>
          <img class="item_icon" src="../assets/销售型H5-32.png" alt />
        </div>
        <input v-model="leasinger.sqr" class="item_input" type="text" placeholder="需求面积(Sqr.)" />
      </div>
      <div class="item">
        <div>
          <img class="item_icon" src="../assets/销售型H5-33.png" alt />
        </div>
        <input
          v-model="leasinger.detail"
          class="item_input"
          type="text"
          placeholder="详情描述(Details)"
        />
      </div>
      <div class="submit" @click="submit">提交Submit</div>
    </div>
  </div>
</template>

<script>
import fetch from "@/util/fetch";
export default {
  data() {
    return {
      startX: 0, // 鼠标开始点击的x坐标
      startY: 0,
      leasinger: {
        type: null,
        name: null,
        company: null,
        email: null,
        tel: null,
        sqr: null,
        detail: ""
      }
    };
  },
  methods: {
    submit() {
      for (let key in this.leasinger) {
        console.log(key + "---" + this.leasinger[key]);
        if(this.leasinger[key]===null){
          alert('请填写完成的信息')
          return
        }
      }
      fetch.post('/leasinger/add',this.leasinger).then(res=>{
        console.log(res)
        if(res){
          alert('提交成功')
        }
      })
      console.log(this.leasinger);
    },
    addHandler(element, type, handler) {
      if (element.addEventListener) {
        element.addEventListener(type, handler, false);
      } else if (element.attachEvent) {
        element.attachEvent("on" + type, handler);
      } else {
        element["on" + type] = handler;
      }
    },
    handleTouchEvent(event) {
      switch (event.type) {
        case "touchstart":
          this.startX = event.touches[0].pageX;
          this.startY = event.touches[0].pageY;
          break;
        case "touchend":
          var spanX = event.changedTouches[0].pageX - this.startX;
          var spanY = event.changedTouches[0].pageY - this.startY;
          // console.log("spanY", spanY);
          if (spanY > 30) {
            //向下
            this.$router.push("/page6");
          }
          if (Math.abs(spanX) > Math.abs(spanY)) {
            // 认定为水平方向滑动
            // console.log("水平方向滑动");
          } else {
            // 认定为垂直方向滑动
            // console.log("垂直方向滑动");
          }
          break;
        case "touchmove":
          // 阻止默认行为
          // event.preventDefault()
          break;
      }
    }
  },
  mounted() {
    // 给被滑动对象添加事件
    let element = document.getElementById("start7");
    this.addHandler(element, "touchstart", this.handleTouchEvent);
    this.addHandler(element, "touchend", this.handleTouchEvent);
    this.addHandler(element, "touchmove", this.handleTouchEvent);
  }
};
</script>