import type { Meta, StoryObj } from "@storybook/react";
import { LabelText } from "../../../components/LabelText";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "atoms/LabelText",
  component: LabelText,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof LabelText>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    text: "상호명",
  },
};

export const Disabled: Story = {
  args: {
    text: "상호명",
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    text: "상호명",
    error: true,
  },
};
