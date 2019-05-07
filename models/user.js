module.exports = (seqeulize, Datatypes) =>
    seqeulize.define(
        "user",
        {
            // 이름
            name: {
                type: Datatypes.STRING(45),
                allowNull: false
            },
            // 이메일
            email: {
                type: Datatypes.STRING(256),
                allowNull: false
            },
            // 비밀번호
            password: {
                type: Datatypes.STRING(100),
                allowNull: false
            },
            // 직군
            job: {
                type: Datatypes.STRING(45),
                allowNull: false
            },
            // 직무
            duty: {
                type: Datatypes.STRING(255),
                allowNull: false
            },
            // 경력
            career: {
                type: Datatypes.STRING(45),
                allowNull: false
            },
            task: {
                type: Datatypes.STRING(45),
                allowNull: true
            },
            attachments: {
                type: Datatypes.STRING(300),
                allowNull: true
            },
            image: {
                type: Datatypes.STRING(300),
                allowNull: true
            }
        },
        {
            timestamps: true,
            paranoid: true
        }
    );
