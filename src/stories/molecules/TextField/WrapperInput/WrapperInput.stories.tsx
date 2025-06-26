import type { Meta, StoryObj } from "@storybook/react";
import { Chip } from "../../../../components/Chip";
import { Input } from "../../../../components/Input";
import { WrapperInput } from "../../../../components/WrapperInput";

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
    swap: { input: <Input value="test" /> },
  },
};

export const ChipInput: Story = {
  args: { swap: { input: <Input value="test" /> }, Wrapper: Chip },
};

export const Readonly: Story = {
  args: {
    swap: { input: <Input value="test" /> },
    readOnly: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
