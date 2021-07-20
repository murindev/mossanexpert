<template>
    <section class="appForm left-sided">
        <div class="appForm-row">
            <div class="appForm-text">
                <mark v-if="content.app_form_title" v-html="$htmlTags(content.app_form_title)"/>
                <span v-if="content.app_form_text" v-html="$htmlTags(content.app_form_text)"/>
                <em v-if="content.app_form_subtext" v-html="$htmlTags(content.app_form_subtext)"/>
              <span class="appForm-text-price">
                {{content.app_form_price}}
              </span>
            </div>
            <div class="appForm-form">
                <form action="javascript:">
                    <template v-if="appSent === 'start'">
                        <input class="column" v-model="appName" type="text" placeholder="Введите ваше имя"/>
                        <the-mask class="column" v-model="appPhone"  :mask="['+7 (###) ###-##-##']" placeholder="+7 ( _ _ _ ) - _ _ - _ _ _ " />
                        <button class="btn requisite-btn" @click="formSubmit()">Оставить заявку</button>
                    </template>

                    <i class="error" v-if="appSent === 'fail'">
                        К сожалению произошла ошибка письмо не доставлено!!! <br/>
                        Повторите отправку письма позже. <br/>
                        Извините за доставленные Вам неудобства.
                    </i>

                </form>

                <template v-if="appSent === 'success'">
                    <mark>
                        <span>Письмо успешно отправлено</span>
                    </mark>
                </template>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import {Component, Vue, namespace, Prop, Watch} from 'nuxt-property-decorator'

    //const Example = namespace('Example')

    @Component({
        components: {}
    })
    export default class AppForm extends Vue {
        @Prop() content!: any

        public appName = ''
        public appPhone = ''

        public appSent:string = 'start'

        public appValidName = true;
        public appValidPhone = true;

        @Watch('appName')  onNameChange(val:string){
            this.appValidName = val.length > 0
        }
        @Watch('appPhone')  onPhoneChange(appPhone:string){
            this.appValidPhone = appPhone.length >= 10
        }

        formSubmit(){

            if(this.appName.length == 0){this.appValidName = false;}
            if(this.appPhone.length == 0){this.appValidPhone = false;}

            if(!this.appValidName) {
                this.$nuxt.$emit('message',{
                    heading: 'Ошибка',
                    text: 'Поле "Имя" обязательно'
                })
                return false
            } else if(!this.appValidPhone) {
                this.$nuxt.$emit('message',{
                    heading: 'Ошибка',
                    text: 'Поле "Телефон" обязательно и содержит правильный телефонный номер'
                })
                return false
            } else {
                this.sendLetter()
            }

        }

        async sendLetter(){
            let request = await this.$axios.post(`${process.env.serverUrl}/emails/callback`,{
                name: this.appName,
                phone: '8'+this.appPhone
            })
            if(request.data){
                this.appSent = 'success'
            } else {
                this.appSent = 'fail'
            }
        }

        mounted() {
        }
    }
</script>
