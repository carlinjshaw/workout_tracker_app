const { Pullups } =require('../models');

const pullupsdata = [
    {
        amount: 10,
        date: '01/01/2021'
    },
    {
        amount: 15,
        date: '01/05/2021'
    },
    {
        amount: 20,
        date: '01/10/2021'
    },
    {
        amount: 23,
        date: '01/15/2021'
    },
    {
        amount: 20,
        date: '01/20/2021'
    }
]

const seedPullups = () => Pullups.bulkCreate(pullupsdata);

module.exports = seedPullups