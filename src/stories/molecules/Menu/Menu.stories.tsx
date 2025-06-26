import type { Meta, StoryObj } from "@storybook/react";

import { Menu } from "../../../components/Menu";
import { MenuItem } from "../../../components/MenuItem";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "molecules/Menu",
  component: Menu,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Defualt: Story = {
  args: {
    children: (
      <>
        <MenuItem>test1</MenuItem>
        <MenuItem>test2</MenuItem>
        <MenuItem selected>test3</MenuItem>
        <MenuItem>test4</MenuItem>
      </>
    ),
  },
};

export const Dense: Story = {
  args: {
    children: (
      <>
        <MenuItem>test1</MenuItem>
        <MenuItem>test2</MenuItem>
        <MenuItem selected>test3</MenuItem>
        <MenuItem>test4</MenuItem>
      </>
    ),
    density: "dense",
  },
};

export const Spacious: Story = {
  args: {
    children: (
      <>
        <MenuItem>test1</MenuItem>
        <MenuItem>test2</MenuItem>
        <MenuItem selected>test3</MenuItem>
        <MenuItem>test4</MenuItem>
      </>
    ),
    density: "spacious",
  },
};
