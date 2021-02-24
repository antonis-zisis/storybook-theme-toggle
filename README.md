# Storybook Theme Toggle

This addon can be used to set a data attribute in Storybook's iframe html
element triggering a toggle between dark and light mode.

> This requires appropriate configuration in your project.

Use case:

You have a React app using `next-themes`, to manage theming, which adds a data
attribute on the html element, which you can use to style your app.

You bundle your css in a single file and load it in storybook.

```js
// .storybook/preview.ts
import './styles.css';
```

Your bundled css contains dark and light mode styles.

You have something like that in your main css file:

```css
:root {
    --background: white;
    --foreground: black;
}

[data-color-theme='dark'] {
    --background: black;
    --foreground: white;
}
```

> :warning: **Warning!** At the moment this addon only works with **data-color-theme** attribute name.
>
> This will be configurable in the future.

## Installation

Requires Storybook 6.1 or later.

Install the module using npm:

```bash
npm i -D storybook-theme-toggle
```

or with yarn:

```bash
yarn add -D storybook-theme-toggle
```

Then, add the following content to `.storybook/main.js`:

```js
module.exports = {
    addons: ['storybook-theme-toggle'],
};
```

## Usage

Click on the new theme toggle in the toolbar to toggle between dark and light mode.

> You may want to create a custom Layout component using your app's canvas styles for better results.
