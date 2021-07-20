<template>
    <div class="lightBox" v-if="open" @click.stop="open = false">
        <div class="lightBox-frame" @click.stop="open = true">
            <a class="lightBox-close" href="javascript:" @click.stop="$nuxt.$emit('close')">&Cross;</a>
            <div class="lightBox-box">
                <h3>Получить коммерческое предложение</h3>

                <p>
                    Присылайте нам ваше техническое задание и мы отправим вам коммерческое предложение. <br/> Также вы можете пригласить нашу компанию на тендер.
                </p>

                <form class="lightBox-form" action="javascript:">

                    <template  v-if="sent === 'start'">
                        <fieldset>
                            <label for="name">
                                <input type="text" v-model="name" id="name"  placeholder="Имя" />
                                <span class="lightBox-error" v-if="!validName">
                                <i>Поле обязательно</i>
                            </span>
                            </label>
                            <label for="email">
                                <input type="text" v-model="email" id="email" placeholder="mail@mail.ru"/>
                                <span class="lightBox-error" v-if="!validEmail">
                                <i>Поле обязательно и содержит правильный Email</i>
                            </span>
                            </label>
                            <label for="phone">
                                <the-mask id="phone" v-model="phone"  :mask="['+7 (###) ###-##-##']" placeholder="+7 ( _ _ _ ) - _ _ - _ _ _ " />
                                <span class="lightBox-error" v-if="!validPhone">
                                <i>Поле обязательно и содержит правильный телефонный номер</i>
                            </span>
                            </label>
                        </fieldset>
                        <fieldset>
                            <button class="btn requisite-btn" @click="formSubmit()">Отправить</button>
                        </fieldset>
                    </template>
                    <template v-if="sent === 'success'">
                        <mark>
                            Письмо успешно отправлено
                        </mark>
                    </template>
                    <template v-if="sent === 'fail'">
                        <i class="error">
                            К сожалению произошла ошибка письмо не доставлено!!! <br/>
                            Повторите отправку письма позже. <br/>
                            Извините за доставленные Вам неудобства.
                        </i>
                    </template>

                </form>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, namespace, Watch } from 'nuxt-property-decorator'

    @Component({
        components: {}
    })
    export default class RequisitesForm extends Vue {

        public open = false;

        public name = '';
        public email = '';
        public phone = '';

        public sent:string = 'start'


        @Watch('name')  onNameChange(val:string){
            this.validName = val.length > 0
        }
        @Watch('email')  onEmailChange(email:string){
            this.validEmail = this.$checkEmail(email)
        }
        @Watch('phone')  onPhoneChange(phone:string){
            this.validPhone = phone.length >= 10
        }

        public validName = true;
        public validEmail = true;
        public validPhone = true;


        formSubmit(){

            if(this.name.length == 0){this.validName = false;}
            if(this.phone.length == 0){this.validPhone = false;}
            if(this.email.length == 0){this.validEmail = false;}

            if(!this.validName || !this.validPhone || !this.validEmail) {
                return false
            } else {
                this.sendLetter()
            }

        }

        async sendLetter(){
            let request = await this.$axios.post(`${process.env.serverUrl}/emails/requisites`,{
                name: this.name,
                phone: '8'+this.phone,
                email: this.email,
            })
            if(request.data){
                this.sent = 'success'
            } else {
                this.sent = 'fail'
            }


        }

        mounted(){
            this.$nuxt.$on('close', () => {
                this.sent = 'start'
                this.open = false
            })

            this.$nuxt.$on('openRequisitesForm',() => {
                this.sent = 'start'
                this.open = true
            })
        }
    }
</script>
