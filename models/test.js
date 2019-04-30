module.exports = (sequelize, DataTypes) =>
    sequelize.define(
        "test",
        {
            name: {
                type: dataTypes.STRING(50),
                allowNull: false
            }
        },
        { timestamp: true, paranoid: true }
    );
