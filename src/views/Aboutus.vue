<template>
<div>
  <Topslider/>
  <Intro/>
  <Show/>
</div>
</template>

<script>
import Show from '../components/Show';
import Intro from '../components/Intro';
import Topslider from '../components/Topslider';
export default {
  name: 'Aboutus',

  data () {
    return {}
  },
  components:{
    Topslider,Show,Intro
  }

}

</script>

<style scoped lang="scss">

</style>
