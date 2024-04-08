<template>
  <!-- TODO: 請將圖片置換成正確的檔案 -->
  <v-carousel class="width-100" cycle :show-arrows="false">
    <v-carousel-item :src="require('@/assets/photo1.jpg')" cover></v-carousel-item>
    <v-carousel-item :src="require('@/assets/photo2.jpg')" cover></v-carousel-item>
    <v-carousel-item :src="require('@/assets/photo3.jpg')" cover></v-carousel-item>
  </v-carousel>
  <basic-layout title="ICS 2024: 2024 International Computer Symposium">
    <!-- TODO: 請將 <coming-soon> 標籤置換成正式內容 -->
    <!--  <coming-soon></coming-soon> -->
    International Computer Symposium (ICS) is one of the most prestigious international ICT symposiums held in Taiwan. Founded in 1973, it is intended to provide a forum for researchers, educators, and professionals to exchange their discoveries and practices, and to explore future trends and applications in computer technologies. The biennial symposium offers a great opportunity to share research experiences and to discuss potential new trends in the ICT industry. ICS 2024 will provide workshops, panels and keynotes to facilitate discourse on and deepen the understanding of the challenges in computer and communication technologies.
      This year, ICS 2024 will be held at National Yang Ming Chiao Tung University, Taipei, Taiwan, on October 24-26, 2024
  </basic-layout>
</template>

<script>
import BasicLayout from '@/layouts/BasicLayout.vue'
// import ComingSoon from '@/components/ComingSoon.vue' 

export default {
  components: {
    BasicLayout,
  //  ComingSoon,
  }
}
</script>
