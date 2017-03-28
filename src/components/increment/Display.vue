<template>
  <div>
    <h3>总数为:{{ incrementValue }}</h3>
    <h3>总数为:{{ countValue }}</h3>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: mapGetters({
    incrementValue: 'getIncrementCount',
    countValue: 'getCount'
  })
}
</script>
