<template>
    <footer>

        <div class="footer">

            <div class="footer-menu">
                <div class="footer-menu-container">
                    <div class="footer-menu-items">
                        <NuxtLink to="/" class="footer-menu-item" :class="activeBusiness()">
                            <span>Для <em> бизнеса</em></span>
                        </NuxtLink>
                        <NuxtLink to="/home" class="footer-menu-item" :class="activeHome()">
                            <span>Для <em>дома</em></span>
                        </NuxtLink>
                    </div>
                </div>
            </div>

            <div class="footer-links">

                <div class="quickLinks">
                    <div class="quickLinks-items" ref="linksParent">

                        <a href="javascript:" class="quickLinks-item menu-switcher" :class="{active: menuActive}"
                           @click="menuClick(true)">
                            <i class="quickLinks-item-icon">
                                <img :src="makeIcon('menu.svg')" alt="icon"/>
                            </i>
                            <span class="quickLinks-item-title">Меню</span>
                        </a>
                        <!--for-link-->
                        <NuxtLink v-if="menuSwitcher()" to="/" class="quickLinks-item for-link" :ref="`linksItem`">
                            <i class="quickLinks-item-icon">
                                <img :src="makeIcon('suitcase1.svg')" alt="icon"
                                     style="width: 33px; height: 33px;"/>
                            </i>
                            <span class="quickLinks-item-title">Для бизнеса</span>
                        </NuxtLink>

                        <NuxtLink v-else to="/home" class="quickLinks-item for-link" :ref="`linksItem`">
                            <i class="quickLinks-item-icon">
                                <img :src="makeIcon('house1.svg')" alt="icon"
                                     style="width: 35px; height: 35px;"/>
                            </i>
                            <span class="quickLinks-item-title">Для дома</span>
                        </NuxtLink>
                        <!---->


                        <NuxtLink to="/" class="quickLinks-item main-link" :ref="`linksItem`">
                            <i class="quickLinks-item-icon">
                                <img :src="makeIcon('main.svg')" alt="icon"/>
                            </i>
                            <span class="quickLinks-item-title">Главная</span>
                        </NuxtLink>


                        <NuxtLink v-for="item in menu" :to="makePath(item.slug)" class="quickLinks-item list"
                                  :ref="`linksItem`" :data="item">
                            <i class="quickLinks-item-icon">
                                <img :src="`${path}/${item.menu_icon}`" alt="icon"/>
                            </i>
                            <span class="quickLinks-item-title">{{item.title_short}}</span>
                        </NuxtLink>

                        <NuxtLink :to="makePath('services')" class="quickLinks-item" :ref="`linksItem`">
                            <i class="quickLinks-item-icon">
                                <img :src="makeIcon('all-services.svg')" alt="icon"/>
                            </i>
                            <span class="quickLinks-item-title">Все услуги</span>
                        </NuxtLink>

                        <a href="javascript:" class="quickLinks-item form-switcher" :class="{active: contactsActive}"
                           @click="contactsClick()">
                            <i class="quickLinks-item-icon">
                                <img :src="makeIcon('contacts.svg')" alt="icon"/>
                            </i>
                            <span class="quickLinks-item-title">Контакты</span>
                        </a>

                        <a href="javascript:" class="quickLinks-item personal-switcher" :ref="`linksItem`"  @click.stop="$nuxt.$emit('openLoginForm')">
                            <i class="quickLinks-item-icon">
                                <img :src="makeIcon('personal.svg')" alt="icon"/>
                            </i>
                            <span class="quickLinks-item-title">Кабинет</span>
                        </a>

                    </div>

                </div>

            </div>
            <div class="footer-theme" :class="{active: menuActive}">
                <div class="footer-theme-container">
                    <div class="switcher-label">
                        <em>Сменить тему сайта</em>
                        <span class="switcher" :class="switcher" @click="changeColorMode()"></span>
                    </div>
                </div>
            </div>
        </div>



    </footer>
</template>

<script lang="ts">
    import {Component, Vue, namespace, Watch, Prop} from 'nuxt-property-decorator'
    import {IMenu} from "~/types/page";

    @Component({
        components: {}
    })
    export default class MainFooter extends Vue {

        @Prop() menu!: IMenu

        public switcher = 'light'

        public async switchStyle() {
            if (this.switcher == 'dark') {
                await localStorage.setItem('theme', 'light')
                await this.$set(this.$data, 'switcher', 'light')
            } else {
                await localStorage.setItem('theme', 'dark')
                await this.$set(this.$data, 'switcher', 'dark')
            }
        }


        changeColorMode() {
            ;(this as any).$colorMode.preference =
                (this as any).$colorMode.value === 'light' ? 'dark' : 'light'
        }


        public path = process.env.storage

        public $refs!: {
            linksParent: HTMLElement,
            linksItem: HTMLElement,
        }

        public menuSwitcher() {
            return this.$nuxt.$route.path.indexOf('/home') !== -1
        }

        public makePath(link: string) {
            if (this.menuSwitcher()) {
                return `/home/${link}`
            } else {
                return link
            }
        }

        public activeClass(slug: string) {
            return this.$nuxt.$route.path.indexOf(slug) !== -1
        }

        public activeHome() {
            if (this.$route.path.indexOf('/home') !== -1) {
                return 'nuxt-link-exact-active'
            }
        }

        public activeBusiness() {
            if (this.$route.path.indexOf('/home') === -1) {
                return 'nuxt-link-exact-active'
            }
        }


        makeIcon(icon: string) {
            return require(`../../assets/img/links/${icon}`)
        }

        quickLinksWidth = 0

        updateQuickLinksWidth() {
            this.quickLinksWidth = window.innerWidth;
        }

        menuActive = false;
        contactsActive = false;

        public menuClick() {
            this.menuActive = !this.menuActive
            this.contactsActive = false;
            this.$nuxt.$emit('menu-active', this.menuActive)
        }

        public contactsClick() {
            this.contactsActive = !this.contactsActive
            this.menuActive = false;
            this.$nuxt.$emit('contacts-active', this.contactsActive)
        }

/*        async created() {
            console.log('llllllllllllllllllllllll');
            if (localStorage.getItem('theme') == 'dark') {
                this.switcher = 'dark'
                // @ts-ignore
                // document.getElementById('theme').setAttribute('href', this.dark)
            } else {
                this.switcher = 'light'
                // @ts-ignore
                // document.getElementById('theme').setAttribute('href', this.light)
            }
        }*/

        async mounted() {
            window.addEventListener('resize', this.updateQuickLinksWidth);



/*            console.log('eeeeeeeeeee');
            if (await localStorage.getItem('theme') == 'dark') {
                this.switcher = 'dark'
                // @ts-ignore
               await document.getElementById('theme').setAttribute('href', this.dark)
            } else {
                this.switcher = 'light'
                // @ts-ignore
               await document.getElementById('theme').setAttribute('href', this.light)
            }

            this.$nuxt.$on('routeChanged', () => {
                console.log('routeChangedEEE');
                if ( localStorage.getItem('theme') == 'dark') {
                    // this.switcher = 'dark'
                    // @ts-ignore
                     document.getElementById('theme').setAttribute('href', this.dark)
                } else {
                    // this.switcher = 'light'
                    // @ts-ignore
                     document.getElementById('theme').setAttribute('href', this.light)
                }
            })*/


            this.$nuxt.$on('routeChanged', () => {
                this.$set(this.$data, 'menuActive', false)
                this.$set(this.$data, 'contactsActive', false)
            })

        }

    }
</script>


<style>

</style>
