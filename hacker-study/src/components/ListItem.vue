<template>
    <div class="item-container" v-for="item in data">
        <div>
            <a :href="item.url"><p>{{ item.title }}</p></a>
            
        </div>
        <div>
            <span>{{ item.time_ago }}</span>    
            <span> created by {{ item.user }}</span>
        </div>        

    </div>
</template>

<script>
export default {
    props: [
        {
            
        }
    ]
}
</script>

<style lang="stylus" scoped>
    VUE_COLOR = #424242

    .item-container
        border-bottom 2px solid VUE_COLOR
        &:nth-child(1)
            border-top 2px solid VUE_COLOR
        &:hover
            backgroud-color VUE_COLOR

    vendor(prop, args)
        -webkit-{prop} args
        -moz-{prop} args
        -o-{prop} args
        {prop} args

    border-radius()
        vendor('border-radius', arguments)
</style>
