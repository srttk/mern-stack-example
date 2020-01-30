import { Model, DataTypes, BuildOptions } from 'sequelize'
import db from '../db'

class User extends Model {
    public id!:number
    public firstName!: string
    public lastName!: string
    public password!: string
    public email!: string


    

}

  User.init({
      id:{
          type: DataTypes.INTEGER.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
      },
      firstName: {
          type: DataTypes.STRING,
          allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
      email: {
          type: DataTypes.STRING,
          unique: true,
          allowNull: false
      },
      password: {
          type: DataTypes.STRING
      }
  }, {
      sequelize: db,
      tableName: "users"
  })



  export default User;