import Turtle from "../components/Turtle";

export default {
    title: 'Turtle',
    component: Turtle,
    argTypes: {
        width: {control: 'range'},
        height: {control: 'range'},
    },
};

const Template = (args) => ({
    components: { Turtle },
    setup() {
        return { args };
    },
    template: '<Turtle v-bind="args"/>',
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
