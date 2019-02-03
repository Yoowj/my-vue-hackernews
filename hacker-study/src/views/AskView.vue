<template>
    
</template>

<script>
export default {
    data() {
        return {
            data: []
        }
    },
    created() {
        fetchNewsList()
            .then(response => {
                this.data = response.data;
            })
    },
}
</script>

<style>

</style>
