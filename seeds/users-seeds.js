const { Users } = require("../models");

const usersData = [
    {
        email: "jondoe@gmail.com",
        password: "123456789"
    },
    {
        email: "sandybeach@aol.com",
        password: "123#ndjeu"
    },
    {
        email: "johannbgullan@me.com",
        password: "Gugehnheim42"
    }
];

const seedUsers = () => Users.bulkCreate(usersData);

module.exports = seedUsers;
