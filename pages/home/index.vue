<template>
  <div v-if="userAgent === 'pc'" class="container-row" v-bar>
    <div class="container-col">
      <MainBanner
          :image="storage + fetchedData.staticData.image"
          :slogan="fetchedData.staticData.image_text"/>

      <Achievements :content="fetchedData.staticData.achievement_block"/>

      <BlockCatalog
          title="Популярные услуги"
          :list="fetchedData.catalog"
          :path="storage"
          link="/#/home/"/>

    </div>

  </div>

  <div v-else class="container-row">
    <div class="container-col">
      <MainBanner
          :image="storage + fetchedData.staticData.image"
          :slogan="fetchedData.staticData.image_text"/>

      <Achievements :content="fetchedData.staticData.achievement_block"/>

      <BlockCatalog
          title="Популярные услуги"
          :list="fetchedData.catalog"
          :path="storage"
          link="/#/home/"/>

    </div>

  </div>
</template>

<script lang="ts">
import {Component, Vue, namespace} from 'nuxt-property-decorator'
import {IPage} from "~/types/page";
import MainBanner from "~/components/main/MainBanner.vue";
import Achievements from "~/components/main/Achievements.vue";
import BlockCatalog from "~/components/blocks/BlockCatalog.vue";

//const Example = namespace('Example')

@Component({
  components: {BlockCatalog, Achievements, MainBanner},
  async asyncData(context) {
    const fetchedData = await context.$axios.post(process.env.serverUrl + '/front/page', {
      page_id: 'home',
      catalog: 'home',
    })

    return {
      fetchedData: fetchedData.data,
      storage: context.env.storage
    }

  }
})
export default class HomeIndex extends Vue {
  public fetchedData!: IPage

  public storage!: string
  public userAgent = '';
  public head() {
    return {
      title: this.fetchedData.staticData?.meta_title,
      meta: [
        {
          hid: 'description ',
          name: 'description',
          content: this.fetchedData.staticData?.meta_description
        },
        {
          hid: 'keywords ',
          name: 'keywords',
          content: this.fetchedData.staticData?.meta_keywords
        }
      ],
    }
  }

  async mounted() {
    await this.$nuxt.$emit('title', this.fetchedData.staticData?.title)
    await this.$nuxt.$emit('menu', this.fetchedData.menu)

    // @ts-ignore
    const deviceType = await this.$nuxt.context.$ua.deviceType()
    this.userAgent = await deviceType;

  }
}
</script>
