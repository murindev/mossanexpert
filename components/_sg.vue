<template>
    <div>
        <label class="debug-it" @click="switcher = !switcher"/>
        <div class="tpl" v-if="switcher"></div>
        <div class="debug-in" v-if="switcher">
            <div>
                <div>

                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>

                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>

                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from 'vue-property-decorator';

    @Component
    export default class SG extends Vue {
        public switcher: boolean = true;

        @Watch('switcher') onSwitcherChange(v:boolean){
            document.body.className = v ? '' : 'active'
        }
    }
</script>
