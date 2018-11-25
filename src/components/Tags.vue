<template>
<!-- Widget Area -->
<div class="sidebar-widget-area">
    <h5 class="title">Tags</h5>
    <div class="widget-content">
        <ul class="tags">
            <li v-for="tag in tags"><a href="#">{{tag.name}}</a></li>
            <li><a href="x">nima</a></li>


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
  },

}

</script>

<style scoped lang="scss">

</style>
