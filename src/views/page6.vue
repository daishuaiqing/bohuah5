<style scoped>
.page {
  height: 100vh;
  width: 100vw;
  background: url(../assets/楼层图.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.area_high{
  width: 100vw;
  height: 36vh;
}
.area_up_mid{
width: 100vw;
  height: 18vh;
}
.area_mid{
width: 100vw;
  height: 19vh;
}
.area_low{
width: 100vw;
  height: 15vh;
}
</style>

<template>
  <div class="page" id="start6">
    <div class="area_high" @click="gotoDetail(1)"></div>
    <div class="area_up_mid" @click="gotoDetail(2)"></div>
    <div class="area_mid" @click="gotoDetail(3)"></div>
    <div class="area_low" @click="gotoDetail(4)"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      startX: 0, // 鼠标开始点击的x坐标
      startY: 0
    };
  },
  methods: {
    gotoDetail(numb){
      this.$router.push({path: '/page8', query: {type:numb}});  
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
          console.log("spanY", spanY);
          if (spanY < -30) {
            // 向上
            this.$router.push("/page7");
          } else if (spanY > 30) {
            //向下
            this.$router.push("/page5");
          }
          if (Math.abs(spanX) > Math.abs(spanY)) {
            // 认定为水平方向滑动
            console.log("水平方向滑动");
          } else {
            // 认定为垂直方向滑动
            console.log("垂直方向滑动");
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
    let element = document.getElementById("start6");
    this.addHandler(element, "touchstart", this.handleTouchEvent);
    this.addHandler(element, "touchend", this.handleTouchEvent);
    this.addHandler(element, "touchmove", this.handleTouchEvent);
  }
};
</script>