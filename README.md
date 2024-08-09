# selenium-javascript

## Overview

This repository contains automation scripts for web testing using Selenium with JavaScript. The tests are designed to ensure that web applications function correctly and provide a good user experience.

## Features

- Web application testing using Selenium WebDriver.
- JavaScript-based test scripts.
- Integrating Mocha as a framework and chai for assertation.
- Integration with Allure Reports for detailed test reporting.
- Continuous integration with GitHub Actions for automated testing.


## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/bandurabohdan/selenium-javascript.git
    ```

2. Navigate into the project directory:

    ```bash
    cd selenium-javascript
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

## Report

The report is located at [GitHub Pages](https://bandurabohdan.github.io/selenium-javascript/)

## Usage

### Running Tests

To run the tests, use the following command:

```bash
npm run test
```

### Generating Allure Reports

To generate an Allure report, use the following command:

```bash
npm run build:report
```

Ensure that the `allure-commandline` package is installed for generating the reports.

## GitHub Actions

This project is set up with GitHub Actions for continuous integration. You can find the configuration in the `.github/workflows` directory.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

## Contact

For any questions or issues, please contact:

- **Email**: bandurabogdan@gmail.com
- **GitHub**: [bandurabohdan](https://github.com/bandurabohdan)
