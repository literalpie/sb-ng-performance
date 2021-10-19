module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/angular",
  ],
  core: {
    builder: "webpack5",
  },
  framework: '@storybook/angular',
  features: {
    storyStoreV7: true,
  },
};
