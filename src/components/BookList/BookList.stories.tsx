import { Meta, StoryObj } from "@storybook/react";
import BookList, { BookListProps } from "./BookList";
import { exapmpleBookData } from "../../data/firebase/bookDetailsData";

const meta: Meta<BookListProps> = {
  title: "BookList",
  component: BookList,
};

export default meta;
type Story = StoryObj<BookListProps>;

export const Primary: Story = {
  args: {
    books: [exapmpleBookData],
  },
};
