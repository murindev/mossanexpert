<template>
  <div v-if="userAgent === 'pc'" class="container-row" v-bar>
    <div class="container-col">
      <div class="bordered">

        <div class="squareBlocks  left-sided">
          <section class="squareBlocks-row">
            <a target="_blank" :href="`${storage}/${item.filename}`" class="squareBlocks-card"
               v-for="item in fetchedData.staticData">
              <div class="squareBlocks-img">
                <img :src="`${storage}/${item.icon}`"/>
              </div>
            </a>
          </section>
        </div>


        <BlockClients :path="storage" :list="fetchedData.clients"/>


      </div>
    </div>
  </div>
  <div v-else class="container-row">
    <div class="container-col">
      <div class="bordered">

        <div class="squareBlocks  left-sided">
          <section class="squareBlocks-row">
            <a target="_blank" :href="`${storage}/${item.filename}`" class="squareBlocks-card"
               v-for="item in fetchedData.staticData">
              <div class="squareBlocks-img">
                <img :src="`${storage}/${item.icon}`"/>
              </div>
            </a>
          </section>
        </div>


        <BlockClients :path="storage" :list="fetchedData.clients"/>


      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue, namespace} from 'nuxt-property-decorator'
import {IPage} from "~/types/page";
import BlockReviews from "~/components/blocks/BlockReviews.vue";
import BlockClients from "~/components/blocks/BlockClients.vue";


@Component({
  components: {BlockClients, BlockReviews},
  async asyncData({params, $axios, env}) {
    const fetchedData = await $axios.post(process.env.serverUrl + '/front/reviews')
    return {
      fetchedData: fetchedData.data,
      storage: env.storage
    }
  }
})
export default class ReviewsIndex extends Vue {

  public fetchedData!: IPage
  public storage!: string
  public userAgent = '';
  public title: string = 'Отзывы'

  public head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Home page description'
        }
      ],
    }
  }

  async mounted() {
    await this.$nuxt.$emit('title', this.title)
    await this.$nuxt.$emit('menu', this.fetchedData.menu)

    // @ts-ignore
    const deviceType = await this.$nuxt.context.$ua.deviceType()
    this.userAgent = await deviceType;

  }
}
</script>
