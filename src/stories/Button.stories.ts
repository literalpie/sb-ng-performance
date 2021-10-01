// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { CommonModule } from "@angular/common";
import { moduleMetadata } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular";
import Button from "./button.component";

interface StoryArgs {
  disabled: boolean;
}

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],
} as Meta<Partial<StoryArgs>>;

const Template: Story<Button> = (args: Button) => ({
  props: args,
});
