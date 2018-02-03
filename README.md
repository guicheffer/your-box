# your box
> Code test in react+webpack+html+js+stylus+bla+bla+bla for smartbox

## Introduction
This mini-project is to shows up my knowledge with hype frameworks, libraries, React data treatment, styles, javascript, modern bundles and etc.

![image](https://user-images.githubusercontent.com/5280832/35598504-f25b835c-060a-11e8-9467-270f3b549442.png)

**Preview**:
_soon_

## Install
_soon_

## Run
- To build the project, just `make build`;
- To watch for updates on the project, just `make watch`;
- To have the project clean (clear build folder), just run `make clean`;
- To clear build folder, install things AND build the project, run this **MAGIC** command: `make start`
- If you have any help with Makefile's **make** commands, please do: `make help`

**You feeling tired to do those run tasks?**
Just access [here](https://your-box-by-guicheffer.herokuapp.com/): https://your-box-by-guicheffer.herokuapp.com/**
⬆️ &nbsp; This project was deployed on [Heroku](https://dashboard.heroku.com/) 🙂

If you want to deploy this project on your Heroku account, simply click on the button below:

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Testing

### EE2 tests
This project contains _End to End_ tests that are used to test basic components visibilities. It wasn't implemented in any CI such the Heroku/CircleCI BUT it runs perfectly what you want to be tested with the command `make test` after having a _Chromedriver_ running on your host (instructions below). Project structure today looks like:
```
your-box-by-guicheffer/
|       |- (...)
|       |- tests/
|            |- e2e/
|            |   |- reports/
|            |   |- screenshots/
|            |   |- specs
|            |   |    |- components
|            |   |    |      |- list.js
|            |   |- nightwatch.conf.js
|       |- (...)
```


As mentioned before, this tests were based on _Chromedriver_ and _Headless Chrome_, which means that now they are dependencies, fortunately the _Chromedriver_ can be installed via `yarn` and it is already into the project, although chrome has to be installed according to your Operating System:
   - **OSX:** install [Chrome Canary](https://www.google.com/chrome/browser/canary.html?platform=mac)
   - **Linux:** install the latest version of [Chrome](https://www.google.com/chrome/browser/desktop/index.html) or [Chromium](https://www.chromium.org/getting-involved/download-chromium)

Once you've installed it, you should just:
- run _Chromedriver_ server via the command: `make run-chrome`
- run the tests (components): `make test`

**obs**. _you don't need the `watch` command on the project to be running the tests locally!_

### Unit tests
Unfortunately saw no ~~advantages on~~ useful unit tests for this project.

## 👨🏻‍💻 Development process

### Technologies
Some of the technologies stack was handpicked because of preference in working with!
Check below some of the tools and tech stack with their screenshots on it too!

- I used [Atom](https://atom.io/) for the editor.
	![inception](https://user-images.githubusercontent.com/5280832/35592409-0e278d2c-05f4-11e8-880c-594899d212a5.png)

	~~what a inception thing~~

- I used a [Kanban board](https://github.com/guicheffer/your-box/projects/3?fullscreen=true) for the project management at all, _GitHub Project Board_ was the one. You can check right here how my Kanban worked in details: https://github.com/guicheffer/your-box/projects/3?fullscreen=true
![kanban thing](https://user-images.githubusercontent.com/5280832/35592580-9cd1ea40-05f4-11e8-9830-d98547d25cf7.png)
- I chose [Webpack](https://webpack.js.org/) for bundling this project assets once I had to do 3 different exercises inside only one repo (better to read and review). Actually many advantages were included on this decision!
- I chose [React](https://reactjs.org/) because I'm familiar with and its the most fast way to begin it from zero.

### What makes/made me happy on every project (including this code challenge)
- CSS Animations;
- Order attributes in CSS alphabetically;
- Atomic commits;
- Commit on master ... (kidding, in general...**PRs**, **please** 😜);
- Usage of [caniuse.com](caniuse.com) (I mentioned that on the smartbox interview...I really searched and still search for some attributes in CSS sometimes);
- Usage of new technologies, choice among frameworks and libraries;
	- Vue, React, Angular and Knockout...love 'em 🖤
- Usage of Mobile First designing and development;
- To Study in general;
- Usage of emojis ❤️ &nbsp; (I really **LOVE** this thingy);

## TO DO
[Kanban Backlog](https://github.com/guicheffer/your-box/projects/3#column-2128623) The `To Do` column you can check here:
https://github.com/guicheffer/your-box/projects/3#column-2128623

**Extras**:

- [ ] Style
	- [ ] Add a critical style into pages
	- [ ] Create views with A/B tests config
- [ ] Setup
	- [ ] Circleci or similar tool
- [ ] Improve error pages
	- [ ] 404 style
	- [ ] 500 style
- [ ] Add needed unit tests
- [ ] Add extra e2e tests
- [x] Make a nice-to-read README.md
