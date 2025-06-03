import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../../Button/Button/Button";
import { InputLabel } from "./InputLabel";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "molecules/TextField/InputLabel",
  component: InputLabel,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof InputLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    label: "상호명",
  },
};

export const Required: Story = {
  args: {
    label: "상호명",
    required: true,
  },
};
export const Slot: Story = {
  args: {
    label: "상호명",
    required: true,
    slot: { right: <Button label={"중복검사"} size="small" /> },
  },
};
