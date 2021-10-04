<template>
    <button :style="style" :class="classes + 'button'">{{ content }}</button>
</template>

<script>

export default {
    name: "Button",
    props: {
        content: {
            type: String,
            required: true,
        },
        backgroundColor: {
            type: String,
            required: false,
            default: 'white'
        },
        width: {
            type: Number,
            required: true,
            validator: function (value) {
                return value > 0 && value <= 100;
            },
        },
        height: {
            type: Number,
            required: true,
            validator: function (value) {
                return value > 0 && value <= 100;
            },
        },
        classes: {
            type: String,
            required: false,
            default: ''
        }
    },
    data: () => {
        return {
            style: {},
        }
    },
    mounted() {
        this.style = {
            backgroundColor: this.backgroundColor,
            width: `${this.width}vw`,
            height: `${this.height}vh`,
        }
    }
}
</script>

<style scoped lang="scss">
    .button {
        border-radius: 15px;
        border: 2px solid darkgray;
        min-width: 75px;
        min-height: 40px;
    }
</style>
