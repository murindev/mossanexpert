<template>
    <div class="cards left-sided">

        <h2>{{title}}</h2>

        <section class="cards-row">

            <template v-for="item in list" :data="item" :slug="item.slug">

                <NuxtLink :to="link+ item.slug" class="cards-card">

                    <div class="cards-circle">
                        <div class="cards-img">
                            <img :src="makeIcon(item.icon)" alt="icon"/>
                        </div>
                    </div>

                    <span>{{item.title}}</span>

                </NuxtLink>


            </template>

        </section>
    </div>
</template>


<script lang="ts">
    import { Component, Vue, namespace, Prop } from 'nuxt-property-decorator'
    import {IBusiness} from "~/types/page";

    @Component({
        components: {}
    })
    export default class BlockCards extends Vue {

        @Prop() title!: string
        @Prop() list!: IBusiness[]
        @Prop() path!: string
        @Prop() link!: string

        public makeIcon(img: string){
            return `${this.path}/${img}`
        }
    }
</script>
