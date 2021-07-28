const { Running } =require('../models');

const runningdata = [
    {
        amount: 1.5,
        date: '01/01/2021'
    },
    {
        amount: 1.7,
        date: '01/05/2021'
    },
    {
        amount: 2.2,
        date: '01/10/2021'
    },
    {
        amount: 2.0,
        date: '01/15/2021'
    },
    {
        amount: 2.5,
        date: '01/20/2021'
    }
]

const seedRunning = () => Running.bulkCreate(runningdata);

module.exports = seedRunning