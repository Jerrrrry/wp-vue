<template>
<div class="container">
  <div class="row">
    <div class="col-12 col-lg-12">
      <h3>{{tag.name}}</h3>
    </div>

    <Hpost
      v-for="post in posts"
      :post="post"
      :key="post.id"
    />


  </div>
</div>





</template>

<script>
import bus from '../bus';
import utils from '../mixins/utils';
import ajax from '../mixins/ajax';
import Pagination from '../components/Pagination';
import Hpost from '../components/Hpost';

export default {
  name: 'Tag',

  data () {
    return {
      tag:{},
      posts:{},
      page: 1,
      totalPages: null
    }
  },

  components:{
    Pagination,Hpost
  },

  mixins: [utils, ajax],

  created:async function(){

  },

  mounted:async function (){
  this.tag=await this.setTag()
  this.posts=await this.setPosts()
  },

  methods:{
    setTag: function () {
      return new Promise(async (resolve, reject) => {
        let response;

        try {
          response = await this.get(`/tags/${this.$route.params.id}`);
        } catch (error) {
          console.log(error)
          this.$router.push({name: 'four-o-four'});
          return;
        }
        console.log('setTag');
        resolve(response.data);


      });
    },
    setPosts: function () {
      return new Promise(async (resolve, reject) => {
        let response;

        try {
          response = await this.get(`/posts?tags=${this.$route.params.id}`);
        } catch (error) {
          console.log(error)
          this.$router.push({name: 'four-o-four'});
          return;
        }
        console.log('setPosts');
        resolve(await this.getFeaturedImages(response.data));


      });
    },

    getFeaturedImages: function (posts) {
      return new Promise((resolve) => {
        let requests = posts.map((post) => {
          return new Promise( async (resolve) => {
            let response;

            try {

              if(post.featured_media <= 0) {
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
    },



  }



}

</script>

<style scoped lang="scss">

.single-blog-area .single-blog-content .post-tag {
  font-size:30px;
  margin-top:10px
}
</style>
