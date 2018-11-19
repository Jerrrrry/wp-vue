<template>
<div>
  <Slider/>
  <div class="blog-wrapper section-padding-100 clearfix">
    <Guide/>
  </div>

</div>
</template>

<script>

import Slider from '../components/Slider';
import Guide from '../components/Guide';
export default {
  name: 'Home',

  data () {
    return {}
  },

  components:{
    Slider,
    Guide
  }

}

</script>

<style scoped lang="scss">

</style>
