<template>
    <section class="login-form">
        <h2>היי, טוב לראות אותך</h2>
        <form @submit.prevent="login">
            <div>
                <input
                    v-model="email"
                    required
                    type="email"
                    name="email"
                    placeholder="מייל"
                    ref="email"
                />
                <p>כתובת המייל איתה נרשמת לחשבונית ירוקה</p>
            </div>
            <div class="password">
                <input
                    v-model="password"
                    required
                    type="password"
                    name="password"
                    placeholder="סיסמה"
                />
                <a href="#">שכחת סיסמה?</a>
            </div>
            <div class="actions">
                <div class="btns flex">
                    <button type="submit" class="submit-btn">כניסה</button>
                    <button class="google-btn pointer" disabled>
                        <span>כניסה מהירה</span>
                        <img src="../assets/imgs/Google_G.svg" alt="" />
                    </button>
                </div>
                <p class="register-msg">
                    עוד לא הצטרפת?
                    <a href="#">ל-30 יום ניסיון חינם</a>
                </p>
            </div>
        </form>
    </section>
</template>

<script>
export default {
    mounted() {
        this.$refs.email.focus();
    },
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        login() {
            const { email, password } = this
            this.$emit('login', { email, password })
        },
    }
}
</script>