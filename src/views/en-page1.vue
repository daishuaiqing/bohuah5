<template>
  <div class="page" id="start1"></div>
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
          if (spanY < -30) {
            // 向上
            this.$router.push("/enpage2");
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
    let element = document.getElementById("start1");
    this.addHandler(element, "touchstart", this.handleTouchEvent);
    this.addHandler(element, "touchend", this.handleTouchEvent);
    this.addHandler(element, "touchmove", this.handleTouchEvent);
  }
};
</script>

<style scoped>
.page {
  height: 100vh;
  background: url(../assets/1.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>