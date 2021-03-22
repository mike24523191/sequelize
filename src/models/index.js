import path from 'path';
import fs from 'fs';
import Sequelize from 'sequelize';
import _ from 'lodash';

const basename = path.basename(__filename);
const sequelize = new Sequelize('node','root','12345678', {
    host:"127.0.0.1",
    dialect:'mysql'
});

const db = {};

fs.
 readdirSync(__dirname)
 .filter((file) => (file.indexOf('.') !== 0) && (file.slice(-3) === '.js'))
 .forEach((file) => {
     const model = _.invoke(sequelize,'import',path.resolve(__dirname,file));
     db[model.name] = model;
 });

 Object.keys(db).forEach(modelName => {
     if(db[modelName].associate) {
         db[modelName].associate(db);
     }
 });

 db.sequelize = sequelize;
 db.Sequelize = Sequelize;

 export default db;
