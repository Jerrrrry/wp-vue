<template>
<div class="container">
    <div class="row">
        <div class="col-12 col-lg-12">
          <Spost
            v-for="post in posts"
            :post="post"
            :key="post.id"
          />




            <!-- Load More -->
            <div class="load-more-btn mt-100 wow fadeInUp" data-wow-delay="0.7s" data-wow-duration="1000ms">
                <a href="#" class="btn original-btn">Read More</a>
            </div>
          </div>
    </div>
</div>
</template>

<script>

import bus from '../bus';
import ajax from '../mixins/ajax';
import Spost from './Spost'

export default {
  name: 'Homeposts',

  mixins: [ajax],

  data () {
    return {
      posts: [],
      page: 1,
      totalPages: null
    }
  },

  components:{
    Spost
  },

  mounted: function () {
    this.getPosts();
  },

  methods: {
    getPosts: async function () {
      let response;

      try {
        response = await this.get(
          `/posts?per_page=${POSTS_PER_PAGE}&page=${this.page}`
        );
        this.totalPages = response.headers['x-wp-totalpages'];
      } catch (error) {

        return;
      }

      this.posts = await this.getFeaturedImages(response.data);
    },



    getFeaturedImages: function (posts) {
      return new Promise((resolve) => {
        let requests = posts.map((post) => {
          return new Promise( async (resolve) => {
            let response;

            try {

              if(post.featured_media <= 0) {
                console.log('no pic');
                throw "No featured image.";
              }

              response = await this.get(
                `/media/${post.featured_media}`
              );
              post.featured_image = response.data.media_details.sizes['medium'].source_url;
            } catch (error) {
              post.featured_image = null;
            }

            resolve(post);
          });
        });

        Promise.all(requests).then((posts) => resolve(posts));
      });
    }
  },

}

</script>

<style scoped lang="scss">

</style>
