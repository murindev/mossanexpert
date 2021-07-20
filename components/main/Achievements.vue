<template>
    <section class="achievements">
        <div class="achievements-items">

            <div class="achievements-item" >
                <div class="achievements-item-slogan">
                    <div class="achievements-item-title" v-html="content.title_first"></div>
                    <div class="achievements-item-subtitle" v-html="content.subtitle_first"></div>
                </div>
                <div class="achievements-item-text" v-html="content.text_first"></div>
            </div>

            <div class="achievements-item" >
                <div class="achievements-item-slogan">
                    <div class="achievements-item-title" v-html="content.title_second"></div>
                    <div class="achievements-item-subtitle" v-html="content.subtitle_second"></div>
                </div>
                <div class="achievements-item-text" v-html="content.text_second"></div>
            </div>

            <div class="achievements-item" >
                <div class="achievements-item-slogan">
                    <div class="achievements-item-title" v-html="content.title_third"></div>
                    <div class="achievements-item-subtitle" v-html="content.subtitle_third"></div>
                </div>
                <div class="achievements-item-text" v-html="content.text_third"></div>
            </div>

        </div>
    </section>
</template>

<script lang="ts">
    import { Component, Vue, namespace, Prop } from 'nuxt-property-decorator'
    import {IAchievement} from "~/types/page";

    @Component({
        components: {}
    })
    export default class Achievements extends Vue {
        @Prop() content!: IAchievement
    }
</script>

