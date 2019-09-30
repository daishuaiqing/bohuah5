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
    <div v-for="(item,index) in editionList" :key="index">
      <swiper :options="swiperOption" class="swiper-box">
        <swiper-slide v-for="(item,index) in JSON.parse(item.bannerUrls)" :key="index" class="swiper-item">
          <img :src="item.url" preview="index">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div class="floor_des">
        <span>{{item.introduce}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import fetch from "@/util/fetch";
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
      },
      editionList:[]
    };
  },
  created() {
    console.log(this.$route.query.type);
    this.floor = this.$route.query.type;
    this.getList(this.$route.query.type)
  },
  methods:{
    getList(typeId){
      fetch.get('/edition/find/all',{typeId: typeId}).then(res=>{
        this.editionList=res.data
        console.log(res.data)
      })
    },
  }
};
</script>