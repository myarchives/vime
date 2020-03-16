module.exports = {
  stories: [
    '../packages/vime-docs/stories/**/*.stories.js',
    '../packages/vime-docs/stories/**/*.stories.mdx'
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-links/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-a11y/register',
    '@storybook/addon-viewport/register'
  ]
};