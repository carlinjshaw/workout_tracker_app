const { Pushups } =require('../models');

const pushupsdata = [
    {
        amount: 13,
        date: '01/01/2021'
    },
    {
        amount: 15,
        date: '01/05/2021'
    },
    {
        amount: 25,
        date: '01/10/2021'
    },
    {
        amount: 20,
        date: '01/15/2021'
    },
    {
        amount: 30,
        date: '01/20/2021'
    }
]

const seedPushups = () => Pushups.bulkCreate(pushupsdata);

module.exports = seedPushups