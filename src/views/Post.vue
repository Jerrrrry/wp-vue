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
                                <a href="#">{{dateConvert(post.date)}}<span>{{monthConvert(post.date)}}</span></a>
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
                        <h4><a href="#" class="post-headline mb-0">{{title}}</a></h4>

                        <PostBody :content="content"></PostBody>
                    </div>
                </div>

            </div>

            <!-- ##### Sub Area ##### -->
            <div class="col-12 col-md-4 col-lg-12">
                <div class="post-sidebar-area">
                  <Tags :tags="tags"/>

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
  import Tags from '../components/Tags';

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
        featured_image: '',
        tags:[]
      }
    },

    created: async function () {
      this.post=await this.setup();
      this.link = this.post.link;
      this.date = this.getFormattedDate(this.post.date);
      this.title = this.post.title.rendered;
      this.content = this.post.content.rendered;
      this.tags=this.post.taginfos;




    },



    methods: {
      monthConvert:function(timeobj){
        let time=new Date(timeobj);
        let month_names= ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        return month_names[time.getMonth()]
      },
      dateConvert:function(timeobj){
        let time=new Date(timeobj);
        return time.getDate()
      },

      setup:function(){
        return new Promise(async (resolve,reject)=>{
          resolve(await this.getImage(await this.getTags(await this.setPost())));
        });
      },
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
          resolve(response.data[0]);


        });
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

            console.log('try me 2222')
          });

      },

      getTags:function (post) {
        return new Promise(async (resolve)=>{
          if(post.tags.length==0){
            console.log('no tags')

          }else{
            console.log('begin process tags')
            post.taginfos=[]
            post.tags.forEach(async (tag)=>{
              let response;
              try{
                response=await this.get(
                  `/tags/${tag}`
                );

              }catch(error){
                console.log('fail to add information')
              }
              console.log(response.data.name)
              post.taginfos.push(response.data)
            })





          }
          resolve(post)
        });
      }


    },


    components: {
      PostBody,Tags
    },

  }
</script>

<style scoped lang="scss">

</style>
