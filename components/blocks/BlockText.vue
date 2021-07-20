<template>
    <div class="left-sided content" v-html="content"></div>
</template>

<script lang="ts">
    import {Component, Vue, namespace, Prop} from 'nuxt-property-decorator'

    @Component({
        components: {}
    })
    export default class BlockText extends Vue {
        @Prop() content!: string

        mounted() {
        }
    }
</script>
