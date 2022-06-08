import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "host.docker.internal",
    port: 5432,
    username: "leooreina",
    password: "docker",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: ['src/entity/*.ts'],
    migrations: [],
    subscribers: [],
})
