# TestCafe-UI-Automation

For detailed documentation of TestCafe and its related API references go here https://devexpress.github.io/testcafe/documentation/getting-started/

This repo contains all the basic setup required to get started with TestCafe for UI e2e automation. The tests are written in `Typescript` and project has the below files and folders defined so that a developer can start writing tests right away.

- `tests` - All of the e2e tests goes here
- `actions` - The place to define the test components or user actions using the page-object pattern. `ui.actions` file should contain all the ui interactions and the `api.actions` file should contain all the api actions needed for tests
- `e2e/utils/config.ts` - To support different configs for running tests in different evironments
- `.testcaferc.json` - Contains all the basic configurations for TestCafe including report generation, locator timeouts, video recording etc
- `e2e/tsconfig.json` - Typescript configs specific to the e2e files
- `Dockerfile.e2e` & `docker-compose.e2e.yml` - Docker setup to run e2e inside containerized environment to mimic CI execution locally
- `report-generator.js` - To generate custom test reports

## Installation

- Install node

```
https://nodejs.org/en/
```

- Install yarn

```
https://classic.yarnpkg.com/en/docs/install
```

## Environment Setup

- Run yarn to install the node packages

```
yarn
```

## Test Execution

To run the test on the browser of choice run

```
yarn e2e chrome
```

Supported browser alias are: `chrome, firefox, ie, edge, safari`. You can run on any of these browser as long as it is installed on your local machine.

To run in multiple browsers simultaneously run

```
yarn e2e chrome,firefox
```

To run tests in parallel, in the below command it opens 3 instances of chrome browser to run tests, you can change the number of instances based on your preference. 

```
yarn e2e --concurrency 3 chrome
```

To generate the test reports after the execution run:

```
yarn reports
```

NOTE: Tests are configured by default to run on the `local` configuration defined in the `e2e/utils/config.ts` file. In order to change that user has to set the TEST_ENV variable in a `.env` file. To do that please make a copy of the `example.env` file and rename it to `.env`.

To run testcafe with full debug stacktrace mode use the command

```
DEBUG=testcafe:* yarn testcafe chrome
```

# Run e2e tests inside docker container

The easiest way to run e2e tests with Testcafe is to run them locally using `yarn e2e` command. However there can be instances where we might to need to run the tests inside a container environment to replicate the way e2e tests are run in the CI. One of the main reason to do that is to reproduce certain e2e test failures which might have occurred due to the browser settings or environmental reasons within the CI execution.

This readme describes how to achieve that.

## Dockerfile.e2e

The `Dockerfile.e2e` dockerfile takes care of creating the browser environment required by TestCafe to run the tests. We use the `circleci/node:14-browsers` as the base image which consists of the latest version of `Chrome` and `Firefox` browser for our e2e tests.

## docker-compose.e2e.yml

The `docker-compose.e2e.yml` file consists of all the instructions to run the e2e tests inside the container environment.

You can modify the `yarn e2e` command to `yarn e2e {browser name}` if you want to run the tests on any specific browser. But default the tests will run on the Chrome browser

## Environment configs

The `docker-compose.e2e.yml` needs environment configs to be defined as a `e2e.env` file inside the `docker` directory in the root folder.

Make sure that you set the right values inside the `e2e.env` file depending on the cloud environment you want to run the tests on.

## Execution

To run the tests run the below command

```
docker-compose -f docker-compose.e2e.yml run --rm e2e
```

In case of a test failure, you will be able to view the test execution recordings inside the `reports/screen-captures` folder. This will be of great help when you want to figure out why a test failed.
