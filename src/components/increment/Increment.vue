<template>
  <div>
    <button v-on:click="incrementCount(1)">增加</button>
    <button @click="addCount(1)">增加</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: mapActions([
    'incrementCount',
    'addCount'
  ])
}
</script>
