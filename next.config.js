const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "yousefalsaaidah",
        mongodb_password: "M%40b%40di20",
        mongodb_clustername: "mimicucu",
        mongodb_database: "my-blog-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "yousefalsaaidah",
      mongodb_password: "M%40b%40di20",
      mongodb_clustername: "mimicucu",
      mongodb_database: "my-blog",
    },
  };
};
