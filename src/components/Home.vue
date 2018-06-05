<template>
    <div>
        <h1>Биржевой трейдер</h1>
        <h6>Вы можете сохранить/загрузить ваши данные</h6>
        <h6>Нажмите "Конец дня", чтобы начать новый день!</h6>
        <hr>
        <p>Ваш капитал: {{ funds }}</p>
    </div>
</template>

<script>
    export default {
        computed: {
            funds() {
                return this.$store.getters.funds
            }
        }
    }
</script>

<style scoped>

</style>
