# dependabot-interval

![build](https://github.com/ryohidaka/dependabot-interval/workflows/Build/badge.svg)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Action to change the value of interval in dependabot.yml

## Usage

```yml
permissions:
  contents: write

- name: Action Name
  uses: ryohidaka/dependabot-interval@v1.1
    with:
      interval: "daily"
      message: "Update dependabot.yml interval"

```

## Inputs

### `interval`

**Required** Interval value to be specified.

### `message`

**Optional** String to be specified in the commit message.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
