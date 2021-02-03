<template>
    <footer>
        <!-- style="    margin-top: 70px; opacity:.6;"-->
        <div class="footer">
            <div class="footer-menu">
                <div class="footer-menu-container">
                    <div class="footer-menu-items">
                        <a href="javascript:" class="footer-menu-item active">
                            <span>Для <em> бизнеса</em></span>
                        </a>
                        <a href="javascript:" class="footer-menu-item">
                            <span>Для <em>дома</em></span>
                        </a>
                    </div>
                </div>

            </div>
            <div class="footer-links row">

                <div class="quickLinks">
                    <a href="javascript:" class="quickLinks-item" v-for="item in quickLinks">
                        <i class="quickLinks-item-icon">
                            <img :src="makeIcon(item.icon)" alt="icon"/>
                        </i>
                        <span class="quickLinks-item-title">{{item.title}}</span>
                    </a>
                </div>
            </div>
            <div class="footer-theme">
                <div class="footer-theme-container">
                    <div class="switcher-label">
                        <em>Включить светлую тему сайта</em><!--темную-->
                        <span class="switcher active"></span>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script lang="ts">
    import { Component, Vue, namespace } from 'nuxt-property-decorator'

    @Component({
        components: {}
    })
    export default class MainFooter extends Vue {

        makeIcon(icon: string){
            return require(`../../assets/img/links/${icon}`)
        }

        public quickLinks = [
            {
                title: 'Главная',
                link: '',
                icon: 'main.svg',
            }, {
                title: 'Дезинфекция',
                link: '',
                icon: 'desinfection.svg',
            }, {
                title: 'Дезинсекция',
                link: '',
                icon: 'desinsection.svg',
            }, {
                title: 'Дератизация',
                link: '',
                icon: 'deratization.svg',
            }, {
                title: 'Документы СЭС',
                link: '',
                icon: 'docs.svg',
            }, {
                title: 'Все услуги',
                link: '',
                icon: 'all-services.svg',
            }, {
                title: 'Контакты',
                link: '',
                icon: 'contacts.svg',
            },
        ]

        mounted(){}
    }
</script>
