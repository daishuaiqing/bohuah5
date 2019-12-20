<template>
  
</template>

<script>
export default {
    created(){
        if(navigator.language === "zh-CN"){
            this.$router.push("/page1");
        }else{
            this.$router.push("/enpage1");
        }
    }
}
</script>

<style>

</style>