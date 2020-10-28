<template>
    <section class="welcome" v-if="user">
        <h2>היי {{user.firstName}}</h2>
        <h3>זהו עמוד העסק שלך עבור {{user.businesses[0].name}}</h3>
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