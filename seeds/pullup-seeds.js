const { Pullups } =require('../models');

const pullupsdata = [
    {
        amount: 10,
        date: '01/01/2021',
        user_id: 1
    },
    {
        amount: 15,
        date: '01/05/2021',
        user_id: 1
    },
    {
        amount: 12,
        date: '01/10/2021',
        user_id: 1
    },
    {
        amount: 8,
        date: '01/15/2021',
        user_id: 2
    },
    {
        amount: 11,
        date: '01/20/2021',
        user_id: 2
    },
    {
        amount: 9,
        date: '01/20/2021',
        user_id: 2
    },
    {
        amount: 5,
        date: '01/20/2021',
        user_id: 3
    },
    {
        amount: 4,
        date: '01/20/2021',
        user_id: 3
    },
    {
        amount: 7,
        date: '01/20/2021',
        user_id: 3
    }
]

const seedPullups = () => Pullups.bulkCreate(pullupsdata);

module.exports = seedPullups