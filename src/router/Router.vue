<script>
    import Vue from 'vue'
    import VueRouter from 'vue-router'
    import Blog from '../components/Blog.vue'
    import Top from '../components/Top.vue'

    Vue.use(VueRouter)

    export default new VueRouter({
    routes: [
        {path: '/', component: Blog},
        {path: '/top', name: 'Top',  component: Top}]
    })
</script>
