<template>
    <div class="title_area">
        <h1 class="page_title_en">404</h1>
        <div class="page_title_ja">PAGE NOT FOUND</div>
    </div>
    <div class="msg_area">
        <p class="msg_heading">ご指定のページが見つかりませんでした。</p>
        <p class="msg">入力したURLが間違っている可能性がございます。<br>お手数をおかけしますが、上部のメニューより、ページをお探しください。</p>
        <router-link to="/HOME" class="top_link_btn"><div class="link_btn_item">Green Castleトップページ</div></router-link>
    </div>
</template>

<style scoped>
p {
    line-height: 2;
    font-size: 1.4rem;
    text-align: center;
}
.title_area {
    background-image: url(../assets/img/title_bg_404.jpg);
    background-size:cover;
    background-position: center;
    margin-bottom: var(--common-space);
}

.msg_area {
    text-align: center;
    margin-bottom: var(--common-space);
    padding: 0 20px;
}
.msg_heading {
    font-size: 1.8rem;
    font-weight: bold;
    line-height: 2;
    margin-bottom: 10px;
}

.msg {
    margin-bottom: 36px;
}

.top_link_btn {
    display: inline-block;
    margin: 0 auto;
    padding: 12px 24px;
    background-color: var(--main-color);
    border-radius: 5px;
    color: #fff;
    font-size: 1.4rem;
}

@media screen and (min-width:768px) {
    p {
        font-size: 1.6rem;
    }

    .title_area {
        background-image: url(../assets/img/title_bg_404_pc.jpg);
        background-position: center bottom;
    }

    .msg_area {
        text-align: center;
        margin-bottom: var(--common-space-pc);
    }

    .msg_heading {
        font-size: 2.4rem;
    }

    .top_link_btn {
        transition: all .3s ease;
        font-size: 1.6rem;
    }

    @media (hover: hover) and (pointer: fine) {
        .top_link_btn:hover {
            background-color: var(--accent-color);
        }
    }
}
</style>