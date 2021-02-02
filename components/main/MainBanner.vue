<template>
    <section class="banner">
        <div class="banner-content">
            <img src="../../assets/img/banner.png" alt="banner"/>
        </div>
    </section>
</template>

<script lang="ts">
    import { Component, Vue, namespace } from 'nuxt-property-decorator'

    //const Example = namespace('Example')

    @Component({
        components: {}
    })
    export default class MainBanner extends Vue {

    }
</script>
