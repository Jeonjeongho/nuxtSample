import {mapState, mapGetters, mapActions, mapMutations} from 'vuex';
let commonMixin = {
    mounted() {
        console.log('Mixed mounted!')
    },

    methods: {
        async apiTestFn() {
            const result = await this.$axios.get("/server-middleware/getJSON");
            if (result.status == 200) {
                this.apiTest = result.data.data;
            }
        },

        momentFn() {
            this.apiTest = this.$moment().format("YYYY-DD-MM")
        },

        ...mapActions(['getUsers'])
    },
}
export default commonMixin
