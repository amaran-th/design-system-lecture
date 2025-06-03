import type { Meta, StoryObj } from "@storybook/react";
import { Chip } from "../../Chip/Chip";
import { WrapperInput } from "./WrapperInput";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "molecules/TextField/WrapperInput",
  component: WrapperInput,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof WrapperInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    nestedInputProps: { value: "test" },
  },
};

export const ChipInput: Story = {
  args: { nestedInputProps: { value: "test" }, Wrapper: Chip },
};

export const Readonly: Story = {
  args: {
    nestedInputProps: {
      value: "test",
      readOnly: true,
    },
  },
};

export const Disabled: Story = {
  args: {
    nestedInputProps: {
      disabled: true,
    },
  },
};
