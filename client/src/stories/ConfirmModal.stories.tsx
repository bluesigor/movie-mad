import { ComponentStory, ComponentMeta } from "@storybook/react";

import ConfirmModal from "../components/ConfirmModal/ConfirmModal";

export default {
  title: "Example/Confirm Modal",
  component: ConfirmModal,
} as ComponentMeta<typeof ConfirmModal>;

const Template: ComponentStory<typeof ConfirmModal> = (args) => (
  <>
    <ConfirmModal {...args} />
  </>
);

export const Primary = Template.bind({});
Primary.args = {
  // movie: movies[0],
  open: true,
  title: "Favourite movies",
  url: 'http://localhost:3000/recommend?title="my movies"&ids=213213,234234',
  onClose: () => {},
};
