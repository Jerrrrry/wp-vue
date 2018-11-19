<template>
  <div>
    <form @submit.prevent="submit">
      <h2>Endpoint</h2>
      <p>Enter a valid WordPress REST endpoint.</p>
      <input v-model="updatedEndpoint" type="text">
      <span v-if="error">{{ error }}</span>
      <button type="submit">Save</button>
    </form>
    <a
      v-if="!error"
      @click="close">Nevermind.</a>
  </div>
</template>

<script>
import bus from '../bus';

export default {
  name: 'Updater',

  props: {
    error: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      updatedEndpoint: ''
    }
  },

  created: function () {
    this.updatedEndpoint = this.$store.state.endpoint;
  },

  methods: {
    close: function () {
      this.$emit('close');
    },

    submit: function () {

      this.$ga.event({
        eventCategory: 'form',
        eventAction: 'updateEndpoint',
        eventLabel: `Update to ${this.updatedEndpoint}`
      });

      this.$store.commit('cache/wipe');

      this.$store.commit('updateEndpoint', this.updatedEndpoint);

      this.$router.push('/posts');

      this.$emit('close');
    }
  }
}

</script>

<style scoped lang="scss">

</style>
