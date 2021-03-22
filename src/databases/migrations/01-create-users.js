export async function up(queryInterface, squelize) {
    await queryInterface.createTable('users',{
        id: {
            type:squelize.UUID,
            primaryKey: true,
        },
        email: {
            type:squelize.STRING(20),
            unique: true,
        },
        password: {
            type:squelize.STRING(60),
        },
        email_verified: {
            type:squelize.DATE,
        },
        createdAt: {
            type:squelize.DATE,
            allowNull:false,
        },
        updateAt: {
            type:squelize.DATE,
            allowNull:false,
        },
    })
}


export async function up(queryInterface, squelize) {
    await queryInterface.createTable('users');
}