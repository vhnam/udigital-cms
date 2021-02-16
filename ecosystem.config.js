module.exports = {
  apps: [
    {
      name: "fake-udigital-cms",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "development",
        HOST: "0.0.0.0",
        PORT: 1337,
      },
      env_production: {
        NODE_ENV: "production",
        HOST: "0.0.0.0",
        PORT: 11337,
      },
    },
  ],
};
