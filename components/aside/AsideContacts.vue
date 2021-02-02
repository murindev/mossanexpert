<template>
    <aside>
        <div class="aside">
            <div class="actions">
                <button class="requisite-btn">получить реквизиты</button>
                <button class="callback-btn">Перезвоните мне</button>
                <button class="question-btn">задать вопрос</button>
            </div>
        </div>

        <address>
            <strong>Контакты</strong>
            <span>Тел: <b>8  (495) 077 01 70</b></span>
            <span>E-mail: <a href="javascript:">info@mossanexpert.com</a></span>
            <span>WhatsApp:  <a href="javascript:">написать нам</a></span>


        </address>
        <div class="socials">
            <strong>Мы в соцсетях</strong>
            <div class="socials-list">

                <a href="javascript:">
                    <img src="../../assets/img/icon-vk.png" alt="vk"/>
                </a>


                <a href="javascript:">
                    <img src="../../assets/img/icon-facebook.png" alt="facebook"/>
                </a>


                <a href="javascript:">
                    <img src="../../assets/img/icon-instagramm.png" alt="instagram"/>
                </a>


                <a href="javascript:">
                    <img src="../../assets/img/icon-youtube.png" alt="youtube"/>
                </a>

            </div>
        </div>
        <div class="apps">
            <strong>Скачать наше приложение</strong>
            <div class="apps-list">
                <a href="javascript:">
                    <img src="../../assets/img/banner-app-store.png" alt="app-store"/>
                </a>
                <a href="javascript:">
                    <img src="../../assets/img/banner-google-play.png" alt="google-play"/>
                </a>
            </div>
        </div>


    </aside>
</template>

<script lang="ts">
    import { Component, Vue, namespace } from 'nuxt-property-decorator'


    @Component({
        components: {}
    })
    export default class AsideContacts extends Vue {
        public title: string = 'TITLE'
        public head(){
            return{
                title: this.title,
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'Home page description'
                    }
                ],
            }
        }
        mounted(){}
    }
</script>
