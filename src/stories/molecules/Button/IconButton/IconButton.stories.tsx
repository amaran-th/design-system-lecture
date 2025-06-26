import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Icon } from "../../../../components/Icon";
import { IconButton } from "../../../../components/IconButton";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "molecules/Button/IconButton",
  component: IconButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    icon: <Icon />,
    color: "primary",
  },
};

export const Text: Story = {
  args: {
    icon: <Icon />,
    color: "primary",
    variant: "transparent",
  },
};

export const Hovered: Story = {
  args: {
    icon: <Icon />,
    color: "primary",
    state: "hover",
  },
};

export const Disabled: Story = {
  args: {
    icon: <Icon />,
    color: "primary",
    disabled: true,
  },
};
