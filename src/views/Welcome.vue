<template>
    <section class="welcome">
        welcome
        <button @click="logout">logout</button>
    </section>
</template>

<script>
export default {
    data() {
        return {
            user: null
        }
    },
    created() {
        this.user = this.$store.getters.loggedinUser;
        if (!this.user) this.$router.push('/login');
    },
    methods: {
        async logout() {
            await this.$store.dispatch({ type: 'logout' });
            this.$router.push('/login');
        }
    },
}
</script>