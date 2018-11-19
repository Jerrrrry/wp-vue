<template>
<div class="container">
    <div class="row">
        <div class="col-12 col-lg-12">

            <!-- Single Blog Area  -->
            <div class="single-blog-area blog-style-2 mb-50 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1000ms">
                <div class="row align-items-center">
                    <div class="col-12 col-md-6">
                        <div class="single-blog-thumbnail">
                            <img src="img/blog-img/3.jpg" alt="">
                            <div class="post-date">
                                <a href="#">12 <span>march</span></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <!-- Blog Content -->
                        <div class="single-blog-content">
                            <div class="line"></div>
                            <a href="#" class="post-tag">Lifestyle</a>
                            <h4><a href="#" class="post-headline">Party people in the house</a></h4>
                            <p>Curabitur venenatis efficitur lorem sed tempor. Integer aliquet tempor cursus. Nullam vestibulum convallis risus vel condimentum. Nullam auctor lorem in libero luctus, vel volutpat quam tincidunt.</p>
                            <div class="post-meta">
                                <p>By <a href="#">james smith</a></p>
                                <p>3 comments</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



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
