<template>
    <div class="page main">
        <section class="banner">
<!--            <div class="banner-content">-->
                <img src="../assets/img/banner.png" alt="banner"/>
<!--            </div>-->
        </section>
        <achievements :content="content"/>



    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'nuxt-property-decorator'



    import SG from "~/components/_sg.vue";
    import Achievements from "~/components/main/Achievements.vue";

    @Component({
        components: {
            SG,Achievements
        }
    })
    export default class Example extends Vue {
        public title: string = 'ГЛАВНАЯ'
        public head(){
            return{
                title: this.title,
                meta: [
                    {
                        hid: 'Описание ',
                        name: 'description',
                        content: 'Home page description'
                    }
                ],
            }
        }

        public content = [
            {
                title: '20 лет',
                subtitle: 'опыта',
                text: 'Успешная<br/>работа<br/>с 2001 года'
            },{
                title: 'электронный',
                subtitle: 'документооборот',
                text: 'Пользуйтесь <br/>преимуществами<br/>моментальной<br/>доставки документов'
            },{
                title: 'личный B2B',
                subtitle: 'кабинет клиента',
                text: 'Автоматизация<br/>обслуживания<br/>клиентов'
            }
        ]

        public list = [
            {
                icon: 'plant.png',
                title: 'Производственные предприятия',
                cnt: ' Реализовано'
            }, {
                icon: 'cart.png',
                title: 'Ритейл',
                cnt: ' Реализовано'
            }, {
                icon: 'truck.png',
                title: 'Логистика - автотранспорт',
                cnt: ' Реализовано'
            }, {
                icon: 'suitcase.png',
                title: 'Гостиничный бизнес',
                cnt: ' Реализовано'
            }, {
                icon: 'food.png',
                title: 'Ресторанный бизнес, Общепит, Кейтеринг',
                cnt: ' Реализовано'
            }, {
                icon: 'currency.png',
                title: 'Коммерческая недвижимость',
                cnt: ' Реализовано'
            }, {
                icon: 'plus.jpg',
                title: 'Медицинские учреждения',
                cnt: ' Реализовано'
            }, {
                icon: 'smile.png',
                title: 'Детские и образовательные учреждения',
                cnt: ' Реализовано'
            }, {
                icon: 'fox.png',
                title: 'Сельское хозяйство',
                cnt: ' Реализовано'
            }, {
                icon: 'house.png',
                title: ' Управляющие компании ЖКХ',
                cnt: ' Реализовано'
            }, {
                icon: 'heart.png',
                title: 'Салоны красоты - Фитнес',
                cnt: ' Реализовано'
            }, {
                icon: 'checked.png',
                title: 'Другое',
                cnt: ' Реализовано'
            },
        ]

        mounted(){}
    }
</script>
