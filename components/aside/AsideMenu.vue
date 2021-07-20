<template>
    <div class="menu">

        <div class="menu-top"  v-if="menu.length">
            <div class="menu-top-item" v-for="item in menu">
                <NuxtLink :to="makePath(item.slug)">
                    {{item.title}}
                    <span v-if="item.menu_desc">{{item.menu_desc}}</span>
                </NuxtLink>
            </div>
        </div>

    </div>

</template>

<script lang="ts">
    import { Component, Vue, namespace, Prop } from 'nuxt-property-decorator'
    import {IMenu, IMenuItem} from "~/types/page";



    @Component({
        components: {}
    })
    export default class AsideMenu extends Vue {

        @Prop() menu!: IMenuItem[]

        public makePath(link: string){
            if(this.$nuxt.$route.path.indexOf('/home') !== -1){
                return `/home/${link}`
            } else  {
                return link
            }
        }

        mounted(){

        }


    }
</script>
