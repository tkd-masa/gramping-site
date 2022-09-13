<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const bg_imgs = [
  {
    id: 1,
    backgroundImage: require('../assets/img/hero_img.jpg'),
  },
  {
    id: 2,
    class_name: 'img2',
    backgroundImage: require('../assets/img/hero_img2.jpg'),
  },
  {
    id: 3,
    class_name: 'img3',
    backgroundImage: require('../assets/img/hero_img3.jpg'),
  },
]

const sectionLists = [
  {
    id: 1,
    section_name: 'tent_section',
    title: 'TENT',
    desc: '「Green Castle」ではご利用人数に合わせた3種類の大きさのテントルームを完備しております。大自然に囲まれた空間で快適な1日をお過ごしください。',
    img_src: require('../assets/img/tent_top.jpg'),
    img_class: 'tent_img',
    text_class: 'tent_section_text',
    link: '/TENT',
  },
  {
    id: 2,
    section_name: 'food_section',
    title: 'FOOD',
    desc: '「Green Castle」をご利用のお客様に、手ぶらでも楽しんでいただけるためにバーベキューの調理器具と新鮮な食材をご用意しております。自然に囲まれた軽井沢の景色を堪能しながらぜひ大切な人とのお食事をお楽しみください。',
    img_src: require('../assets/img/food_top.jpg'),
    img_class: 'food_img',
    text_class: 'food_section_text',
    link: '/FOOD',
  },
]

const instaImgs = [
  {
    id: 1,
    img_src: require('../assets/img/insta_img.jpg'),
  },
  {
    id: 2,
    img_src: require('../assets/img/insta_img2.jpg'),
  },
  {
    id: 3,
    img_src: require('../assets/img/insta_img3.jpg'),
  },
  {
    id: 4,
    img_src: require('../assets/img/insta_img4.jpg'),
  },
  {
    id: 5,
    img_src: require('../assets/img/insta_img5.jpg'),
  },
  {
    id: 6,
    img_src: require('../assets/img/insta_img6.jpg'),
  },
]

const settings = {
  itemsToShow: 2,
  snapAlign: 'start',
  wrapAround: true,
  autoplay: '2500',
}

const breakpoints = {
  // 768px and up
  768: {
    itemsToShow: 4,
  },
}
</script>

<template>
  <div id="page_top" class="big_bg">
    <h1 class="keyvisual_title">
      <span>自然に囲まれた</span><br /><span>優雅な世界へようこそ</span>
    </h1>
    <div
      v-for="bg_img in bg_imgs"
      :key="bg_img.id"
      class="bg_img"
      :style="{
        'background-image': 'url(' + bg_img.backgroundImage + ')',
      }"
    />
  </div>
  <div class="inner">
    <div class="concept">
      <h2 v-scroll>
        <span>CONCEPT</span>
      </h2>
      <p v-scroll>
        「Green
        Castle」は、大自然に囲まれた軽井沢の町で、大切な人との時間を笑顔で過ごせる空間をコンセプトに誕生いたしました。四季折々の自然の美しさを味わいながら、お客様にとって忘れられない一日を作れるようにスタッフ一同日々尽力しております。<br />「Green
        Castle」で幸せなひと時をお過ごしください。
      </p>
    </div>

    <section
      v-for="sectionList in sectionLists"
      :key="sectionList.id"
      class="home_section"
      :class="sectionList.section_name"
    >
      <div v-scroll :class="sectionList.img_class" class="section_img">
        <img :src="sectionList.img_src" alt="" />
      </div>
      <div v-scroll class="section_text" :class="sectionList.text_class">
        <h2>{{ sectionList.title }}</h2>
        <p>{{ sectionList.desc }}</p>
        <div class="btn_arrow">
          <router-link :to="sectionList.link">
            <span>MORE</span>
          </router-link>
        </div>
      </div>
    </section>

    <div class="instagram">
      <h2 v-scroll>
        <span>INSTAGRAM</span>
      </h2>
      <Carousel :settings="settings" :breakpoints="breakpoints">
        <template #slides>
          <Slide v-for="instaImg in instaImgs" :key="instaImg.id">
            <div class="carousel__item">
              <img :src="instaImg.img_src" alt="" />
            </div>
          </Slide>
        </template>
        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<style scoped>
h2 {
  text-align: center;
  font-size: 4rem;
  position: relative;
  width: fit-content;
  margin: 0 auto;
  text-decoration: underline;
}

h2 span {
  opacity: 0;
  display: inline-block;
  transition: opacity 1s ease 0.5s;
  text-decoration: underline;
}

h2.is_visible span {
  opacity: 1;
}

h2.is_visible::before {
  animation-name: bgLRextendAnime;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--main-color); /*伸びる背景色の設定*/
}

p {
  font-size: 1.4rem;
  text-align: center;
  line-height: 2;
}

.inner {
  padding: 0;
}

.big_bg {
  height: 100vh;
  margin-bottom: 40px;
  position: relative;
  overflow: hidden;
  position: relative;
}

.bg_img {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  animation: bgAnime 18s infinite; /* 3画像 × 各6s = 18s */
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  z-index: 10;
}

.bg_img:nth-of-type(2) {
  animation-delay: 6s;
}

