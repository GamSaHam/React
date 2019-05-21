import Raven from "raven-js";

function init() {
  Raven.config("https://a1198a185d814170be5dc4522b96d6b8@sentry.io/1464042", {
    release: "1-0-0",
    environment: "development-test"
  }).install();
}

function log() {
  Raven.captureException(error);
}

export default {
  init,
  log
};
