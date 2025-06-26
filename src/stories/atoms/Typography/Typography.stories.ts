import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "../../../components/Typography";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "atoms/Typography",
  component: Typography,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: "Test Text",
  },
};

export const DisabledText: Story = {
  args: {
    children: "Test Text",
    disabled: true,
  },
};

export const HeadText: Story = {
  args: {
    children: "Test Text",
    variant: "h2",
  },
};
