<template>
<!-- Single Blog Area  -->
<div class="col-12 col-md-6 col-lg-4">
    <div class="single-blog-area blog-style-2 mb-50 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1000ms">
        <div class="single-blog-thumbnail">
            <router-link
              :to="{
                name: 'post',
                params: { slug: post.slug }
              }"
            ><img :src="post.featured_image" alt="Blog Post Featured Image"/>
            </router-link>
            <div class="post-date">
                <a href="#">12 <span>{{monthConvert(post.date)}}</span></a>
            </div>
        </div>
        <!-- Blog Content -->
        <div class="single-blog-content mt-50">
            <div class="line"></div>
            <a href="#" class="post-tag">Lifestyle</a>
            <h4><a href="#" class="post-headline">{{post.title.rendered}}</a></h4>

        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Hpost',

  data () {
    return {}
  },

  props: {
    post: {
      type: Object
    }
  },

  methods:{
    monthConvert:function(timeobj){
      let time=new Date(timeobj);
      let month_names= ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      return month_names[time.getMonth()]
    }
  }

}

</script>

<style scoped lang="scss">

</style>
