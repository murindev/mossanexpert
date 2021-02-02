<template>
    <div>
        <header>
            <div class="header">
                <div class="header-logo">
                    <a href="javascript:">
                        <img src="../assets/img/logo.png" alt="logotype"/>
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
                        <img src="../assets/img/user.png" alt="user"/>
                    </a>
                </div>
            </div>

        </header>

        <div class="container">
            <aside-menu/>
            <Nuxt/>
            <aside-contacts/>
        </div>

        <footer>
            footer
        </footer>

        <s-g/>
    </div>
</template>


<script lang="ts">
    import {Component, Vue} from 'nuxt-property-decorator'


    import SG from "~/components/_sg.vue";
    import AsideContacts from "~/components/aside/AsideContacts.vue";
    import AsideMenu from "~/components/aside/AsideMenu.vue";

    @Component({
        components: {
            SG, AsideContacts, AsideMenu
        }
    })
    export default class LayoutDefault extends Vue {

    }
</script>
