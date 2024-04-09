<template>
  <div class="text-section mb-4">
    <v-container class="px-0">
      <v-row>
        <v-col>
          <h2 class="text-h4">{{ subTitle }}</h2>
          <v-divider class="mt-2"></v-divider>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <slot></slot>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'TextSection',
  props: {
    subTitle: String
  }
}
</script>

<style>
.text-section p {
  font-size: 24px;
  margin-bottom: 16px;
}
</style>
