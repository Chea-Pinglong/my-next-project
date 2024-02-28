import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { userEvent, waitFor, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "MyNext/atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Button",
    colorScheme: "secondary",
    size: "small",
    onClick: action("Click !"),
  },
  play: async ({ args, canvasElement }) => {
    // Get the button element from the canvas
    const canvas = within(canvasElement);
    const button = await canvas.getByRole("button", { name: /button/i });

    // Simulate a user click on the button
    await userEvent.click(button);

    // Check if the onClick mock function has been called
    await waitFor(() => {
      expect(button).toBeTruthy();
      expect(args.onClick).toHaveBeenCalled(); // Asserting the mock function has been called
    });
  },
};
