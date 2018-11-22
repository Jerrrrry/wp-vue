<template>
<div class="single-blog-wrapper section-padding-0-100">

    <!-- Single Blog Area  -->
    <div class="single-blog-area blog-style-2 mb-50">
        <div class="single-blog-thumbnail">
            <img :src="post.featured_image"/>
            <div class="post-tag-content">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="post-date">
                                <a href="#">12 <span>march</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <!-- ##### Post Content Area ##### -->
            <div class="col-12 col-lg-12">
                <!-- Single Blog Area  -->
                <div class="single-blog-area blog-style-2 mb-50">
                    <!-- Blog Content -->
                    <div class="single-blog-content">
                        <div class="line"></div>
                        <a href="#" class="post-tag">Lifestyle</a>
                        <h4><a href="#" class="post-headline mb-0">{{title}}</a></h4>

                        <PostBody :content="content"></PostBody>
                    </div>
                </div>

            </div>

            <!-- ##### Sidebar Area ##### -->
            <div class="col-12 col-md-4 col-lg-12">
                <div class="post-sidebar-area">

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
                </div>
            </div>
        </div>
    </div>
</div>
<!-- ##### Single Blog Area End ##### -->
</template>

<script>
  import bus from '../bus';
  import utils from '../mixins/utils';
  import ajax from '../mixins/ajax';
  import PostBody from '../components/PostBody';

  export default {
    name: 'Post',

    mixins: [utils, ajax],

    data () {
      return {
        post: {},
        date: '',
        link: '',
        title: '',
        content: '',
        featured_image: ''
      }
    },

    created: async function () {
      this.post = await this.setPost();
      this.link = this.post.link;
      this.date = this.getFormattedDate(this.post.date);
      this.title = this.post.title.rendered;
      this.content = this.post.content.rendered;


    },

    methods: {
      setPost: function () {
        return new Promise(async (resolve, reject) => {
          let response;

          try {
            response = await this.get(`/posts?slug=${this.$route.params.slug}`);
          } catch (error) {
            this.$router.push({name: 'four-o-four'});
            return;
          }
          console.log('setPost');
          this.post = await this.getImage(response.data[0]);

          console.log('please give me a shit');
          resolve(response.data[0]);


        });
      },

      getFeaturedImage: async function (id) {

        let response;
        try {

          if(post.featured_media <= 0) {
            throw "No featured image.";
          }

          response = await this.get(`/media/${id}`);
        } catch (error) {
          return null;
        }
        console.log('getFeaturedImage is working')
        return response.data.media_details.sizes['large'].source_url;
      },

      getImage:function(post){
          return new Promise( async (resolve) => {
            let response;
            try {

              if(post.featured_media <= 0) {
                throw "No featured image.";
              }

              response = await this.get(
                `/media/${post.featured_media}`
              );
              post.featured_image = response.data.media_details.sizes['large'].source_url;
            } catch (error) {
              post.featured_image = null;
            }

            resolve(post);
          });

      }
    },


    components: {
      PostBody
    },
    watch:{
      post:async function(){
        let response;
        try {

          if(post.featured_media <= 0) {
            throw "No featured image.";
          }

          response = await this.get(`/media/${post.featured_media}`);
        } catch (error) {
          return null;
        }

        this.featured_image=response.data.media_details.sizes['large'].source_url;
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
