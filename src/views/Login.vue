<template>
    <section class="login flex">
        <div class="login-background"></div>
        <LoginForm />
        <LoginHero />
    </section>
</template>

<script>
import LoginHero from '../components/LoginHero'
import LoginForm from '../components/LoginForm'
export default {
    components: {
        LoginHero,
        LoginForm
    }
}
</script>