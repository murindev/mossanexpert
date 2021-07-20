<template>
    <section class="banners left-sided">
        <div v-if="long" class="banners-banner long" :style="background(long.img)">
            <div class="banners-content" :class="{dark: long.color}">
                <span v-if="long.title" v-html="$htmlTags(long.title)"/>
                <em v-if="long.text" v-html="$htmlTags(long.text)"/>
            </div>
        </div>
        <div v-if="short" class="banners-banner short" :style="background(short.img)">
            <div class="banners-content" :class="{dark: short.color}">
                <span v-if="short.title" v-html="$htmlTags(short.title)"/>
                <em v-if="short.text" v-html="$htmlTags(short.text)"/>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import { Component, Vue, namespace, Prop } from 'nuxt-property-decorator'
    import {IBanner} from "~/types/page";

    @Component({
        components: {}
    })
    export default class BlockBanners extends Vue {
        @Prop() path!: string
        @Prop() long!: IBanner
        @Prop() short!: IBanner

        background(img: string){
            return `background: url('${this.path+img}') no-repeat left 0px;`
        }
        mounted(){

        }
    }
</script>
