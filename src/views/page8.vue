<template>
  <div>详情页</div>
</template>

<script>
export default {
    created(){
        console.log(this.$route.query.type)
    }
}
</script>

<style>

</style>