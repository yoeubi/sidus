module.exports = (seqeulize, Datatypes) =>
    seqeulize.define(
        "user",
        {
            email: {
                type: Datatypes.STRING(320),
                allowNull: false
            }
        },
        {
            timestampa: true,
            paranoid: true
        }
    );
