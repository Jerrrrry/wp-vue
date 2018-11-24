<template>
<!-- Nav Area -->
<div class="original-nav-area" id="stickyNav">
    <div class="classy-nav-container breakpoint-off">
        <div class="container">
            <!-- Classy Menu -->
            <nav class="classy-navbar justify-content-between">

                <!-- Subscribe btn -->
                <div class="subscribe-btn">
                    <a href="#" class="btn subscribe-btn" data-toggle="modal" data-target="#subsModal">Subscribe</a>
                </div>

                <!-- Navbar Toggler -->
                <div class="classy-navbar-toggler">
                    <span class="navbarToggler"><span></span><span></span><span></span></span>
                </div>

                <!-- Menu -->
                <div class="classy-menu" id="originalNav">
                    <!-- close btn -->
                    <div class="classycloseIcon">
                        <div class="cross-wrap"><span class="top"></span><span class="bottom"></span></div>
                    </div>

                    <!-- Nav Start -->
                    <div class="classynav">
                        <ul>
                            <li>
                              <a href="/">主页</a>
                            </li>

                            <li>
                              <router-link
                                :to="{
                                  name: 'posts',
                                }"
                              >文章
                              </router-link>
                            </li>

                            <li>
                              <router-link
                                :to="{
                                  name: 'aboutus',
                                }"
                              >关于我们
                              </router-link>
                            </li>

                            <li>
                              <router-link
                                :to="{
                                  name: 'contact',
                                }"
                              >联系我们
                              </router-link>
                            </li>


                        </ul>

                        <!-- Search Form  -->
                        <div id="search-wrapper">
                            <form action="#">
                                <input type="text" id="search" placeholder="Search something...">
                                <div id="close-icon"></div>
                                <input class="d-none" type="submit" value="">
                            </form>
                        </div>
                    </div>
                    <!-- Nav End -->
                </div>
            </nav>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'TopBar',

  data () {
    return {}
  },

  computed: {
    splitEndpoint: function () {
      return this.$store.state.endpoint.split('/')
    },

    sourceURL: function () {
      return this.splitEndpoint[0] + this.splitEndpoint[1] + this.splitEndpoint[2];
    }
  },

  methods: {
    showUpdater: function () {
      this.$emit('showUpdater');
    }
  }
}

</script>

<style scoped lang="scss">

</style>
