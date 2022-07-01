<template>
  <div>
    <p>{{ info }}</p>
  </div>
</template>

<script lang="ts">
import { mapState, mapActions } from "vuex";

export default {
  name: 'FirstMode',
  data() {
    return {
      data: ''
    }
  },
  mounted() {
    this.getUserInfo()
  },
  updated() {
    console.log(this.userName, this.phone)
  },
  computed: {
    info() {
      return this.userName + this.phone
    },
    ...mapState([
        'userName','phone'
    ])
  },
  methods: {
    ...mapActions([
        'getUserInfo'
    ])
  }
}
</script>

<style scoped lang="scss">

</style>