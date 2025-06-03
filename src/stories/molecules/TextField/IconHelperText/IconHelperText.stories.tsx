import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "../../../atoms/Icon/Icon";
import { IconHelperText } from "./IconHelperText";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "molecules/TextField/IconHelperText",
  component: IconHelperText,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof IconHelperText>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Description: Story = {
  args: {
    label: "글자는 4자에서 8자 사이어야 합니다.",
    icon: <Icon />,
  },
};

export const Error: Story = {
  args: {
    label: "상호명은 필수입니다.",
    color: "#FF0000",
    icon: <Icon />,
  },
};
