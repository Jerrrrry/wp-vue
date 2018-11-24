<template>
<!-- Widget Area -->
<div class="sidebar-widget-area">
    <h5 class="title">Tags</h5>
    <div class="widget-content">
        <ul class="tags">
            <li><a href="#">design</a></li>
            <li><a href="#">fashion</a></li>
            <li><a href="#">travel</a></li>
            <li><a href="#">music</a></li>
            <li><a href="#">party</a></li>
            <li><a href="#">video</a></li>
            <li><a href="#">photography</a></li>
            <li><a href="#">adventure</a></li>
        </ul>
    </div>
</div>
<!--Widget Area End-->
</template>

<script>
export default {
  name: 'Tags',

  data () {
    return {}
  },
  props:{
    tags: {
      required: true
    }
  }
}

</script>

<style scoped lang="scss">

</style>
