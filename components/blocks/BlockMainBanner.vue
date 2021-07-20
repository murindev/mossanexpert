<template>

  <section class="bannerTop left-sided">
    <div class="bannerTop-content">
      <img v-if="image" :src="image" alt="banner"/>
      <p v-if="slogan" v-html="formatHTML(slogan)"></p>
    </div>
  </section>

</template>

<script lang="ts">
    import { Component, Vue, namespace, Prop } from 'nuxt-property-decorator'

    @Component({
        components: {}
    })
    export default class BlockMainBanner extends Vue {

      @Prop() slogan!: string
      @Prop() image!: string

      public storage?: string

      formatHTML(str:string){
        return str.replace('\n','<br>');
      }


        mounted(){

        }
    }
</script>
