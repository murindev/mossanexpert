<template>
    <div class="left-sided warranty">
        <div class="row">
            <div class="warranty-img">
                <img src="../../assets/img/searching.png"/>
            </div>
            <div class="warranty-text">
                <p>
                    <b>Гарантия согласно нормам СанПиН 3.5.2.3472-17, 3.5.3.3223-14</b>
                    <i>По официальному договору без обмана и скрытых условий под звездочкой.</i>
                </p>
                <p>Мы не даем гарантию выше норм, установленных СанПиН - сроком более 1-го года, так как проработав много лет в отрасли, мы знаем, что такой срок могут предлагать только мошенники и непорядочные подрядчики.</p>
                <p>Завлекая вас низкой стоимостью и завышенным сроком гарантии такие компании в 90% случаев накручивают стоимость услуги на месте, а при наступлении гарантийного случая они не выполнят своих обязательств, а просто занесут ваш номер телефона в черный список.</p>

            </div>
        </div>

    </div>
</template>

<script lang="ts">
    import {Component, Vue, namespace, Prop} from 'nuxt-property-decorator'

    @Component({
        components: {}
    })
    export default class BlockText extends Vue {
        @Prop() content!: string

        mounted() {
        }
    }
</script>
