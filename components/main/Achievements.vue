<template>
    <section class="achievements">
        <div class="achievements-items">
            <div class="achievements-item" v-for="item in content">
                <div class="achievements-item-slogan">
                    <div class="achievements-item-title" v-html="item.title"></div>
                    <div class="achievements-item-subtitle" v-html="item.subtitle"></div>
                </div>
                <div class="achievements-item-text" v-html="item.text"></div>
            </div>
        </div>

    </section>
</template>

<script lang="ts">
    import { Component, Vue, namespace, Prop } from 'nuxt-property-decorator'

    //const Example = namespace('Example')

    @Component({
        components: {}
    })
    export default class Achievements extends Vue {
        @Prop() content!: Object[]


        mounted(){}
    }
</script>

