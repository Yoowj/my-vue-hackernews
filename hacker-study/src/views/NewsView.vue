<template>
    <div>
        
        <!--<div v-for="item in news" :key="item.id">
            <a :href="item.url">
                <v-hover>
                    <v-card
                        slot-scope="{ hover }"
                        :class="`elevation-${hover ? 12 : 2}`"
                        class="mx-auto"
                        width="100%"
                    >
                    <div class="list-item-container">
                        <div class="point-container">
                            {{ item.points }}
                        </div>
                        <div class="content-container">
                            <p>{{ item.title}}</p>
                            <span>{{item.time_ago}} created by {{item.user}} </span>
                        </div>
                    </div>
                    </v-card>
                </v-hover>
            </a>
        </div>-->
        <v-list two-line>
            <template v-for="(item, index) in news">
                <v-list-tile :key="index" avatar ripple @click="">
                    <v-list-tile-content>
                        <v-list-tile-title>
                            {{item.title}}
                        </v-list-tile-title>
                        <v-list-title-sub-title class="text--primary">
                            {{ item.user }}
                        </v-list-title-sub-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                        <v-list-tile-action-text> {{ item.time_ago }} </v-list-tile-action-text>
                        <v-icon color="grey lighten-1">star_border</v-icon>
                    </v-list-tile-action>
                </v-list-tile>
                <v-divider v-if="index + 1 < news.length" :key="`divider-${index}`"></v-divider>

            </template>
        </v-list>
        
           
    </div>
</template>

<script>
import { fetchNewsList } from '../api/index.js'
import bus from '../bus/bus.js'


export default {
    data() {
        return {
            news: []
        }
    },
    created() {
        console.log(fetchNewsList);
        bus.$emit('start:spinner');
        fetchNewsList()
            .then(response => {
                this.news = response.data;
                bus.$emit('stop:spinner');
            })
    },
}
</script>

<style scoped lang="stylus">
    .list-item-container 
        display flex
        margin 20px 20px
        width 100%
        div
            justify-content center
    
    .point-container
        width 60px
        height 60px
        display flex
        align-items center
        align-content center
</style>
