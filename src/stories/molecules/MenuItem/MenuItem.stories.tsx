import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "../../../components/Icon";
import { IconButton } from "../../../components/IconButton";
import { MenuItem } from "../../../components/MenuItem";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "molecules/MenuItem",
  component: MenuItem,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof MenuItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: "test",
  },
};

export const Selected: Story = {
  args: {
    children: "test",
    selected: true,
  },
};

export const WithButton: Story = {
  args: {
    children: "test",
    slot: { right: <IconButton icon={<Icon />} /> },
  },
};
