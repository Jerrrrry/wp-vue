<template>
<div>
  <Slider/>
  <div class="blog-wrapper section-padding-100 clearfix">
    <Guide/>
    <Homeposts/>
  </div>

</div>
</template>

<script>

import Slider from '../components/Slider';
import Guide from '../components/Guide';
import Homeposts from '../components/Homeposts';
export default {
  name: 'Home',

  data () {
    return {}
  },

  components:{
    Slider,
    Guide,
    Homeposts
  }

}

</script>

<style scoped lang="scss">

</style>
