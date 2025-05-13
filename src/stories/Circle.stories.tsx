import { Meta, StoryObj } from "@storybook/react";
import Circle from "./Circle";

const meta: Meta<typeof Circle>  = {
  component: Circle,
  title: "Circle",
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
    },
  },
  tags: ["autodocs"],
}

export default meta;

type Story = StoryObj<typeof meta>;

/*
　*オレンジ色の縁です*
 */
export const BaseCircle: Story = {
  args: {
    variant: "orange",
  },
};
export const GreenCircle: Story = {
  args: {
    variant: "green",
  },
};
export const YellowCircle: Story = {
  args: {
    variant: "yellow",
  },
};

export const GroupedCircle: Story = {
  render: () => (
    <div >
      <Circle variant="orange" />
      <Circle variant="green" />
      <Circle variant="yellow" />
    </div>
  ),
}