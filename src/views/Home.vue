<template>
<div>
  <Slider/>
  <div class="blog-wrapper section-padding-100 clearfix">
    <Guide/>
  </div>
  <Ins/>

</div>
</template>

<script>

import Slider from '../components/Slider';
import Guide from '../components/Guide';
import Homeposts from '../components/Homeposts';
import Show from '../components/Show';
import Ins from '../components/Ins';
export default {
  name: 'Home',

  data () {
    return {}
  },

  components:{
    Slider,
    Guide,
    Homeposts,
    Show,
    Ins
  }

}

</script>

<style scoped lang="scss">

</style>
