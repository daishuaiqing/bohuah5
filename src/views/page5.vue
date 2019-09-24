<style scoped>
.page {
  height: 100vh;
  width: 100vw;
}
.swiper-box {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
.swiper-item {
  height: 100%;
  text-align: center;
  font-size: 18px;
  background: #fff;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.swiper-item img {
    width: 100vw;
    height: 100vh;
}
</style>

<template>
  <div class="page" id="start5">
    <swiper :options="swiperOption" class="swiper-box">
      <swiper-slide class="swiper-item">
          <img src="../assets/实景图-1.png" alt="">
      </swiper-slide>
      <swiper-slide class="swiper-item">
          <img src="../assets/实景图-2.png" alt="">
      </swiper-slide>
      <swiper-slide class="swiper-item">
          <img src="../assets/实景图-3.png" alt="">
      </swiper-slide>
      <swiper-slide class="swiper-item">
          <img src="../assets/实景图-4.png" alt="">
      </swiper-slide>
      <swiper-slide class="swiper-item">
          <img src="../assets/实景图-5.png" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      startX: 0, // 鼠标开始点击的x坐标
      startY: 0,
      swiperOption: {
        direction: "horizontal",
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
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
          console.log("spanY", spanY);
          if (spanY < -30) {
            // 向上
            this.$router.push("/page6");
          } else if (spanY > 30) {
            //向下
            this.$router.push("/page4");
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
    let element = document.getElementById("start5");
    this.addHandler(element, "touchstart", this.handleTouchEvent);
    this.addHandler(element, "touchend", this.handleTouchEvent);
    this.addHandler(element, "touchmove", this.handleTouchEvent);
  }
};
</script>