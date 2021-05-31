<template>
    <div>
        <Menu 
            @componentsApiTestFn="apiTestFn"
            @componentsMmentFn="momentFn"
            @componentsGetUsers="getUsers"
            @childDeadEvent="onDeadEvent"
        />
        test.vue
    </div>
</template>
<script>
import MyMixin from '~/mixins/common'
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex';
export default {
    mixins: [MyMixin],
    created() {
        console.log("created");
    },
    methods: {
        onDeadEvent(data) {
            console.log("data", data);
        }
    },
}
</script>