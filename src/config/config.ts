// Creates a configuration object which stores values
const Express_Config = {
    port: 4000
}

const MYSQL_Config = {
    user: "root",
    password: "password",
    database: "my_db"
}

// Put all configuration objects in this singleton for export
export const Configuration = {
    express_config: Express_Config,
    mysql_config: MYSQL_Config
}