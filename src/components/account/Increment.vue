<template>
  <div>
    <button v-on:click="incrementAccountCount(1)">增加</button>
    <button @click="incrementCount(1)">增加</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
/*
export default {
  methods: mapActions([
    'incrementAccountCount',
    'incrementCount'
  ])
}
*/
export default {
  methods: {
    ...mapActions([
      'incrementAccountCount',
      'incrementCount'
    ])
  }
}
</script>
