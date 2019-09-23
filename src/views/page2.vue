<style scoped>
body{
    margin: 0;
    padding: 0;
}
.scaleUp-enter-active,
.scaleUp-leave-active {
  transition: all 0.5s linear;
}
.scaleUp-leave-active {
  transform: translateY(-100%);
}
.page {
  height: 100vh;
  background: url(../assets/2.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.top_pic{
  margin-top: 5vw;
  width: 70vw;
}
.bt_pic{
  position: absolute;
  bottom: 10vw;
  right: 0;
  width: 90vw;
}

</style>

<template>
  <transition name="scaleUp">
    <div class="page" id="start">
      <img class="top_pic" src="../assets/2-1.png" alt="">
      <img class="bt_pic" src="../assets/2-2.png" alt="">
    </div>
  </transition>
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
          console.log('spanY', spanY)
          if (spanY < -30) {
            // 向上
            this.$router.push("/page3");
          }else if(spanY > 30){
            //向下
            this.$router.push("/");
          }
          if (Math.abs(spanX) > Math.abs(spanY)) {
            // 认定为水平方向滑动
            console.log("水平方向滑动")
          } else {
            // 认定为垂直方向滑动
            console.log("垂直方向滑动")
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
    let element = document.getElementById("start");
    this.addHandler(element, "touchstart", this.handleTouchEvent);
    this.addHandler(element, "touchend", this.handleTouchEvent);
    this.addHandler(element, "touchmove", this.handleTouchEvent);
  }
};
</script>
