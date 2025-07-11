import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "../../../components/Input";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "atoms/Input",
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default: Story = {
  args: {
    value: "test",
  },
};

export const Placeholder: Story = {
  args: {
    placeholder: "Put text",
  },
};

export const Readonly: Story = {
  args: {
    value: "test",
    readOnly: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
