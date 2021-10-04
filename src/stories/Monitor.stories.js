import Monitor from "../components/Monitor";

export default {
    title: 'Monitor',
    component: Monitor,
    argTypes: {
        width: {control: 'range'},
        height: {control: 'range'},
    },
};

const Template = (args) => ({
    components: { Monitor },
    setup() {
        return { args };
    },
    template: '<Monitor v-bind="args" content="I love VueJS" />',
});

export const Small = Template.bind({});
export const Medium = Template.bind({});
export const Large = Template.bind({});

Small.args = {
    width: 15,
    height: 25,
};

Medium.args = {
    width: 25,
    height: 45,
};

Large.args = {
    width: 35,
    height: 60,
};
