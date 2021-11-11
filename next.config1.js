const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "your username",
        mongodb_password: "your password",
        mongodb_clustername: "cluster name",
        mongodb_database: "database name",
      },
    };
  }
};
