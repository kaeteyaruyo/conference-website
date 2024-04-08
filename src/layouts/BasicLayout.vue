<template>
  <v-container class="basic-layout px-4 px-sm-8 px-md-16 px-lg-auto py-10">
    <v-row>
      <v-col align="center">
        <h1 class="text-h3 mb-5">{{ title }}</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col align="start">
        <slot></slot>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'BasicLayout',
  props: {
    title: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.basic-layout {
  max-width: 1200px;
}
</style>
