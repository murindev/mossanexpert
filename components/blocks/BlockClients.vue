<template>
    <section class="carousel left-sided">
        <div class="carousel-title"><h2>НАШИ КЛИЕНТЫ</h2></div>
        <div class="carousel-row">
            <carousel :perPageCustom="[[768, 3], [1024, 4], [1200, 5]]" :navigationEnabled="true">
                <slide v-for="item in list" :data="item">
                    <a href="javascript:" class="carousel-item" style="text-align: center;">
                        <i class="carousel-item-icon" :style="makeBg(item.icon)"></i>
                        <span class="carousel-item-title">{{item.title}}</span>
                    </a>
                </slide>
            </carousel>

        </div>
    </section>
</template>

<script lang="ts">
    import { Component, Vue, namespace, Prop } from 'nuxt-property-decorator'
    import {IClient} from "~/types/page";

    @Component({
        components: {}
    })
    export default class BlockClients extends Vue {
        @Prop() list!: IClient[]
        @Prop() path!:string

        public makeBg(img:string){
            return 'background: url('+this.path+img+') no-repeat; background-size: cover; width: 100%;  height: 100%';

        }

        public makeIcon(icon:string){
            return `${this.path}/${icon}`
        }
    }
</script>
