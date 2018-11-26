<template>
  <div id="app">
    <header class="header-area">
      <Topheader/>
      <TopBar/>
    </header>

    <div id="wrapper">
      <router-view :key="this.viewKey" v-title="title"></router-view>
    </div>
    <Foot />
  </div>
</template>

<script>
  import bus from './bus';
  import Foot from './components/Foot';
  import Updater from './components/Updater';
  import TopBar from './components/TopBar';
  import Topheader from './components/Topheader';

  export default {
    name: 'App',

    data () {
      return {
        error: '',
        loadingOn: true,
        loadingMessage: 'Loading Beauty Planet',
        loadingWheel: true,
        showUpdater: false,
        viewKey: 0,
      }
    },

    created: function () {

      this.assignEndpointFromURL();

      bus.$on('toggleLoading', (status = true) => {

        if(typeof status === 'string') {
          this.loadingOn = true;
          this.showWheel = false;
          this.loadingMessage = status;
          return;
        }

        this.loadingMessage = 'Loading...';
        this.loadingWheel = true;
        this.loadingOn = status;
      });

      bus.$on('bumpViewKey', (loadingMessage) => {
        bus.$emit('toggleLoading', loadingMessage);
        this.viewKey = this.viewKey + 1;
      });

      bus.$on('showUpdater', (errorMessage) => {
        this.showUpdater = true;
        this.error = errorMessage;
      });

      bus.$on('clearError', () => {
        this.error = '';
      });
    },

    methods: {
      assignEndpointFromURL: function () {
        let endpoint = this.getQueryString('endpoint');

        if(!endpoint) return;

        this.$store.commit('updateEndpoint', endpoint);
      }
    },

    components: {
      Foot,
      Updater,
      TopBar,
      Topheader
    }
  }
</script>

<style lang="scss">

</style>
