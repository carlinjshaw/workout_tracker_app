const router = require('express').Router();
const sequelize = require('../config/connection');
const { Running, Pushups, Pullups } = require('../models');
// const withAuth = require('../utils/auth');


//get all running data for tracker page
//add withAuth as parameter when authentication is done
router.get('/running', (req, res) => {
    // console.log(req.session);
    console.log('======================');
    console.log(req.session.user_id)
    Running.findAll({
      where: {
        user_id: req.session.user_id
      },
      attributes: [
        'distance',
        'date'
        // [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
      ],
    //   include: [
    //     {
    //       model: Comment,
    //       attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
    //       include: {
    //         model: User,
    //         attributes: ['username']
    //       }
    //     },
    //     {
    //       model: User,
    //       attributes: ['username']
    //     }
    //   ]
    })
      .then(runningData => {
        const runsData = runningData.map(running => running.get({ plain: true }));
        const runData = JSON.stringify(runsData)
        console.log(runData)
        res.render('tracker', {runData});
        
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


  module.exports = router;