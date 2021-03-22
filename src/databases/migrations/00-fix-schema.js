export async function up(queryInterface){
    await queryInterface.squelize.query(`ALTER DATABASE ${queryInterface.sequelize.config.database} CHARACTER SET`)
}