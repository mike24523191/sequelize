export default (sequelize,DataTypes) => {
    const users = sequelize.define('users',{
        id: {
        type : DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: ture,
        },
        email: {
            type:DataType.STRING(20),
            unique:ture,
        },
        password:{
            type: DataType.STRING(60),
        },
        email_verified: {
            type : DataType.DATE,
        },
    },
        {
            sequelize,
            modelName
        }

    })
    
}