<template>
    <aside>

        <div class="aside">
            <div class="aside-row actions">

                <a target="_blank" :href="$nuxt.context.env.serverUrl+'/img/essential.pdf'" class="requisite-btn" >получить реквизиты</a>
                <!--@click.stop="$nuxt.$emit('openRequisitesForm')"-->
                <button class="callback-btn" @click.stop="$nuxt.$emit('openCallBackForm')">Перезвоните мне</button>
                <button class="question-btn" @click.stop="$nuxt.$emit('openQuestionForm')">задать вопрос</button>
            </div>

            <address class="aside-row">
                <strong>Контакты</strong>
                <span>Тел: <a href="tel:+74952928784"><b>8  (495) 077 01 70</b></a></span>
                <span>E-mail: <a href="mailto:info@mossanexpert.com">info@mossanexpert.com</a></span>
                <span>WhatsApp:  <a target="_blank" href="https://api.whatsapp.com/send?phone=76984841058">написать нам</a></span>
            </address>

            <div class="aside-row socials">
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
            <div class="aside-row apps">
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
        </div>





    </aside>
</template>

<script lang="ts">
    import { Component, Vue, namespace } from 'nuxt-property-decorator'



    @Component({
        components: {}
    })
    export default class AsideContacts extends Vue {



    }
</script>
>
