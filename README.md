# dependabot-interval

![build](https://github.com/ryohidaka/dependabot-interval/workflows/Build/badge.svg)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/B0B6TVH92)

Action to change the value of interval in dependabot.yml

## Usage

```yml
permissions:
  contents: write

- name: Action Name
  uses: ryohidaka/dependabot-interval@v1
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
