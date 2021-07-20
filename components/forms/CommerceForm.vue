<template>
    <section class="commerceForm left-sided">
        <div class="commerceForm-title"><h2>ПОЛУЧИТЬ КОММЕРЧЕСКОЕ ПРЕДЛОЖЕНИЕ</h2></div>
        <div class="commerceForm-row">
            <div class="commerceForm-text">
                <em>
                    Присылайте нам ваше техническое задание и мы вышлем вам коммерческое предложение. Также вы можете пригласить нашу компанию на тендер.
                </em>
                <hr/>
            </div>
            <div class="commerceForm-form">
                <form action="javascript:">

                    <fieldset class="rf">
                            <input class="commerceForm-name" type="text" placeholder="Введите ваше имя"/>
                            <input class="commerceForm-email" type="text" placeholder="Введите Email"/>
                            <the-mask class="commerceForm-phone" :mask="['+7 (###) ###-##-##']" placeholder="+7 ( _ _ _ ) - _ _ - _ _ _ " />
                    </fieldset>

                    <label for="commerceFormBtn">
                        <button id="commerceFormBtn" class="btn requisite-btn">Отправить</button>
                    </label>

                </form>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import { Component, Vue, namespace } from 'nuxt-property-decorator'

    //const Example = namespace('Example')

    @Component({
        components: {}
    })
    export default class CommerceForm extends Vue {

        mounted(){}
    }
</script>
