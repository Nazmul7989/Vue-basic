
<template>
  <div>
    <p>{{ txt | upperCase | removeTxt }}</p>
  </div>
</template>

<script>
export default {
  data(){
    return{
      txt: 'Hello world'
    }
  },
  filters:{
    upperCase(value){
      return value.toUpperCase();
    },
    // removeTxt(value){
    //   return value.slice(1);
    // }
  }
}
</script>