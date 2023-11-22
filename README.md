## Package Name: vite-css-cloak

### Description

This plugin simply obfuscates css classnames to prevent them from being easily identifiable in the final output, providing an additional layer of security for your styles.

Also, it reduces the size of the output and protects the markup, resulting in fewer bytes over the wire.

### Installation

You can install vite-css-cloak via npm or yarn:

```bash
npm install vite-css-cloak
```

or

```bash
yarn add vite-css-cloak
```

### Usage

To use vite-css-cloak, simply import and use the plugin in your Vite configuration file (vite.config.js):

### Options

The following options are available for the Vite CSS Cloak plugin:

- `enabled`: A boolean value to enable or disable the plugin. (optional, default: process.env.NODE_ENV === 'production')
- `prefix`: A string value to set the prefix for the CSS class names. (required)
- `classNameGenerator`: A function that takes an element and returns a string to generate custom class names. (optional)

```javascript
import createViteCssCloakPlugin from "vite-css-cloak";

export default {
  plugins: [
    createViteCssCloakPlugin({
      enabled: true,
      prefix: "my-prefix",
      classNameGenerator: (element) => `my-class-${element}`,
    }),
  ],
};
```

## Pull Requests

Please open an issue to discuss what you would like to change.

## Contribution

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
