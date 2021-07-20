<template>
    <section class="catalog">

        <a href="javascript:"  class="catalog-item" v-for="item in content">
            <div class="catalog-item-icon">
                <div class="icon">
                    <img :src="makeIcon(item.icon)" alt="icon"/>
                </div>

            </div>
            <div class="catalog-item-text">
                <p v-html="item.title"></p>
                <span v-html="item.cnt"></span>
            </div>
        </a>

    </section>
</template>

<script lang="ts">
    import { Component, Vue, namespace, Prop } from 'nuxt-property-decorator'

    //const Example = namespace('Example')

    @Component({
        components: {}
    })
    export default class Catalog extends Vue {
        @Prop() content!: object[]

        makeIcon(icon: string){
            return require(`../../assets/img/icons/${icon}`)
        }

        mounted(){}
    }
</script>
