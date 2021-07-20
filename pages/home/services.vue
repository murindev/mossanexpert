<template>
  <div v-if="userAgent === 'pc'" class="container-row" v-bar>
    <div class="container-col">
      <div class="bordered">

<!--        <BlockText v-if="fetchedData.staticData.intro" :content="fetchedData.staticData.intro"/>-->

<!--        <AppForm v-if="fetchedData.staticData.app_form_text" :content="fetchedData.staticData"/>-->

<!--        <BlockText v-if="fetchedData.staticData.text" :content="fetchedData.staticData.text"/>-->

        <BlockCards
            :title="'Услуги'"
            :list="fetchedData.catalog"
            :path="storage"
            link="/home/"
            :sided="true"/>

        <CommerceForm/>


        <BlockClients :path="storage" :list="fetchedData.clients"/>


        <BlockReviews :path="storage" :list="fetchedData.reviews"/>

      </div>
    </div>
  </div>
  <div v-else class="container-row" >
    <div class="container-col">
      <div class="bordered">

<!--        <BlockText v-if="fetchedData.staticData.intro" :content="fetchedData.staticData.intro"/>-->

<!--        <AppForm v-if="fetchedData.staticData.app_form_text" :content="fetchedData.staticData"/>-->

<!--        <BlockText v-if="fetchedData.staticData.text" :content="fetchedData.staticData.text"/>-->

        <BlockCards
            :title="'Услуги'"
            :list="fetchedData.catalog"
            :path="storage"
            link="/home/"
            :sided="true"/>

        <CommerceForm/>


        <BlockClients :path="storage" :list="fetchedData.clients"/>


        <BlockReviews :path="storage" :list="fetchedData.reviews"/>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue, namespace} from 'nuxt-property-decorator'
import {IPage} from "~/types/page";
import BlockCards from "~/components/blocks/BlockCards.vue";
import BlockReviews from "~/components/blocks/BlockReviews.vue";
import BlockClients from "~/components/blocks/BlockClients.vue";
import CommerceForm from "~/components/forms/CommerceForm.vue";
import BlockBanners from "~/components/blocks/BlockBanners.vue";
import AppForm from "~/components/forms/AppForm.vue";
import BlockText from "~/components/blocks/BlockText.vue";

//const Example = namespace('Example')

@Component({
  components: {BlockCards, BlockReviews, BlockClients, CommerceForm, BlockBanners, AppForm, BlockText},
  async asyncData({params, $axios, env}) {
    const fetchedData = await $axios.post(process.env.serverUrl + '/front/home-services', {
      slug: params.id
    })
    return {
      fetchedData: fetchedData.data,
      storage: env.storage
    }
  }
})
export default class HomeServices extends Vue {
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
