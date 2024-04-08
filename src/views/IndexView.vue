<template>
  <!-- TODO: 請將圖片置換成正確的檔案 -->
  <v-carousel class="width-100" cycle :show-arrows="false">
    <v-carousel-item :src="require('@/assets/photo1.jpg')" cover></v-carousel-item>
    <v-carousel-item :src="require('@/assets/photo2.jpg')" cover></v-carousel-item>
    <v-carousel-item :src="require('@/assets/photo3.jpg')" cover></v-carousel-item>
  </v-carousel>
  <basic-layout title="ICS 2024: 2024 International Computer Symposium">
    <!-- TODO: 請將 <coming-soon> 標籤置換成正式內容 -->
      <coming-soon></coming-soon>
  </basic-layout>
</template>

<script>
import BasicLayout from '@/layouts/BasicLayout.vue'
import ComingSoon from '@/components/ComingSoon.vue'

export default {
  components: {
    BasicLayout,
    ComingSoon,
  }
}
</script>