.bg_img:nth-of-type(3) {
  animation-delay: 12s;
}

@keyframes bgAnime {
  0% {
    opacity: 0;
  }
  16% {
    opacity: 1;
  }
  33% {
    opacity: 1;
  }
  48% {
    opacity: 0;
    z-index: 9;
    transform: scale(1.2);
  }
  100% {
    opacity: 0;
  }
}

.keyvisual_title {
  position: absolute;
  font-size: 4rem;
  font-family: source-han-serif-japanese, serif;
  font-weight: 700;
  font-style: normal;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
  /* text-decoration:underline;
        text-underline-position: right;
        text-decoration-thickness: 2px; */
  white-space: nowrap;
  z-index: 11;
}

.keyvisual_title span {
  display: inline-block;
  border-right: 2px solid #fff;
}

.concept,
.home_section {
  margin-bottom: var(--common-space);
}

.concept {
  padding: 0 20px;
}

.concept p {
  opacity: 0;
  transform: translate3d(0, 18vh, 0);
  transition: 1.5s all ease;
}

.concept p.is_visible {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

.section_img {
  position: relative;
}

.section_img img {
  opacity: 0;
  transition: opacity 1s ease 0.5s;
}

.section_img.is_visible::before {
  animation-name: bgLRextendAnime;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--main-color); /*伸びる背景色の設定*/
}

@keyframes bgLRextendAnime {
  0% {
    transform-origin: left;
    transform: scaleX(0);
  }
  50% {
    transform-origin: left;
    transform: scaleX(1);
  }
  50.001% {
    transform-origin: right;
  }
  100% {
    transform-origin: right;
    transform: scaleX(0);
  }
}

.section_img.is_visible img {
  opacity: 1;
}

.tent_img img,
.food_img img {
  width: 100%;
}

.tent_img {
  margin-right: 10.666%; /*40/375*/
}

.food_img {
  margin-left: 10.666%; /*40/375*/
}

.section_text {
  position: relative;
  color: #fff;
  background-color: rgba(192, 201, 189, 0.7);
  padding: 40px 30px;
  transition: 1.5s all ease;
  opacity: 0;
  transform: translate3d(0, 18vh, 0);
}

.section_text.is_visible {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

.btn_arrow {
  font-size: 1.8rem;
  position: absolute;
  bottom: 0;
}

.tent_section_text .btn_arrow {
  text-align: right;
  right: 30px;
}

.food_section_text .btn_arrow {
  text-align: left;
  left: 30px;
}

.btn_arrow span {
  display: inline-block;
  width: 100%;
  position: relative;
  line-height: 1.8;
  font-family: alternate-gothic-atf, sans-serif;
  letter-spacing: 1px;
  color: #fff;
}

.tent_section_text .btn_arrow span {
  padding-right: 40px;
}

.food_section_text .btn_arrow span {
  padding-left: 40px;
}

.btn_arrow span::after {
  content: '';
  width: 100%;
  height: 20px;
  position: absolute;
  border-bottom: 2px solid #fff;
  bottom: 5px;
}

.tent_section_text .btn_arrow span::after {
  right: 20px;
  border-right: 2px solid #fff;
  transform: skew(45deg);
}

.food_section_text .btn_arrow span::after {
  left: 20px;
  border-left: 2px solid #fff;
  transform: skew(-45deg);
}

.tent_section_text {
  margin: -50px 0 0 10.666%;
}

.food_section_text {
  margin: -50px 10.666% 0 0;
}

.instagram {
  margin-bottom: var(--common-space);
  padding: 0 20px;
}

/* instagramのカルーセル */
.carousel__slide {
  padding: 10px;
}

.carousel__item {
  clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
  height: auto;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
@media screen and (min-width: 768px) {
  h2 {
    text-align: center;
    font-size: 6rem;
  }

  p {
    font-size: 1.6rem;
  }

  .concept {
    padding: 0;
    margin-bottom: 200px;
  }

  .concept p {
    padding: 0 20%;
    transform: translate3d(0, 120px, 0);
  }

  .keyvisual_title {
    font-size: 6rem;
  }

  .home_section {
    position: relative;
    width: 80%;
    margin: 0 0 400px;
  }

  .tent_section {
    margin-right: auto;
  }

  .food_section {
    margin-left: auto;
  }

  .section_text {
    position: absolute;
    width: 60%;
    top: 80%;
    transform: translate3d(0, 120px, 0);
  }

  .btn_arrow {
    font-size: 2rem;
    position: absolute;
    bottom: 0;
  }

  .btn_arrow span,
  .btn_arrow span::after {
    transition: all 0.3s ease;
  }

  @media (hover: hover) and (pointer: fine) {
    .btn_arrow:hover span {
      color: #000;
    }

    .btn_arrow:hover span::after {
      border-color: #000;
    }
  }

  .tent_img {
    margin-right: 180px;
  }

  .food_img {
    margin-left: 180px;
  }

  .tent_section_text {
    margin: 0;
    right: 0;
  }

  .food_section_text {
    margin: 0;
  }

  .instagram {
    margin-bottom: 200px;
    padding: 0 80px;
  }
}
</style>
