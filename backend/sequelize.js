import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage:
    "/Users/thibautmoncourtois/Documents/projects/todo-app/backend/db.sqlite",
});

export default sequelize;
