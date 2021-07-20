<template>
    <section class="carousel left-sided">
        <div class="carousel-title"><h2>ОТЗЫВЫ</h2></div>
        <div class="carousel-row">

            <carousel :perPageCustom="[[768, 3], [1024, 4], [1200, 5]]" :navigationEnabled="true">
                <slide v-for="item in list" :key="item.id">
                    <a target="_blank" :href="`${path}/${item.filename}`" class="carousel-item pdf" style="text-align: center;">
                        <i class="carousel-item-icon">
                            <img :src="makeIcon(item.icon)" alt="icon"/>
                        </i>
                    </a>
                </slide>

            </carousel>

            <div class="carousel-btn">
                <NuxtLink to="/reviews" class="btn requisite-btn">
                    Смотреть все отзывы
                </NuxtLink>

            </div>

        </div>
    </section>
</template>

<script lang="ts">
    import { Component, Vue, namespace, Prop } from 'nuxt-property-decorator'
    import {IClient} from "~/types/page";

    @Component({
        components: {}
    })
    export default class BlockReviews extends Vue {
        @Prop() list!: IClient[]
        @Prop() path!:string

        public makeIcon(icon:string){
            return `${this.path}/${icon}`
        }
    }
</script>
