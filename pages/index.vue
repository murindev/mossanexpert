<template>

    <div v-if="userAgent === 'pc'" class="container-row"  v-bar>

        <div class="container-col">

            <MainBanner :image="storage + fetchedData.staticData.image"  :slogan="fetchedData.staticData.image_text"/>

            <achievements :content="fetchedData.staticData.achievement_block"/>

            <BranchesRealised :content="fetchedData.branches" alias="/branches/"/>

        </div>
    </div>

    <div v-else class="container-row">

        <div class="container-col">

            <MainBanner
                    :image="storage + fetchedData.staticData.image"
                    :slogan="fetchedData.staticData.image_text"/>

            <achievements :content="fetchedData.staticData.achievement_block"/>

<!--            <BranchesRealised :content="fetchedData.branches" alias="/branches/"/>-->

            <BlockCatalog
                    title="Для кого мы работаем"
                    :list="fetchedData.branches"
                    :path="storage"
                    link="/#/branches/"/>

        </div>
    </div>

</template>

<script lang="ts">
    import {Component, Vue} from 'nuxt-property-decorator'


    import SG from "~/components/_sg.vue";
    import MainBanner from "~/components/main/MainBanner.vue";
    import Achievements from "~/components/main/Achievements.vue";
    import Catalog from "~/components/main/Catalog.vue";
    import WarrantyText from "~/components/blocks/BlockText.vue";
    import {IPage} from "~/types/page";
    import BranchesRealised from "~/components/main/BranchesRealised.vue";

    // const jq = require('jquery')


    @Component({
        components: {
            BranchesRealised,
            SG, MainBanner, Achievements, Catalog, WarrantyText
        },
        async asyncData({$axios, params, payload, route, env}) {

            const fetchedData = await $axios.$post(env.serverUrl + '/api/page'
                // {
                //     catalog: 'forBusiness',
                //     page_id: 'business',
                // }
                /*                , {
                                    headers: {
                                        'Accept': 'text/plain',
                                        'Content-Type': 'text/plain',
                                        'Origin': 'http://www.nuxt.mossanexpert.com',
                                    }
                                }*/
                , {
                    catalog: 'forBusiness',
                    page_id: 'business',
                }
            )

            return {
                fetchedData: await fetchedData,
                storage: env.storage
            }

        }
    })
    export default class Index extends Vue {
        public userAgent = '';

        async timeweb() {
            let hh = await this.$axios.get(process.env.serverUrl + '/header'
                /*                , {
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json',
                                }
                            }*/
            )

            console.log('timeweb', hh);
        }


        async other() {
            let hh = await this.$axios.get('http://194.87.232.56/test')

            console.log('other', hh);
        }


        public fetchedData!: IPage

        public storage!: string

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
