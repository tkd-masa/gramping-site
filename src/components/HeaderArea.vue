<script lang="ts" setup>
import { ref } from 'vue'

const open = ref<boolean>(false)
const items: { id: number; link: string; itemName: string; itemName_ja: string }[] = [
  {
    id: 1,
    link: '/HOME',
    itemName: 'HOME',
    itemName_ja: 'ホーム',
  },
  {
    id: 2,
    link: '/TENT',
    itemName: 'TENT',
    itemName_ja: 'テント',
  },
  {
    id: 3,
    link: '/FOOD',
    itemName: 'FOOD',
    itemName_ja: 'フード',
  },
  {
    id: 4,
    link: '/FAQ',
    itemName: 'FAQ',
    itemName_ja: 'よくある質問',
  },
  {
    id: 4,
    link: '/ACCESS',
    itemName: 'ACCESS',
    itemName_ja: 'アクセス',
  },
]
</script>

<template>
  <header class="header">
    <div class="header_inner">
      <div class="head_fix">
        <div class="logo">
          <router-link to="/HOME">
            <img src="../assets/img/logo.svg" alt="ロゴ" />
          </router-link>
        </div>
        <!--ハンバーガーメニュー-->
        <div class="nav_btn" :class="{ is_active: open }" @click="open = !open">
          <span />
          <span />
          <span />
        </div>
      </div>
      <nav class="header_nav" :class="{ is_active: open }">
        <ul class="header_nav_list">
          <li v-for="item in items" :key="item.id" class="header_nav_item">
            <router-link :to="item.link" class="header_nav_item_link" @click="open = false">
              {{ item.itemName }}
              <div class="header_nav_item_ja">
                {{ item.itemName_ja }}
              </div>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header_inner {
  position: fixed;
  z-index: 99;
  width: 100%;
  top: 0;
}

.head_fix {
  display: table;
  width: 100%;
  position: relative;
  background-color: transparent;
  padding: 5px 0;
}

.logo {
  padding-left: 20px;
  display: table-cell;
  vertical-align: middle;
}

.logo img {
  width: 65px;
}

/* ハンバーガーメニュー */
.nav_btn {
  display: table-cell;
  vertical-align: middle;
  width: 65px;
  height: 65px;
  text-align: center;
  z-index: 100;
  position: relative;
}

.nav_btn span {
  display: block;
  width: 35px; /* 35/65 */
  height: 2px;
  background-color: #fff;
  margin: 0 auto;
  z-index: 99;
  transition: all 0.5s ease;
}

.nav_btn span:nth-of-type(2) {
  margin: 6px auto;
}

.header_nav {
  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  transform: translateX(100%);
  opacity: 0;
  transition: 0.3s 0.2s;
  padding-top: 80px;
  z-index: 98;
}

.header_nav_item {
  letter-spacing: 2px;
  font-family: mrs-eaves, serif;
  font-weight: 400;
  font-style: normal;
}

.is_active.header_nav {
  opacity: 1;
  transform: translate(0);
}

.is_active.nav_btn span {
  background-color: #000;
}

.is_active.nav_btn span:nth-of-type(1) {
  transform: translateY(8px) rotate(45deg);
}

.is_active.nav_btn span:nth-of-type(2) {
  opacity: 0;
}

.is_active.nav_btn span:nth-of-type(3) {
  transform: translateY(-8px) rotate(-45deg);
}

.header_nav_item {
  font-size: 2.4rem;
  margin: 30px 0;
  text-align: center;
}

.header_nav_item_ja {
  font-size: 1.6rem;
  font-family: tbudmincho-std, sans-serif;
}

@media screen and (min-width: 768px) {
  .nav_btn {
    display: none;
  }

  .header_nav {
    background-color: transparent;
    position: absolute;
    top: 50%;
    left: 60%;
    transform: translate(-50%, -50%);
    opacity: 1;
    padding-top: 0;
    height: auto;
  }

  .header_nav_list {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .header_nav_item {
    width: 155px;
    margin: 0;
    padding: 0;
    text-align: center;
    font-size: 2.4rem;
  }

  .header_nav_item_link {
    transition: all 0.2s ease;
    color: #fff;
  }

  /* タブレットではhoverを無効にする */
  @media (hover: hover) and (pointer: fine) {
    .header_nav_item_link:hover {
      opacity: 0.5;
    }

    .logo img {
      width: 120px;
    }
  }
}
</style>
