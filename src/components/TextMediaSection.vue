<template>
  <div class="text-media-section mb-4">
    <v-container class="px-0">
      <v-row>
        <v-col>
          <h2 class="text-h4">{{ subTitle }}</h2>
          <v-divider class="mt-2"></v-divider>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <slot name="media"></slot>
        </v-col>
        <v-col cols="12" md="6">
          <slot></slot>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'TextMediaSection',
  props: {
    subTitle: String
  }
}
</script>

<style>
.text-media-section p {
  margin-bottom: 16px;
}

.text-media-section iframe, .text-media-section img {
  width: 100%;
  aspect-ratio: 16 / 9;
}
</style>
