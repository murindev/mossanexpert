<template>
    <header>

        <div class="header">


            <div class="header-logo">
                <NuxtLink to="/">
                    <img :src="require('../../assets/img/logos/logo.svg')" alt="logotype"/>
                </NuxtLink>
            </div>

            <div class="header-content">
                <h1>{{heading}}</h1>
              <a href="tel:+74952928784" class="header-phone"></a>
            </div>

            <div class="header-personal">
                <div class="header-personal-greeting">
                    <p>
                      <span @click.stop="$nuxt.$emit('openLoginForm')">ВХОД</span>
                       В ЛИЧНЫЙ КАБИНЕТ</p>
                    Авторизуйтесь
                </div>

                <a class="header-personal-user" href="javascript:" rel="3" @click.stop="$nuxt.$emit('openLoginForm')">
                    <img src="../../assets/img/user.png" alt="user"/>
                </a>
            </div>

        </div>
      <LoginForm/>
      <RequisitesForm/>
      <CallBackForm/>
      <QuestionForm/>
      <WatsAppForm/>
    </header>
</template>

<script lang="ts">

import RequisitesForm from "~/components/forms/RequisitesForm.vue";
import CallBackForm from "~/components/forms/CallBackForm.vue";
import QuestionForm from "~/components/forms/QuestionForm.vue";
import WatsAppForm from "~/components/forms/WatsAppForm.vue";


    import { Component, Vue, namespace } from 'nuxt-property-decorator'

    //const Example = namespace('Example')

    @Component({
        components: {WatsAppForm, QuestionForm, CallBackForm, RequisitesForm}
    })
    export default class MainHeader extends Vue {
        public heading:string = 'Для бизнеса';

        mounted(){
            this.$nuxt.$on('title',(title: string) => {
                this.heading = title
            })

        }
    }
</script>
