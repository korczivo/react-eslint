# Eslint config for React APP's

[![npm version](https://img.shields.io/npm/v/my-custom-eslint-config.svg)](https://www.npmjs.com/package/my-custom-eslint-config)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A customizable ESLint configuration package for consistent code quality across projects.

## Installation

```bash
npm install korczivo-eslint-react --save-dev
```

### Usage

1. Install the package as a development dependency in your project:

```bash
npm install korczivo-eslint-react --save-dev
```
2. Create an index.json or index.jsonon file in the root of your project and extend the configuration:
```JSON
{
  "extends": "korczivo-eslint-react"
  // Add additional rules or overrides as needed
} 
```
3. Run ESLint on your project:
```bash
npx eslint . 
```

### Customization


This ESLint configuration is designed to be easily customizable to suit your project's specific needs. You can override or add rules by modifying your project's index.json or index.jsonon file.

For more details on configuring ESLint, refer to the [ESLint Configuration Documentation](https://eslint.org/docs/latest/use/configure/).

### Features

* Provides a solid foundation for maintaining code quality.
* Preconfigured rules for common scenarios.
* Regularly updated to keep up with best practices.


### Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.