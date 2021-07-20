<template>
    <div>

        <h1>BranchesIndex</h1>



    </div>
</template>

<script lang="ts">
    import { Component, Vue, namespace } from 'nuxt-property-decorator'
    import {IPage} from "~/types/page";


    //const Example = namespace('Example')

    @Component({
        components: {},
       async asyncData({params, $axios, env}){
            const fetchedData = await $axios.post(process.env.serverUrl +'/front/branch',{
                slug: params.id
            })
            return {
                fetchedData: fetchedData.data,
                // storage: context.env.storage
            }
        }
    })
    export default class BranchesIndex extends Vue {

        public fetchedData!:IPage

        public title: string = 'BranchesIndex'
        public head(){
            return{
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
       async mounted(){
            await  this.$nuxt.$emit('menu', this.fetchedData.menu)
        }
    }
</script>
