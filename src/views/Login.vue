<template>
    <section class="login flex">
        <div class="login-background"></div>
        <LoginForm @login="login" :isWrongCred="isWrongCred" />
        <LoginHero />
    </section>
</template>

<script>
import LoginHero from '../components/LoginHero'
import LoginForm from '../components/LoginForm'
export default {
    data() {
        return {
            isWrongCred: false
        }
    },
    created() {
        const user = this.$store.getters.loggedinUser;
        if (user) this.$router.push('/');
    },
    methods: {
        async login(credentials) {
            console.log('login component -> credentials', credentials);
            const user = await this.$store.dispatch({ type: 'login', credentials });
            if (!user) this.isWrongCred = true
            this.$router.push('/');
        }
    },
    components: {
        LoginHero,
        LoginForm
    }
}
</script>