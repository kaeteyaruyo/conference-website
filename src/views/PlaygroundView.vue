<template>
  <!-- <basic-layout> 是所有 section 元件的容器，在裡頭可以新增多個段落 -->
  <basic-layout title="頁面主標題">
    <!-- <text-section> 是內文只有文字的段落，標題請使用 attribute 傳入，
         內文可以 HTML 語法或是使用 Vuetify 元件寫在此標籤的內部。-->
    <text-section sub-title="子段落一">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
        內文看起來會長得像這樣，可以直接撰寫 HTML 語法，使用 <a href="https://vuetifyjs.com/en/" target="_blank">Vuetify</a>
        元件則可以添加比較漂亮的按鈕或表格之類的，但老師懶得 survey 的話可以直接跟我說一聲我來加就好 :D
      </p>
      <p>
        在文字中如果要增加<strong>外部超連結</strong>請使用 <code>&lt;a href="https://url.to.the.site"&gt;</code>，也就是一般的 HTML 語法。
        但是如果是要增加<strong>站內超連結</strong>，請使用 <code>&lt;router-link to="/pathname"&gt;</code>。
      </p>
    </text-section>
    <text-section sub-title="子段落二">
      <p>
        也可以像這樣添加多個段落。
      </p>
    </text-section>
    <!-- <text-media-section> 是內文有文字和影片或圖片的段落，標題請使用 attribute 傳入，
      影片或圖片請放在內文前方的 <template v-slot:media> 標籤內部。-->
    <text-media-section sub-title="影音文字段落">
      <template v-slot:media>
        <iframe src="https://www.youtube.com/embed/4LE35DpaduE" title="ICS 2024 Madrid Invitation" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <img :src="require('@/assets/photo1.jpg')" />
      </template>
      <p>
        可以放影片或是圖片並搭配說明文字的段落。請在主要內文前方加上 <code>&lt;template v-slot:media&gt;</code> 標籤
        並將影片或圖片的 HTML 程式碼放在當中。為了讓排版一致所有圖片和影音都會以 16:9 的長寬比顯示。
      </p>
    </text-media-section>
  </basic-layout>
</template>

<script>
// 要使用上述自訂元件時，必須先在此處將該元件的 .vue 檔引入，並放在 components 中進行註冊。
// 大部分的元件都放在 src/components/ 資料夾當中，
// 跟整體版面配置有關的則在 src/layouts/ 中（目前只有 BasicLayout）
import BasicLayout from '@/layouts/BasicLayout.vue'
import TextSection from '@/components/TextSection.vue'
import TextMediaSection from '@/components/TextMediaSection.vue'

export default {
  components: {
    BasicLayout,
    TextSection,
    TextMediaSection,
  }
}
</script>
