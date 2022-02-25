<template>
  <div>
    <h2>
      Subbscriber
    </h2>
    <p>
      Hey I'm listening.
    </p>

    I'm getting card # {{ itemRecieved.item }}

    <button @click="callSaludo">
      Saludar
    </button>

    This is prop {{ itemRecieved.prop }}
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      observable: null,
      channel: 'cardIndex',
      itemRecieved: -1,
    };
  },
  mounted() {
    // eslint-disable-next-line no-return-assign
    window.mitt.on(this.channel, (data) => this.itemRecieved = data);
  },
  methods: {
    callSaludo() {
      const t = this.itemRecieved.saludo();
      // eslint-disable-next-line no-console
      console.log(t);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
