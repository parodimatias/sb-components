import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";

export default {
  title: "Example/MyLabel",
  component: MyLabel,
  argTypes: {
    color: { control: "select" },
    fontColor: {
      control: "color",
    },
  },
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => (
  <MyLabel {...args}></MyLabel>
);

export const Basic = Template.bind({});
Basic.args = {
  size: "normal",
  allCaps: false,
};
export const AllCaps = Template.bind({});
AllCaps.args = {
  size: "normal",
  allCaps: true,
};
export const Secondary = Template.bind({});
Secondary.args = {
  size: "normal",
  color: "secondary",
};
export const Terciary = Template.bind({});
Terciary.args = {
  size: "normal",
  color: "tertiary",
};
export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
  fontColor: "",
  size: "h1",
};
export const CustomBackground = Template.bind({});
CustomBackground.args = {
  fontColor: "white",
  size: "h1",
  backgroundColor: "black",
};
