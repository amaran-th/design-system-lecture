import type { Meta, StoryObj } from "@storybook/react";

import { Menu } from "../../../components/Menu";
import { MenuItem } from "../../../components/MenuItem";

const meta = {
  title: "organism/Menu",
  component: Menu,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: { description: "Menu Type 내용" },
    width: { control: "number", description: "Menu Item의 고정 너비" },
    density: {
      control: "select",
      options: ["dense", "compact", "spacious"],
      description: "Menu Item 내부 여백의 빽빽한 정도",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

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
