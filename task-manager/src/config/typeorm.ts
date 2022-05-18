import { DataSource } from "typeorm";

let AppDataSource = {} as DataSource;

if (process.env.ENVIRONMENT !== "TEST") {
  AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "adm",
    password: "test",
    database: "postgresDB",
    entities: ["./src/entities/*.ts"],
    migrations: ["./src/migrations/*.ts"],
  });

  AppDataSource.initialize()
    .then(() => {
      console.log("Data Source has been initialized!");
    })
    .catch((err) => {
      console.error("Error during Data Source initialization", err);
    });
}

export default AppDataSource;
