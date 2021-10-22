const router = require('express').Router();

// We are using hardcoded data here, where would our data usually come from? Remember - we haven't yet set up a database or Sequelize in our app.
const dishes = [
  {
    dish_name: 'French Bread with Brie Cheese',
    description: 'French baguette with warm brie',
  },
  {
    dish_name: 'Cheese Plate with Spanish Chorizo',
    description:
      'Manchego, Iberico, Cabrales, fig jam, grapes, pecans, and Spanich Chorizo',
  }
];

// Get all dishes
router.get('/', async (req, res) => {
  res.render('all');
});

router.get('/dish/:num', async (req, res) => {
  return res.render('dish', dishes[req.params.num - 1]);
});
// TODO: Add a route called `/dish/:num` below

module.exports = router;



To make them render in HTML:
<div class="dish-card">
  <div class="dish-card-header">
    {{dish_name}}
  </div>
  <div class="card-body">
    {{description}}
  </div>
</div>
