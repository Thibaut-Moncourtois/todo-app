import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "postgres",
  username: "votre_nom_utilisateur",
  password: "votre_mot_de_passe",
  host: "localhost",
  database: "votre_base_de_donnees",
});

export default sequelize;
