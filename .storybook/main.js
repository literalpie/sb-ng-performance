module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-a11y",
    "@storybook/addon-essentials",
  ],
  core: {
    builder: "webpack5",
  },
  framework: '@storybook/angular',
  features: {
    storyStoreV7: false,
  },
};
