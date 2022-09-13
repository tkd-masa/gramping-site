<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import HeaderArea from './components/HeaderArea.vue'
import FooterArea from './components/FooterArea.vue'
import BtnArea from './components/BtnArea.vue'
import LoadingArea from './components/LoadingArea.vue'

let loading = ref(true)
onMounted(() => {
  loading.value = false
  // タブレットをpc画面の縮小サイズで表示する設定
  const baseW = 1040 // viewportのwidth
  const ua = navigator.userAgent

  const sp = ua.indexOf('iPhone') > -1 || (ua.indexOf('Android') > -1 && ua.indexOf('Mobile') > -1)
  const tab =
    !sp &&
    (ua.indexOf('iPad') > -1 ||
      (ua.indexOf('Macintosh') > -1 && 'ontouchend' in document) ||
      ua.indexOf('Android') > -1)

  if (tab) {
    let viewportContent = 'width=' + baseW + 'px,user-scalable=no'
    document.querySelector("meta[name='viewport']")?.setAttribute('content', viewportContent)
  }
})
</script>

<template>
  <LoadingArea v-show="loading" />
  <HeaderArea />
  <BtnArea />
  <main class="main">
    <router-view />
  </main>
  <FooterArea />
</template>

<style>
:root {
  --common-space: 64px;
  --common-space-pc: 200px;
  --base-color: #efe5cb;
  --main-color: #bfc9bd;
  --accent-color: #c1d1e0;
  --title-font: alternate-gothic-atf, sans-serif;
  --pc-inner: 1020px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  line-break: strict;
  font-feature-settings: 'palt';
  background-color: var(--base-color);
  font-family: tbudmincho-std, sans-serif;
  font-weight: 500;
  font-style: normal;
}

h2 {
  font-family: var(--title-font);
  font-weight: 700;
  font-style: normal;
  line-height: 2;
  letter-spacing: 2px;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: #000;
}

img {
  width: 100%;
  height: auto;
  vertical-align: bottom;
}

.inner {
  padding: 0 20px;
}

.title_area {
  text-align: center;
  padding-top: 65px;
  padding-bottom: 10px;
  margin-bottom: 64px;
  color: #fff;
}

.page_title_en {
  font-size: 6rem;
  font-family: var(--title-font);
  letter-spacing: 4px;
}

.page_title_ja {
  font-size: 20px;
}

.fade-enter-active {
  transition: opacity 1s ease;
}

.fade-enter-from {
  opacity: 0;
}

.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-leave-to {
  opacity: 1;
}

@media screen and (min-width: 768px) {
  .inner {
    max-width: 1020px;
    margin: 0 auto;
  }
  .title_area {
    padding-top: 120px;
    padding-bottom: 20px;
  }

  .page_title_en {
    font-size: 8rem;
  }

  .page_title_ja {
    font-size: 4rem;
  }
}
</style>
