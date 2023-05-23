import { Meta, StoryObj } from "@storybook/react";
import BookCard, { BookCardProps } from "./BookCard";
import { exapmpleBookData } from "../../data/firebase/bookDetailsData";

const meta: Meta<BookCardProps> = {
  title: "BookCard",
  component: BookCard,
};

export default meta;
type Story = StoryObj<BookCardProps>;

export const Primary: Story = {
  args: {
    book: exapmpleBookData,
  },
};
