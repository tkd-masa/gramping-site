<script lang="ts" setup>

const tentLists:{id: number, section_name: string, title: string, desc: string, img_src: string, capacity: string, facility: string, bed: string, price: string}[] = [
    {
        id: 1,
        section_name:'tent1',
        title:'JUNIOR DOME TENT',
        desc:'こちらのテントは2名様から4名様までご利用いただけます。カップルでのご利用や少数グループでのご利用におすすめです。アメニティも充実しておりますので快適にお過ごしいただけます。',
        img_src:require('../assets/img/tent_img.jpg'),
        capacity:'2名～4名',
        facility:'テーブル、ベッド、ソファ、冷蔵庫、ケトル、冷暖房エアコン、延長コード、歯磨きセット、wi-fi、BBQセット',
        bed:'セミダブル2台',
        price:'1人当たり1泊¥14,000～',
    },
    {
        id: 2,
        section_name:'tent2',
        title:'TWIN DOME TENT',
        desc:'こちらのテントは2名様から6名様までご利用いただけます。少人数グループでも広々とした部屋でゆったり過ごしたいお客様にもおすすめです。アメニティも充実しておりますので快適にお過ごしいただけます。',
        img_src:require('../assets/img/tent_img2.jpg'),
        capacity:'2名～6名',
        facility:'テーブル、ベッド、ソファ、冷蔵庫、ケトル、冷暖房エアコン、延長コード、歯磨きセット、wi-fi、BBQセット',
        bed:'セミダブル4台',
        price:'1人当たり1泊¥17,000～'
    },
    {
        id: 3,
        section_name:'tent3',
        title:'LUXURY DOME TENT',
        desc:'こちらのテントは2名様から8名様までご利用いただけます。大勢のグループで、にぎやかに過ごしたいお客様におすすめです。アメニティも充実しておりますので快適にお過ごしいただけます。',
        img_src:require('../assets/img/tent_img3.jpg'),
        capacity:'2名～8名',
        facility:'テーブル、ベッド、ソファ、冷蔵庫、ケトル、冷暖房エアコン、延長コード、歯磨きセット、wi-fi、BBQセット',
        bed:'ダブルベッド4台',
        price:'1人当たり1泊¥20,000～'
    },
];
</script>

<template>
    <div class="title_area">
        <h1 class="page_title_en">TENT</h1>
        <div class="page_title_ja">テント</div>
    </div>
    <section class="tent_section" :class="tentList.section_name" v-for='tentList in tentLists' :key='tentList.id'>
        <div class="pc_flex">
            <div class="section_text">
                <h2>{{ tentList.title}}</h2>
                <p>{{ tentList.desc }}</p>
            </div>
            <div class="tent_img"><img :src="tentList.img_src" alt=""></div>
        </div>
        <dl class="tent_detail">
            <div>
                <dt>定員</dt>
                <dd>{{ tentList.capacity }}</dd>
            </div>
            <div>
                <dt>設備</dt>
                <dd>{{ tentList.facility }}</dd>
            </div>
            <div>
                <dt>ベッド</dt>
                <dd>{{ tentList.bed }}</dd>
            </div>
            <div>
                <dt>料金</dt>
                <dd>{{ tentList.price }}</dd>
            </div>
        </dl>
    </section>
</template>

<style scoped>
h2 {
    text-align: center;
    font-size: 3rem;
    text-decoration: underline;
}

p {
    line-height: 2;
    font-size: 1.4rem;
    text-align: center;
}

.title_area {
    background-image: url(../assets/img/title_bg_tent.jpg);
    background-size: cover;
    background-position: center;
}

.tent_section {
    margin-bottom: var(--common-space);
}

.section_text {
    padding: 0 40px 20px;
}

.tent_detail div {
    display: flex;
    align-items: center;
    border-bottom: 2px solid #000;
    margin: 0 20px;
}

dl dt, dl dd {
    font-size: 1.6rem;
    padding: 20px 0;
}

dl dt {
    width: 30%;
}

dl dd {
    width: 70%;
}

@media screen and (min-width:768px) {
    h2 {
        text-align: center;
        font-size: 4rem;
        padding-bottom: 20px;
    }

    p {
        font-size: 1.6rem;
        text-align: justify;
    }

    .title_area {
        background-image: url(../assets/img/title_bg_tent_pc.jpg);
    }

    .tent_section {
        max-width: 1020px;
        margin: 0 auto var(--common-space-pc);
    }

    .pc_flex {
        display: flex;
        align-items: center;
    }

    .tent_img {
        width: 62.745%;
    }

    .section_text {
        width: 38.235%;
    }

    .tent1 .pc_flex .tent_img,.tent3 .pc_flex {
        order: 1;
    }

    .tent1 .pc_flex .section_text,.tent3 .pc_flex .section_text{
        order: 2;
    }

    .tent_detail div {
        margin: 0;
    }
    
    dl dt, dl dd {
    display: inline-block;
    font-size: 1.8rem;
    padding: 30px 0;
    }

}
</style>
