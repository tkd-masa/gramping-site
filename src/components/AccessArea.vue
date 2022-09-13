<template>
  <div class="title_area">
    <h1 class="page_title_en">
      ACCESS
    </h1>
    <div class="page_title_ja">
      アクセス
    </div>
  </div>
  <div class="map">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102828.3623739002!2d138.5123094831923!3d36.35142027240443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601dd23c3fc1a393%3A0x99118f4883da71f9!2z6ZW36YeO55yM5YyX5L2Q5LmF6YOh6Lu95LqV5rKi55S6!5e0!3m2!1sja!2sjp!4v1656059492957!5m2!1sja!2sjp"
      width="375"
      height="232"
      style="border: 0"
      allowfullscreen
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    />
  </div>
  <div class="inner">
    <div class="access_detail">
      <dl>
        <dt><font-awesome-icon icon="location-dot" class="icon" />ADDRESS</dt>
        <dd>〒123-4567<br />長野県北佐久郡軽井沢町発地0000</dd>
        <dt><font-awesome-icon icon="car" class="icon" />お車でお越しの方</dt>
        <dd>
          <img src="../assets/img/access_route.png" alt="" />
        </dd>
        <dt><font-awesome-icon icon="square-parking" class="icon" />駐車場</dt>
        <dd>最大10台までの無料駐車場有</dd>
      </dl>
    </div>
  </div>
</template>

<style scoped>
.title_area {
  background-image: url(../assets/img/title_bg_access.jpg);
  background-size: cover;
  background-position: center;
}

.access_detail {
  padding-bottom: var(--common-space);
}

dl dt {
  font-size: 20px;
  line-height: 40px;
}

dl dd {
  font-size: 14px;
  margin-bottom: 20px;
}

.map {
  position: relative;
  width: 100%;
  height: 0;
  margin-bottom: 30px;
  padding-top: 61.866%;
}

/* Google Mapのiframe */
.map iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.icon {
  padding-right: 7px;
}

@media screen and (min-width: 768px) {
  .title_area {
    background-image: url(../assets/img/title_bg_access_pc.jpg);
  }

  .access_detail {
    padding-bottom: var(--common-space-pc);
  }

  .map {
    width: fit-content;
    margin: 0 auto;
    padding-top: 0;
    height: 100%;
  }

  .map iframe {
    position: static;
    width: 1020px;
    height: 630px;
  }

  dl dt {
    font-size: 30px;
    line-height: 50px;
  }

  dl dd {
    font-size: 18px;
    margin-bottom: 40px;
  }
}
</style>
