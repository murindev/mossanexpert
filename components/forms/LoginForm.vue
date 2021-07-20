<template>
  <div class="lightBox" v-if="callbackOpen" @click.stop="callbackOpen = false">
    <div class="lightBox-frame" @click.stop="callbackOpen = true">
      <a class="lightBox-close" href="javascript:" @click.stop="$nuxt.$emit('close')">&Cross;</a>
      <div class="lightBox-box">
        <h3>Вход в персональный кабинет клиента</h3>

        <p>
          Для получения доступа в систему <br/>
          свяжитесь с нашими менеджерами <br/>
          <a class="menu-phone" href="tel:+74951545316">+7 495 154 53 16</a>
        </p>

        <form class="lightBox-form" action="javascript:">

          <template v-if="callbackSent === 'start'">
            <fieldset>
              <label for="callbackLogin">
                <input type="text" v-model="callbackLogin" id="callbackLogin" placeholder="Логин"/>
                <span class="lightBox-error" v-if="!callbackValidLogin">
                                <i>Поле обязательно</i>
                            </span>
              </label>

              <label for="callbackPassword">
                <input type="password" id="callbackPassword" placeholder="Пароль" v-model="callbackPassword">
                <span class="lightBox-error" v-if="!callbackValidPassword">
                                <i>Поле обязательно и содержит правильный телефонный номер</i>
                            </span>
              </label>
            </fieldset>
            <fieldset>
              <button type="submit" disabled class="btn requisite-btn" @click="formSubmit()">Воайти в кабинет</button>
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
import {Component, Vue, namespace, Watch} from 'nuxt-property-decorator'

@Component({
  components: {}
})
export default class LoginForm extends Vue {

  public callbackOpen = false;

  public callbackLogin = '';
  public callbackPassword = '';

  public callbackSent: string = 'start'


  @Watch('callbackLogin') onNameChange(val: string) {
    this.callbackValidLogin = val.length > 0
  }

  @Watch('callbackPassword') onPhoneChange(callbackPassword: string) {
    this.callbackValidPassword = callbackPassword.length >= 6
  }

  public callbackValidLogin = true;
  public callbackValidPassword = true;


  formSubmit() {

    if (this.callbackLogin.length == 0) {
      this.callbackValidLogin = false;
    }
    if (this.callbackPassword.length == 0) {
      this.callbackValidPassword = false;
    }

    if (!this.callbackValidLogin || !this.callbackValidPassword) {
      return false
    } else {
      this.sendLetter()
    }

  }

  async sendLetter() {
    let request = await this.$axios.post(`${process.env.serverUrl}/emails/callback`, {
      name: this.callbackLogin,
      phone: '8' + this.callbackPassword
    })
    if (request.data) {
      this.callbackSent = 'success'
    } else {
      this.callbackSent = 'fail'
    }
  }

  mounted() {
    this.$nuxt.$on('close', () => {
      this.callbackSent = 'start'
      this.callbackOpen = false
    })

    this.$nuxt.$on('openLoginForm', () => {
      this.callbackSent = 'start'
      this.callbackOpen = true
    })
  }
}
</script>
