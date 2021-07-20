<template>
    <div class="lightBox" v-if="open" @click.stop="open = false">
        <div class="lightBox-frame" @click.stop="open = true" style="width: 400px">
            <a class="lightBox-close" href="javascript:" @click.stop="$nuxt.$emit('close')">&Cross;</a>
            <div class="lightBox-box">
                <h3 v-if="heading" v-html="heading"/>
                <p>
                    {{text}}
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, namespace } from 'nuxt-property-decorator'
    import {IMessage} from "~/types/page";

    @Component({
        components: {}
    })
    export default class Message extends Vue {
        public open = false;
        public heading:string = ''
        public text: string = ''

        mounted(){
            this.$nuxt.$on('close', () => {
                this.open = false
            })

            this.$nuxt.$on('message',(message: IMessage) => {
                this.open = true
                if(message.heading) this.heading = message.heading
                if(message.text) this.text = message.text


            })
        }
    }
</script>
