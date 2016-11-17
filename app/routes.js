var Review = require('./models/review');

module.exports = function(app) {

	app.get('/api/reviews', function(req, res) {
		Review.find(function(err, reviews) {
			if (err)
			res.send(err)
			res.json(reviews);
		});
	});

	app.post('/api/reviews', function(req, res) {
		Review.create({
			name: req.body.name,
			food: req.body.food,
			restaurant: req.body.restaurant,
			price: req.body.price,
			img: req.body.img,
		}, function(err, review) {
			if (err)
			res.send(err);
			Review.find(function(err, reviews) {
				if (err)
				res.send(err)
				res.json(reviews);
			});
		});
	});

	app.delete('/api/reviews/:review_id', function(req, res) {
		Review.remove({
			_id : req.params.review_id
		}, function(err, review) {
			if (err)
			res.send(err);
			Review.find(function(err, reviews) {
				if (err)
				res.send(err)
				res.json(reviews);
			});
		});
	});

	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});
};
