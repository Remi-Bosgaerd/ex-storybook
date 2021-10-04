<template>
    <div class="monitorContainer" :style=style>
        <div class="wholeMonitor">
            <div class="topPart monitorColor">
                <div class="screen">
                    <div class="contentContainer">
                        <div class="content">{{ content }}</div>
                    </div>
                </div>
            </div>
            <div class="stand">
                <div class="monitorColor vertical"/>
                <div class="horizontal">
                    <div class="monitorColor leftPart"/>
                    <div class="monitorColor centerPart"/>
                    <div class="monitorColor rightPart"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Monitor",
    props: {
        content: {
            type: String,
            required: true,
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
        },
    },
    data: () => {
        return {
            style: {},
        }
    },
    mounted() {
        this.style = {
            width: `${this.width}vw`,
            height: `${this.height}vh`,
        }
    }
}
</script>

<style scoped lang="scss">
$monitorColor: #535A4E;
$screenHeightRatio: 80%;
$screenWidthRatio: 95%;
$screenHeightRatio: 80%;
$screenWidthRatio: 95%;

.monitorContainer {
    .monitorColor {
        background-color: $monitorColor;
    }

    .wholeMonitor {
        width: 100%;
        height: 100%;
        position: relative;

        .topPart {
            width: 100%;
            height: 75%;
            border-radius: 5%;
            position: relative;

            .screen {
                border-radius: 5%;
                position: absolute;
                background-color: white;
                width: $screenWidthRatio;
                height: $screenHeightRatio;
                top: calc((100% - #{$screenHeightRatio}) / 4);
                left: calc((100% - #{$screenWidthRatio}) / 2);

                .contentContainer {
                    position: absolute;
                    background-color: white;
                    width: $screenWidthRatio;
                    height: $screenHeightRatio;
                    top: calc((100% - #{$screenHeightRatio}) / 2);
                    left: calc((100% - #{$screenWidthRatio}) / 2);
                    border: 1px solid #52822D;
                    border-radius: 2%;
                    overflow: hidden;

                    .content {
                        padding: 10px;
                        font-size: 20px;
                        word-break: break-all;
                        overflow-wrap: break-word;
                    }
                }
            }
        }

        .stand {
            width: 100%;
            height: 25%;

            .vertical {
                width: 35px;
                height: 60%;
                margin: auto;
            }

            .horizontal {
                margin: auto;
                height: 40%;
                width: 30%;
                display: flex;

                .leftPart {
                    border-bottom-left-radius: 50% 100%;
                    border-top-left-radius: 50% 100%;
                    margin: 0;
                    height: 100%;
                    width: 50px;
                }

                .centerPart {
                    margin: 0;
                    height: 100%;
                    width: calc(100% - (50px * 2))
                }

                .rightPart {
                    border-bottom-right-radius: 50% 100%;
                    border-top-right-radius: 50% 100%;
                    margin: 0;
                    height: 100%;
                    width: 50px;
                }
            }
        }
    }
}
</style>
