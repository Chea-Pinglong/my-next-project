import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { userEvent, waitFor, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import { FloatingButton } from "./FloatingButton";

const meta: Meta<typeof FloatingButton> = {
  title: "MyNext/atoms/FloatingButton",
  component: FloatingButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FloatingButton>;

export const Default: Story = {
  args: {
    children: "Floating",
    position: "top-left",
    size: "medium",
    onClick: action("Click"),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const floatingButton = await canvas.getByRole("floatingButton", {
      name: /floatingButton/i,
    });
    // Check initial state
    await userEvent.click(floatingButton);

    await waitFor(() => {
      expect(floatingButton).toBeTruthy();
      expect(args.onClick).toHaveBeenCalled();
    });
  },
};
