<template>
    <nav>
        <button type="button" @click="componentsApiTestFn">
            api Test Btn
        </button>
        <button type="button" @click="componentsMmentFn">
            moment Test Btn
        </button>
        <button type="button" @click="componentsGetUsers">
            store Test Btn
        </button>
        <button type="button" @click="childDeadEvent">
            event emit
        </button>
        <button type="button" @click="objectArrTestBtn">
            objectArrTestBtn
        </button>
        <NuxtLink to="/">home</NuxtLink>
        <NuxtLink to="/test">sub</NuxtLink>
    </nav>
</template>
<script>
export default {
    props: {
        isAlive: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        componentsApiTestFn() {
            this.$emit('componentsApiTestFn', "");
        },

        componentsMmentFn() {
            this.$emit('componentsMmentFn', "");
        },

        componentsGetUsers() {
            this.$emit('componentsGetUsers', "");
        },
        childDeadEvent () {
            this.$emit('childDeadEvent', "data");
        },
        objectArrTestBtn() {
          this.$emit('objectArrTestBtn', {dev : 1103, build : 8080});
        }
    }

}
</script>
