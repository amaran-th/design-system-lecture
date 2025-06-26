import type { Meta, StoryObj } from "@storybook/react";

import { Chip } from "../../../components/Chip";
import { Icon } from "../../../components/Icon";
import { IconButton } from "../../../components/IconButton";
import { TextField } from "../../../components/TextField";
import { WrapperInput } from "../../../components/WrapperInput";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "organism/TextField",
  component: TextField,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    swap: { wrapperInput: <WrapperInput value="test" Wrapper={Chip} /> },
  },
};

export const Secondary: Story = {
  args: {
    value: "test",
    slot: { right: <IconButton icon={<Icon />} /> },
  },
};
