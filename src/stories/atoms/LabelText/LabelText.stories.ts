import type { Meta, StoryObj } from "@storybook/react";
import { LabelText } from "./LabelText";

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
    label: "상호명",
  },
};

export const Small: Story = {
  args: {
    label: "상호명",
    size: "small",
  },
};

export const Large: Story = {
  args: {
    label: "상호명",
    size: "large",
  },
};
