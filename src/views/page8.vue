<style scoped>
.swiper-item {
  width: 100vw;
}
.swiper-item img {
  width: 100vw;
}
.floor_des {
  background: #9d9e9e;
  width: 100vw;
  overflow: hidden;
}
.floor_des span {
  color: #fff;
  text-align: center;
  margin: 3vw 10vw;
  display: block;
}
</style>
<template>
  <div>
    <div>
      <swiper :options="swiperOption" class="swiper-box">
        <swiper-slide class="swiper-item">
          <img src="../assets/办公室低区_02.png" alt />
        </swiper-slide>
        <swiper-slide class="swiper-item">
          <img src="../assets/办公室低区_04.png" alt />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div class="floor_des">
        <span>LOW ZONE（{{floor}}F） SINGLE-TENANT Gross Leasable Area：2634.80 SQM Whole ﬂoor</span>
      </div>
    </div>
    <div>
      <swiper :options="swiperOption" class="swiper-box">
        <swiper-slide class="swiper-item">
          <img src="../assets/办公室低区_02.png" alt />
        </swiper-slide>
        <swiper-slide class="swiper-item">
          <img src="../assets/办公室低区_04.png" alt />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div class="floor_des">
        <span>LOW ZONE（{{floor}}F） SINGLE-TENANT Gross Leasable Area：2634.80 SQM Whole ﬂoor</span>
      </div>
    </div>
    <div>
      <swiper :options="swiperOption" class="swiper-box">
        <swiper-slide class="swiper-item">
          <img src="../assets/办公室低区_02.png" alt />
        </swiper-slide>
        <swiper-slide class="swiper-item">
          <img src="../assets/办公室低区_04.png" alt />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div class="floor_des">
        <span>LOW ZONE（{{floor}}F） SINGLE-TENANT Gross Leasable Area：2634.80 SQM Whole ﬂoor</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
  created() {
    console.log(this.$route.query.type);
    this.floor = this.$route.query.type;
  }
};
</script>