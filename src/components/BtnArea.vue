<script lang="ts" setup>
const btnLists: {
  id: number
  btn_icon: string
  btn_name: string
}[] = [
  {
    id: 1,
    btn_icon: 'message',
    btn_name: 'contact',
  },
  {
    id: 2,
    btn_icon: 'calendar-check',
    btn_name: 'reserve',
  },
]
</script>

<template>
  <div class="btn_area">
    <ul>
      <li v-for="btnList in btnLists" :key="btnList.id" class="btn">
        <a href="#" class="btn_link"><font-awesome-icon :icon="btnList.btn_icon" class="icon" /><span class="btn_name">{{
          btnList.btn_name
        }}</span></a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.btn_area {
  position: fixed;
  right: 0;
  bottom: 40px;
  z-index: 99;
}

.btn {
  margin-bottom: 10px;
}

.btn_link {
  display: block;
  padding: 7px;
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: var(--accent-color);
  border-radius: 5px;
}

/* .btn_link:nth-of-type(even) {
        background-color: var(--accent-color);
    } */

.icon {
  font-size: 2rem;
  color: #fff;
}

.btn_name {
  display: block;
  font-size: 1.4rem;
  font-family: mrs-eaves, serif;
  letter-spacing: 1px;
  color: #fff;
}

@media screen and (min-width: 768px) {
  .btn {
    margin-bottom: 20px;
  }

  .btn_link {
    padding: 10px;
  }

  .icon {
    font-size: 2.5rem;
  }

  .btn_name {
    font-size: 2rem;
  }
}
</style>
