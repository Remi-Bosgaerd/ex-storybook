import Button from "../components/Button";

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    width: {control: 'range'},
    height: {control: 'range'},
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args" content="My button" />',
});

export const Small = Template.bind({});
export const Medium = Template.bind({});
export const Large = Template.bind({});

Small.args = {
  width: 15,
  height: 10,
};

Medium.args = {
  width: 25,
  height: 15,
};

Large.args = {
  width: 40,
  height: 20,
};
