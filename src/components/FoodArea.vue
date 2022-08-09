<script lang="ts" setup>
const foodLists: {id: number, section_name: string, title: string, desc: string, img_src: string, menuItems: string[]}[] = [
    {
        id: 1,
        section_name: 'bbq_section',
        title: 'BBQ',
        desc:'「Green Castle」ご利用のお客様は、宿泊プランにバーベキューが含まれております。地元の新鮮な食材を用いた本格的なバーベキューが手ぶらで楽しめます。',
        img_src: require('../assets/img/bbq_img.jpg'),
        menuItems:['スペアリブ','赤エビ・ホタテ','骨付きソーセージ','ハワイアンバーベキューチキン','グリル野菜・トウモロコシ・じゃがいも']
    },
    {
        id: 2,
        section_name: 'breakfast_section',
        title: 'BREAKFAST',
        desc:'「Green Castle」ご利用のお客様は、宿泊プランに朝食のサービスが含まれております。こだわりのベーグルサンドやホットサンドなど一日の始まりにぴったりなワンプレートをご用意しております。',
        img_src: require('../assets/img/breakfast_img.jpg'),
        menuItems:['ホットサンド','生ハムとクリームチーズのベーグルサンド','フレンチトースト','ハムチーズオムレツ','スクランブルエッグプレート',]
    }
];
</script>

<template>
    <div class="title_area">
        <h1 class="page_title_en">FOOD</h1>
        <div class="page_title_ja">フード</div>
    </div>
    <section class="food_section" :class="foodList.section_name" v-for='foodList in foodLists' :key='foodList.id'>
        <div class="pc_flex">
            <div class="section_text">
                <h2>{{ foodList.title}}</h2>
                <p>{{ foodList.desc }}</p>
            </div>
            <div class="food_img"><img :src="foodList.img_src" alt=""></div>
        </div>
        <div class="food_menu">
        <h3>MENU</h3>
        <ul>
            <li class="menu_item" v-for='menuItem in foodList.menuItems' :key="menuItem"> {{menuItem }}</li>
        </ul>
        </div>
    </section>
</template>

<style scoped>
h2 {
    text-align: center;
    font-size: 3rem;
    line-height: 2;
    text-decoration: underline;
}

h3 {
    font-size: 1.8rem;
    text-align: center;
    line-height: 2;
}

p {
    line-height: 2;
    font-size: 1.4rem;
    text-align: center;
}

ul {
    margin: 0 20px;
    border: 2px solid var(--main-color);
}

ul li::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--main-color);
    display: inline-block;
    margin: 0 8px 2px 0;
}

.title_area {
    background-image: url(../assets/img/title_bg_food.jpg);
    background-size:cover;
    background-position: center;
    margin-bottom: var(--common-space);
}

.page_title {
    font-size: 40px;
    line-height: 200px;
}

.section_text {
    padding: 0 40px 20px;
}

.food_menu {
    padding: 20px 0;
}

.menu_item {
    font-size: 1.6rem;
    padding: 10px 0 10px 10.666%; /*40/375*/
}

.food_section {
    margin-bottom: var(--common-space);
}

@media screen and (min-width:768px) {
    h2 {
        font-size: 4rem;
    }

    h3 {
        font-size: 2.4rem;
    }

    p {
        font-size: 1.6rem;
        text-align: justify;
    }

    .title_area {
        background-image: url(../assets/img/title_bg_food_pc.jpg);
        background-size:cover;
        background-position: center;
        margin-bottom: var(--common-space);
    }

    .food_section{
        max-width: 1020px;
        margin: 0 auto;
        margin-bottom: var(--common-space-pc);
    }

    .pc_flex {
        display: flex;
        align-items:flex-start;
    }

    .breakfast_section .food_img {
        order: 1;
    }

    .food_img {
        width:61.764%;
    }

    .section_text {
        width: 38.235%;
    }

    .breakfast_section .section_text {
        order: 2;
    }

    ul {
        margin: 0;
    }

    .food_menu {
        padding: 40px 0;
    }

    .menu_item {
        font-size: 2rem;
        padding: 20px 0 20px 10.666%; /*40/375*/
    }
}
</style>