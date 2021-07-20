<template>
    <div class="lightBox" v-if="callbackOpen" @click.stop="callbackOpen = false" >
        <div class="lightBox-frame" @click.stop="callbackOpen = true">
            <a class="lightBox-close" href="javascript:" @click.stop="$nuxt.$emit('close')">&Cross;</a>
            <div class="lightBox-box">
                <h3>Получить обратный звонок</h3>

                <p>
                    Отправьте нам Ваш телефонный номер <br/>
                    и мы перезвоним Вам в течении нескольких минут
                </p>

                <form class="lightBox-form" action="javascript:">

                    <template  v-if="callbackSent === 'start'">
                        <fieldset>
                            <label for="callbackName">
                                <input type="text" v-model="callbackName" id="callbackName"  placeholder="Имя" />
                                <span class="lightBox-error" v-if="!callbackValidName">
                                <i>Поле обязательно</i>
                            </span>
                            </label>

                            <label for="callbackPhone">
                                <the-mask id="callbackPhone" v-model="callbackPhone"  :mask="['+7 (###) ###-##-##']" placeholder="+7 ( _ _ _ ) - _ _ - _ _ _ " />
                                <span class="lightBox-error" v-if="!callbackValidPhone">
                                <i>Поле обязательно и содержит правильный телефонный номер</i>
                            </span>
                            </label>
                        </fieldset>
                        <fieldset>
                            <button class="btn requisite-btn" @click="formSubmit()">Отправить</button>
                        </fieldset>
                    </template>
                    <template v-if="callbackSent === 'success'">
                        <mark>
                            Письмо успешно отправлено
                        </mark>
                    </template>
                    <template v-if="callbackSent === 'fail'">
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
    export default class CallBackForm extends Vue {

        public callbackOpen = false;

        public callbackName = '';
        public callbackPhone = '';

        public callbackSent:string = 'start'


        @Watch('callbackName')  onNameChange(val:string){
            this.callbackValidName = val.length > 0
        }
        @Watch('callbackPhone')  onPhoneChange(callbackPhone:string){
            this.callbackValidPhone = callbackPhone.length >= 10
        }


        public callbackValidName = true;
        public callbackValidPhone = true;


        formSubmit(){

            if(this.callbackName.length == 0){this.callbackValidName = false;}
            if(this.callbackPhone.length == 0){this.callbackValidPhone = false;}

            if(!this.callbackValidName || !this.callbackValidPhone) {
                return false
            } else {
                this.sendLetter()
            }

        }

        async sendLetter(){
            let request = await this.$axios.post(`${process.env.serverUrl}/emails/callback`,{
                name: this.callbackName,
                phone: '8'+this.callbackPhone
            })
            if(request.data){
                this.callbackSent = 'success'
            } else {
                this.callbackSent = 'fail'
            }
        }

        mounted(){
            this.$nuxt.$on('close', () => {
                this.callbackSent = 'start'
                this.callbackOpen = false
            })

            this.$nuxt.$on('openCallBackForm',() => {
                this.callbackSent = 'start'
                this.callbackOpen = true
            })
        }
    }
</script>
