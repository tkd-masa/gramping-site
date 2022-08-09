<script lang="ts" setup>
import {ref} from 'vue';
    
let showAnswer = ref<number>(0);
const faqLists:{id: number, question: String, answer: string}[] = [
    {
        id:1,
        question:'宿泊予約をキャンセルした場合、キャンセル料はかかりますか？',
        answer:'5日前から30%、3日前から50%、当日は100%頂戴いたします。'
    },
    {
        id:2,
        question:'チェックイン、チェックアウトは何時から行えますか？',
        answer:'チェックインは15時から、チェックアウトは11時までとなります。'
    },
    {
        id:3,
        question:'お支払い方法について教えてください。',
        answer:'現金、または各種クレジットカードでのお支払いが可能です。'
    },
    {
        id:4,
        question:'インターネットの使用は可能ですか？',
        answer:'各テントに無料のwi-fi環境を完備しております。'
    },
    {
        id:5,
        question:'お風呂・トイレはついてますか？',
        answer:'テント内にはございませんので共有のトイレ、大浴場をご利用ください。'
    },
    {
        id:6,
        question:'ペットを連れていくことは可能ですか？',
        answer:'ペットの受け入れはお断りしています。申し訳ございません。'
    },
    {
        id:7,
        question:'駐車場はありますか？',
        answer:'Green Castleご利用のお客様専用の無料駐車場がございます。'
    },
    {
        id:8,
        question:'近隣にスーパーまたはコンビニはありますか？',
        answer:'車で5分程度のところにローソンがございます。'
    },
];

//methods
//クリックイベントで値が変わる変数はrefを使用しないと機能しない
const toggle = (id:number) => {
    if(showAnswer.value == id){
        showAnswer.value = 0;
    }else{
        showAnswer.value = id;
    }
}
const beforeEnter = (el:HTMLElement) => {
    el.style.height = '0';
}
const enter = (el:HTMLElement) => {
    el.style.height = el.scrollHeight + 'px';
}
const beforeLeave = (el:HTMLElement) => {
    el.style.height = el.scrollHeight + 'px';
}
const leave = (el:HTMLElement) => {
    el.style.height = '0';
}
</script>

<template>
    <div class="title_area">
        <h1 class="page_title_en">FAQ</h1>
        <div class="page_title_ja">よくある質問</div>
    </div>
    <div class="inner">
        <div class="accordion" v-for='faqList in faqLists' :key='faqList.id'>
            <a class="toggle" @click="toggle(faqList.id)">
                <p class="question">{{ faqList.question }}</p>
                <transition name="rotation">
                    <i class="fas fa-chevron-down" v-if="showAnswer != faqList.id"></i>
                </transition>
                <transition name="rotation">
                    <i class="fas fa-chevron-up" v-if="showAnswer == faqList.id"></i>
                </transition>
            </a>
            <transition name="accordion" @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
            <div class="accordion-body" v-if="showAnswer == faqList.id">
                <p class="answer">{{ faqList.answer }}</p>
            </div>
            </transition>
        </div>
    </div>
</template>

<style scoped>
p {
    font-size: 14px;
}

.inner {
    margin-bottom: var(--common-space);
}

.title_area {
    background-image: url(../assets/img/title_bg_faq.jpg);
    background-size: cover;
    background-position: center;
}

.accordion {
    margin-bottom: 25px;
    background-color: #fff;
}

.question {
    position: relative;
    padding: 15px 25px;
}

.question::before,.answer::before {
    position:absolute;
    content: 'Q';
    font-size: 18px;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
}

.answer {
    padding: 15px 0 15px 25px;
    position: relative;
}

.answer::before {
    content: 'A';
}

.accordion {
    color: #1a1c1d;
    border-left: 10px solid var(--accent-color);
}

.toggle {
    position: relative;
    color: #1a1c1d;
    display: block;
    cursor: pointer;
}

.toggle i {
    position: absolute;
    right: 10px;
    top: 30%;
    font-size: 1.8rem;
    transition: 0.3s ease-in-out;
}

.accordion-body {
    overflow: hidden;
    transition: .3s ease-in-out
}

.rotation-enter-from, .rotation-leave-to {
    transform: rotateX(180deg);
}

@media screen and (min-width:768px) {
    p {
        font-size: 16px;
    }

    .inner {
    margin-bottom: var(--common-space-pc);
    }

    .title_area {
        background-image: url(../assets/img/title_bg_faq_pc.jpg);
        background-size: cover;
        background-position: center;
    }

    .accordion {
        max-width: 1020px;
        margin: 0 auto 25px; 
    }

    .question {
        position: relative;
        padding: 25px;
    }

    .toggle i {
        font-size: 2.4rem;
    }
}
</style>