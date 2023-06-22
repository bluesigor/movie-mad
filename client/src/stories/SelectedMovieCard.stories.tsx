import { ComponentStory, ComponentMeta } from "@storybook/react";

import SelectedMovieCard from "../components/SelectedMovieCard/SelectedMovieCard";

import { movies } from "./stub";

export default {
  title: "Card/Movie card selected",
  component: SelectedMovieCard,
} as ComponentMeta<typeof SelectedMovieCard>;

const Template: ComponentStory<typeof SelectedMovieCard> = (args) => (
  <>
    <SelectedMovieCard {...args} />
  </>
);

export const Primary = Template.bind({});

Primary.args = {
  // movie: movies[0],
};
