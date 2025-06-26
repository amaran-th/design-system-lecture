import type { Meta, StoryObj } from "@storybook/react";
import { HelperText } from "../../../components/HelperText";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "molecules/HelperText",
  component: HelperText,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof HelperText>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Description: Story = {
  args: {
    text: "글자는 4자에서 8자 사이어야 합니다.",
  },
};

export const Disabled: Story = {
  args: {
    text: "상호명은 필수입니다.",
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    text: "상호명은 필수입니다.",
    error: true,
  },
};
