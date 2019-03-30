# Code for Romania Public Website

[![Build Status](https://img.shields.io/travis/com/code4romania/code4.ro/master.svg?style=for-the-badge)](https://travis-ci.com/code4romania/code4.ro) [![GitHub contributors](https://img.shields.io/github/contributors/code4romania/code4.ro.svg?style=for-the-badge)](https://github.com/code4romania/code4.ro/graphs/contributors) [![GitHub last commit](https://img.shields.io/github/last-commit/code4romania/code4.ro.svg?style=for-the-badge)](https://github.com/code4romania/code4.ro/commits/master) [![License: MPL 2.0](https://img.shields.io/badge/license-MPL%202.0-brightgreen.svg?style=for-the-badge)](https://opensource.org/licenses/MPL-2.0)

## Prerequisite tools
* [Hugo](https://gohugo.io) >= v0.54.0
* [npm](https://nodejs.org/en/)

## Contributing

If you would like to contribute to one of our repositories, first identify the scale of what you would like to contribute. If it is small (grammar/spelling or a bug fix) feel free to start working on a fix. If you are submitting a feature or substantial code contribution, please discuss it with the team and ensure it follows the product roadmap.

* Fork it (https://github.com/code4romania/code4.ro/fork)
* Create your feature branch (git checkout -b feature/fooBar)
* Commit your changes (git commit -am 'Add some fooBar')
* Push to the branch (git push origin feature/fooBar)
* Create a new Pull Request

[Pending issues](https://github.com/code4romania/code4.ro/issues)

## Getting Started
First, you must have [node.js](https://nodejs.org/en/) and [Hugo](https://gohugo.io) installed on your system.
1. `git clone https://github.com/code4romania/code4.ro` to clone this repository
2. `cd code4.ro`
3. `npm install` to install dependencies
3. `npm run dev` to build the frontend (using [Webpack](https://webpack.js.org))
4. `hugo serve` to start a local server
    * This automatically runs `hugo` (with no arguments) behind the scenes, wihch builds the website and puts all the files in a directory called _public_. This directory is then statically served.
    * If your URL is any other than _localhost_ (e.g. you're serving the website form a cloud machine), you must use the `--baseURL [your url here]`. This is because the website uses absolute paths in hyperlinks, and it must know the URL from which it is served.

## How It Works
[Hugo](https://gohugo.io) is a static website engine. This means we write source files, which are used to generate HTML, JavaScript, and CSS, which we then serve statically. There is no backend involved whatsoever.

## Feedback

* Request a new feature on GitHub.
* Vote for popular feature requests.
* File a bug in GitHub Issues.
* Email us with other feedback contact@code4.ro

## License

This project is licensed under the MPL 2.0 License - see the [LICENSE](LICENSE) file for details

## About Code4Ro

Started in 2016, Code for Romania is a civic tech NGO, official member of the Code for All network. We have a community of over 500 volunteers (developers, ux/ui, communications, data scientists, graphic designers, devops, it security and more) who work pro-bono for developing digital solutions to solve social problems. #techforsocialgood. If you want to learn more details about our projects [visit our site](https://www.code4.ro/en/) or if you want to talk to one of our staff members, please e-mail us at contact@code4.ro.

Last, but not least, we rely on donations to ensure the infrastructure, logistics and management of our community that is widely spread accross 11 timezones, coding for social change to make Romania and the world a better place. If you want to support us, [you can do it here](https://code4.ro/en/donate/).
