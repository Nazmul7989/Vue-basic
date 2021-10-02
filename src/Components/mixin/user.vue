
<template>
  <div>
    <p>{{ txt }}</p>
    <ul>
      <li v-for="name in names" :key="name">
        {{ name }}
      </li>
    </ul>
  </div>
</template>


<script>
import { nameMixin } from "./mixin";

export default {
  data(){
    return{
      // txt: 'Hello mixin 2'
    }
  },
  mixins:[nameMixin]
}
</script>