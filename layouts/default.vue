<template>
    <div>

        <MainHeader/>
        <div :class="'container' + classes">
            <aside-menu :menu="menuLeft"/>

            <Nuxt/>

            <aside-contacts/>
        </div>
        <MainFooter :menu="menuBottom"/>
        <Message/>

    </div>
</template>


<script lang="ts">
    import {Component, Vue} from 'nuxt-property-decorator'


    import SG from "~/components/_sg.vue";
    import MainHeader from "~/components/common/MainHeader.vue";
    import AsideContacts from "~/components/aside/AsideContacts.vue";
    import AsideMenu from "~/components/aside/AsideMenu.vue";
    import MainFooter from "~/components/common/MainFooter.vue";
    import LightBox from "~/components/common/Message.vue";
    import Message from "~/components/common/Message.vue";
    import {IMenu, IMenuItem} from "~/types/page";


    @Component({
        components: {
            Message,
            SG, MainHeader, AsideContacts, AsideMenu, MainFooter,
        },
    })
    export default class LayoutDefault extends Vue {

        public menuLeft = ''
        public menuBottom = ''

        public classes = ''




        async mounted() {
            await this.$nuxt.$on('menu', (menu: IMenu) => {
                if (menu && menu.hasOwnProperty('left')) {
                    this.$set(this.$data, 'menuLeft', menu.left)
                }
                if (menu && menu.hasOwnProperty('bottom')) {
                    this.$set(this.$data, 'menuBottom', menu.bottom)
                }
            })

            await this.$nuxt.$on('menu-active', (a: boolean) => {
                this.$set(this.$data, 'classes', a ? ' menu-active' : '')
            })
            await this.$nuxt.$on('contacts-active', (a: boolean) => {
                this.$set(this.$data, 'classes', a ? ' contacts-active' : '')
            })
            await this.$nuxt.$on('routeChanged', () => {
                this.$set(this.$data, 'classes', '')
            })


        }

    }
</script>
