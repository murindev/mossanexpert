<template>
    <div class="lightBox" v-if="questionOpen" @click.stop="questionOpen = false">
        <div class="lightBox-frame" @click.stop="questionOpen = true">
            <a class="lightBox-close" href="javascript:" @click.stop="$nuxt.$emit('close')">&Cross;</a>
            <div class="lightBox-box">
                <h3>Задать вопрос</h3>

                <p>
                    Задайте нам вопрос. <br/> Мы ответим Вам в ближайшее время.
                </p>

                <form class="lightBox-form" action="javascript:">

                    <template v-if="questionSent === 'start'">
                        <fieldset>
                            <label for="questionName">
                                <input type="text" v-model="questionName" id="questionName" placeholder="Имя"/>
                                <span class="lightBox-error" v-if="!questionValidName">
                                <i>Поле обязательно</i>
                            </span>
                            </label>
                            <label for="questionEmail">
                                <input type="text" v-model="questionEmail" id="questionEmail"
                                       placeholder="mail@mail.ru"/>
                                <span class="lightBox-error" v-if="!questionValidEmail">
                                <i>Поле обязательно и содержит правильный Email</i>
                            </span>
                            </label>
                            <label for="questionPhone">
                                <the-mask id="questionPhone" v-model="questionPhone" :mask="['+7 (###) ###-##-##']"
                                          placeholder="+7 ( _ _ _ ) - _ _ - _ _ _ "/>
                                <span class="lightBox-error" v-if="!questionValidPhone">
                                <i>Поле обязательно и содержит правильный телефонный номер</i>
                            </span>
                            </label>
                        </fieldset>
                        <fieldset>

                            <textarea id="question" v-model="question"></textarea>
                            <span class="lightBox-error" v-if="!questionValid">
                                <i>Поле обязательно</i>
                                </span>

                        </fieldset>
                        <fieldset>
                            <button class="btn requisite-btn" @click="formSubmit()">Отправить</button>
                        </fieldset>
                    </template>
                    <template v-if="questionSent === 'success'">
                        <mark>
                            Письмо успешно отправлено
                        </mark>
                    </template>
                    <template v-if="questionSent === 'fail'">
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

        public questionOpen = false;

        public questionName = '';
        public questionEmail = '';
        public questionPhone = '';
        public question = '';

        public questionSent: string = 'start'


        @Watch('questionName') onNameChange(val: string) {
            this.questionValidName = val.length > 0
        }

        @Watch('questionEmail') onEmailChange(questionEmail: string) {
            this.questionValidEmail = this.$checkEmail(questionEmail)
        }

        @Watch('questionPhone') onPhoneChange(questionPhone: string) {
            this.questionValidPhone = questionPhone.length >= 10
        }

        @Watch('question') onQuestionChange(question: string) {
            this.questionValid = question.length > 0
        }

        public questionValidName = true;
        public questionValidEmail = true;
        public questionValidPhone = true;
        public questionValid = true;


        formSubmit() {

            if (this.questionName.length == 0) {
                this.questionValidName = false;
            }
            if (this.questionPhone.length == 0) {
                this.questionValidPhone = false;
            }
            if (this.questionEmail.length == 0) {
                this.questionValidEmail = false;
            }
            if (this.question.length == 0) {
                this.questionValid = false;
            }

            if (!this.questionValidName || !this.questionValidPhone || !this.questionValidEmail || !this.questionValid) {
                return false
            } else {
                this.sendLetter()
            }

        }

        async sendLetter() {
            let request = await this.$axios.post(`${process.env.serverUrl}/emails/questions`, {
                name: this.questionName,
                phone: '8' + this.questionPhone,
                email: this.questionEmail,
                question: this.question,
            })
            if (request.data) {
                this.questionSent = 'success'
            } else {
                this.questionSent = 'fail'
            }


        }

        mounted() {
            this.$nuxt.$on('close', () => {
                this.questionSent = 'start'
                this.questionOpen = false
            })

            this.$nuxt.$on('openQuestionForm', () => {
                this.questionSent = 'start'
                this.questionOpen = true
            })
        }
    }
</script>
