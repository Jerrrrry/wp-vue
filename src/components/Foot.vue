<template>
<!-- ##### Footer Area Start ##### -->
<footer class="footer-area text-center">
    <div class="container">
        <div class="row">
            <div class="col-12">

                <!-- Footer Nav Area -->
                <div class="classy-nav-container breakpoint-off">
                    <!-- Classy Menu -->
                    <nav class="classy-navbar justify-content-center">

                        <!-- Navbar Toggler -->
                        <div class="classy-navbar-toggler">
                            <span class="navbarToggler"><span></span><span></span><span></span></span>
                        </div>

                        <!-- Menu -->
                        <div class="classy-menu">

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
                            </div>
                            <!-- Nav End -->
                        </div>
                    </nav>
                </div>

                <!-- Footer Social Area -->
                <div class="footer-social-area mt-30">
                    <a href="www.linkedin.com/in/yubin-qiu-1101" data-toggle="tooltip" data-placement="top" title="Linkedin"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
    </div>


Copyright &copy All rights reserved


</footer>
<!-- ##### Footer Area End ##### -->
</template>

<script>
  export default {
    name: 'Foot'
  }
</script>

<style scoped lang="scss">

</style>
