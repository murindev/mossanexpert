<template>
    <header>
        <div class="header">
            <div class="header-logo">
                <a href="javascript:">
                    <img src="../../assets/img/logo.png" alt="logotype"/>
                </a>
            </div>

            <div class="header-content row">
                <p>ГЛАВНАЯ</p>
            </div>

            <div class="header-personal">
                <div class="header-personal-greeting">
                    <p><span>ВХОД</span> В ЛИЧНЫЙ КАБИНЕТ</p>
                    Авторизуйтесь
                </div>

                <a class="header-personal-user" href="javascript:" rel="3">
                    <img src="../../assets/img/user.png" alt="user"/>
                </a>
            </div>
        </div>
    </header>
</template>

<script lang="ts">
    import { Component, Vue, namespace } from 'nuxt-property-decorator'

    //const Example = namespace('Example')

    @Component({
        components: {}
    })
    export default class MainHeader extends Vue {

        mounted(){}
    }
</script>
