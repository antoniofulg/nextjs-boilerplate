module.exports = {
  stories: ['../src/components/**/*.mdx', '../src/components/**/stories.tsx'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs/register',
  ],
}
