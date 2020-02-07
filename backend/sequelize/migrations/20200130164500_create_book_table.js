module.exports.up = (queryInterface, DataTypes) => {
  return queryInterface.createTable(
    "books",
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoincrement: true
      },
      title: {
        type: DataTypes.STRING
      }
    },
    {
      charset: "utf8"
    }
  );
};

module.exports.down = (queryInterface, DataTypes) =>
  queryInterface.dropTable("books");
