<template>
    <section class="user-info flex wrap">
        <div v-for="(section, idx) in userInfoToShow" :key="idx">
            <h2>{{ section.title }}</h2>
            <div class="data" v-for="(dataField, idx) in section.dataFields" :key="idx">
                <p class="field">{{ dataField.field }}</p>
                <p>{{ dataField.value }}</p>
            </div>
        </div>
        <div class="businesses">
            <h2>עסקים</h2>
            <div v-for="business in businessInfoToShow" :key="business.id">
                <img :src="business.logo" :alt="business.name" />
                <h3>{{ business.name }}</h3>
                <div class="data" v-for="(dataField, idx) in business.dataFields" :key="idx">
                    <p class="field">{{ dataField.field }}</p>
                    <p>{{ dataField.value }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    created() {
        if (!this.user) this.$router.push('/login');
    },
    computed: {
        user() {
            return this.$store.getters.loggedinUser;
        },
        userInfoToShow() {
            const { user } = this
            return [
                {
                    title: 'פרטים אישיים',
                    dataFields: [
                        { field: 'שם פרטי', value: user.firstName },
                        { field: 'שם משפחה', value: user.lastName },
                        { field: 'מספר ת.ז', value: user.idNumber },
                    ]
                },
                {
                    title: 'פרטי מנוי',
                    dataFields: [
                        { field: 'תאריך רישום', value: new Date(user.signUpDate).toLocaleDateString() },
                        { field: 'טלפון ליצירת קשר', value: user.phone },
                        { field: 'מייל חשבון', value: user.email },
                    ]
                }
            ]
        },
        businessInfoToShow() {
            const { businesses } = this.user
            return businesses.map(business => {
                return {
                    id: business.id,
                    name: business.name,
                    logo: business.logo,
                    dataFields: [
                        { field: 'מספר עוסק', value: business.taxId },
                        { field: 'כתובת', value: `${business.address}, ${business.city}` },
                        { field: 'שם באנגלית', value: business.nameEn },
                    ]
                }
            })
        }
    }
}
</script>