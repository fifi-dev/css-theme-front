<template>
    <button
    :class="[
        'px-8 py-4 font-semibold uppercase transition-colors duration-300 hover:text-white hover:bg-highlight',
        stateClasses[state],
    ]"
    @mouseover="changeState('hover')"
    @mouseout="changeState('normal')"
    >
    <slot></slot>
    </button>
</template>

<script>
    export default {
        props: {
        state: {
            type: String,
            default: 'normal',
        },
        },
        data() {
        return {
            stateClasses: {
            normal: 'bg-primary text-white',
            highlight: 'text-primary bg-white',
            },
        };
        },
        methods: {
        changeState(newState) {
            this.$emit('update:state', newState);
        },
        },
    };
</script>
