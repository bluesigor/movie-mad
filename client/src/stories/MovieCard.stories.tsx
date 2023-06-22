import { ComponentStory, ComponentMeta } from "@storybook/react";
import MovieCard from "../components/MovieCard";
import { movies } from "./stub";

export default {
  title: "Example/Movie Card",
  component: MovieCard,
} as ComponentMeta<typeof MovieCard>;

const Template: ComponentStory<typeof MovieCard> = (args) => (
  <>
    <MovieCard {...args} />
  </>
);

export const Primary = Template.bind({});
Primary.args = {
  // movie: movies[0],
};
