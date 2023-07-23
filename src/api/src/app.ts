import { HostBuilder, ConfigurationBuilder, Logger, LogType } from "@miracledevs/paradigm-express-webapi";
import { Server } from "./server";

new HostBuilder()
    .useConfiguration((config: ConfigurationBuilder) => {
        config.addJsonFile("./configuration.json").addEnvironmentFile("./.env", "fastwork_api__").addEnvironmentVariables("fastwork_api__");
    })
    .useLogging((logger: Logger) => logger.setMinimumLevel(LogType.Trace))
    .build(Server)
    .start();
