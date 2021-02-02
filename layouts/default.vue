<template>
    <div>
        <MainHeader/>
        <div class="container">
            <aside-menu/>
            <Nuxt/>
            <aside-contacts/>
        </div>
        <MainFooter/>
        <s-g/>
    </div>
</template>


<script lang="ts">
    import {Component, Vue} from 'nuxt-property-decorator'


    import SG from "~/components/_sg.vue";
    import MainHeader from "~/components/common/MainHeader.vue";
    import AsideContacts from "~/components/aside/AsideContacts.vue";
    import AsideMenu from "~/components/aside/AsideMenu.vue";
    import MainFooter from "~/components/common/MainFooter.vue";

    @Component({
        components: {
            SG, MainHeader, AsideContacts, AsideMenu, MainFooter
        }
    })
    export default class LayoutDefault extends Vue {

    }
</script>
