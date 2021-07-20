<template>
    <div class="lightBox" v-if="WAOpen" @click.stop="WAOpen = false">
        <div class="lightBox-frame" @click.stop="WAOpen = true">
            <a class="lightBox-close" href="javascript:" @click.stop="$nuxt.$emit('close')">&Cross;</a>
            <div class="lightBox-box">
                <h3>Задать вопрос</h3>

                <p>
                    Задайте нам вопрос с помощью WhatsApp. <br/> Мы ответим Вам в ближайшее время.
                </p>

                <form class="lightBox-form" action="javascript:">

                    <template v-if="WAQuestionSent === 'start'">
                        <fieldset>
                            <label for="WAName">
                                <input type="text" v-model="WAName" id="WAName" placeholder="Имя"/>
                                <span class="lightBox-error" v-if="!WAValidName">
                                <i>Поле обязательно</i>
                            </span>
                            </label>

                            <label for="WAPhone">
                                <the-mask id="WAPhone" v-model="WAPhone" :mask="['+7 (###) ###-##-##']"
                                          placeholder="+7 ( _ _ _ ) - _ _ - _ _ _ "/>
                                <span class="lightBox-error" v-if="!WAValidPhone">
                                <i>Поле обязательно и содержит правильный телефонный номер</i>
                            </span>
                            </label>
                        </fieldset>
                        <fieldset>

                            <textarea id="WAQuestion" v-model="WAQuestion"></textarea>
                            <span class="lightBox-error" v-if="!WAQuestionValid">
                                <i>Поле обязательно</i>
                                </span>

                        </fieldset>
                        <fieldset>
                            <button class="btn requisite-btn" @click="formSubmit()">Отправить</button>
                        </fieldset>
                    </template>
                    <template v-if="WAQuestionSent === 'success'">
                        <mark>
                            Письмо успешно отправлено
                        </mark>
                    </template>
                    <template v-if="WAQuestionSent === 'fail'">
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
    import {Component, Vue, namespace, Watch} from 'nuxt-property-decorator'

    @Component({
        components: {}
    })
    export default class QuestionForm extends Vue {

        public WAOpen = false;

        public WAName = '';
        public WAPhone = '';
        public WAQuestion = '';

        public WAQuestionSent: string = 'start'


        @Watch('WAName') onNameChange(val: string) {
            this.WAValidName = val.length > 0
        }


        @Watch('WAPhone') onPhoneChange(WAPhone: string) {
            this.WAValidPhone = WAPhone.length >= 10
        }

        @Watch('WAQuestion') onQuestionChange(WAQuestion: string) {
            this.WAQuestionValid = WAQuestion.length > 0
        }

        public WAValidName = true;
        public questionValidEmail = true;
        public WAValidPhone = true;
        public WAQuestionValid = true;


        formSubmit() {

            if (this.WAName.length == 0) {
                this.WAValidName = false;
            }
            if (this.WAPhone.length == 0) {
                this.WAValidPhone = false;
            }
            if (this.WAQuestion.length == 0) {
                this.WAQuestionValid = false;
            }

            if (!this.WAValidName || !this.WAValidPhone || !this.WAQuestionValid) {
                return false
            } else {
                this.sendLetter()
            }

        }

        async sendLetter() {
            let request = await this.$axios.post(`${process.env.serverUrl}/emails/questions`, {
                name: this.WAName,
                phone: '8' + this.WAPhone,
                question: this.WAQuestion,
            })
            if (request.data) {
                this.WAQuestionSent = 'success'
            } else {
                this.WAQuestionSent = 'fail'
            }


        }
        public url = `https://web.whatsapp.com/send?phone=${this.WAPhone}&text=${this.WAQuestion}&source=&data=`;
        mounted() {
            this.$nuxt.$on('close', () => {
                this.WAQuestionSent = 'start'
                this.WAOpen = false
            })

            this.$nuxt.$on('openWatsAppForm', () => {
                this.WAQuestionSent = 'start'
                this.WAOpen = true
            })
        }
    }
</script>
