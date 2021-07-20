<template>
    <section class="catalog">
        <template v-for="item in content">
            <NuxtLink :to="alias + item.slug"  class="catalog-item">
                <div class="catalog-item-icon">
                    <div class="icon">
                        <img :src="makeIcon(item.icon_small)" alt="icon"/>
                    </div>

                </div>
                <div class="catalog-item-text">
                    <p>{{item.title}}</p>
                    <span> Реализовано {{item.cnt}}</span>
                </div>
            </NuxtLink>
        </template>



    </section>
</template>

<script lang="ts">
    import { Component, Vue, namespace, Prop } from 'nuxt-property-decorator'
    import {IBranch} from "~/types/page";

    //const Example = namespace('Example')

    @Component({
        components: {}
    })
    export default class BranchesRealised extends Vue {
        @Prop() content!: IBranch[]
        @Prop() alias!: string

        makeIcon(icon: string){
            return `${this.$nuxt.context.env.storage}${icon}`
        }

        mounted(){}
    }
</script>
