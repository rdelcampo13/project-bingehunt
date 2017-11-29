var db = require('../models');

var exports = module.exports = {}

exports.home = function(req, res) {
	var binges = [
		{
			img_url: "https://www.google.com/imgres?imgurl=http%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DORT.TH_470633631%26pid%3D1.12%26eid%3DG.470633631&imgrefurl=http%3A%2F%2Fwww.bing.com%2Fimages%2Fsearch%255C%3Fq%3Dusa%2Bmap&docid=BJnOzHXsxNB6aM&tbnid=pBNS94IUuy7O3M%3A&vet=10ahUKEwip68z_oczXAhVfHGMKHWQaDa0QMwjtASgMMAw..i&w=3587&h=1358&bih=559&biw=1163&q=images&ved=0ahUKEwip68z_oczXAhVfHGMKHWQaDa0QMwjtASgMMAw&iact=mrc&uact=8",
			title: "sinan",
			short_desc: "description of a movie that is short and concise"
		},
		{
			img_url: "https://www.google.com/imgres?imgurl=http%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DORT.TH_470633631%26pid%3D1.12%26eid%3DG.470633631&imgrefurl=http%3A%2F%2Fwww.bing.com%2Fimages%2Fsearch%255C%3Fq%3Dusa%2Bmap&docid=BJnOzHXsxNB6aM&tbnid=pBNS94IUuy7O3M%3A&vet=10ahUKEwip68z_oczXAhVfHGMKHWQaDa0QMwjtASgMMAw..i&w=3587&h=1358&bih=559&biw=1163&q=images&ved=0ahUKEwip68z_oczXAhVfHGMKHWQaDa0QMwjtASgMMAw&iact=mrc&uact=8",
			title: "a title of a movie",
			short_desc: "description of a movie that is short and concise"
		},
		{
			img_url: "https://www.google.com/imgres?imgurl=http%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DORT.TH_470633631%26pid%3D1.12%26eid%3DG.470633631&imgrefurl=http%3A%2F%2Fwww.bing.com%2Fimages%2Fsearch%255C%3Fq%3Dusa%2Bmap&docid=BJnOzHXsxNB6aM&tbnid=pBNS94IUuy7O3M%3A&vet=10ahUKEwip68z_oczXAhVfHGMKHWQaDa0QMwjtASgMMAw..i&w=3587&h=1358&bih=559&biw=1163&q=images&ved=0ahUKEwip68z_oczXAhVfHGMKHWQaDa0QMwjtASgMMAw&iact=mrc&uact=8",
			title: "a title of a movie",
			short_desc: "description of a movie that is short and concise"
		},
		{
			img_url: "https://www.google.com/imgres?imgurl=http%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DORT.TH_470633631%26pid%3D1.12%26eid%3DG.470633631&imgrefurl=http%3A%2F%2Fwww.bing.com%2Fimages%2Fsearch%255C%3Fq%3Dusa%2Bmap&docid=BJnOzHXsxNB6aM&tbnid=pBNS94IUuy7O3M%3A&vet=10ahUKEwip68z_oczXAhVfHGMKHWQaDa0QMwjtASgMMAw..i&w=3587&h=1358&bih=559&biw=1163&q=images&ved=0ahUKEwip68z_oczXAhVfHGMKHWQaDa0QMwjtASgMMAw&iact=mrc&uact=8",
			title: "a title of a movie",
			short_desc: "description of a movie that is short and concise"
		},
		{
			img_url: "https://www.google.com/imgres?imgurl=http%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DORT.TH_470633631%26pid%3D1.12%26eid%3DG.470633631&imgrefurl=http%3A%2F%2Fwww.bing.com%2Fimages%2Fsearch%255C%3Fq%3Dusa%2Bmap&docid=BJnOzHXsxNB6aM&tbnid=pBNS94IUuy7O3M%3A&vet=10ahUKEwip68z_oczXAhVfHGMKHWQaDa0QMwjtASgMMAw..i&w=3587&h=1358&bih=559&biw=1163&q=images&ved=0ahUKEwip68z_oczXAhVfHGMKHWQaDa0QMwjtASgMMAw&iact=mrc&uact=8",
			title: "a title of a movie",
			short_desc: "description of a movie that is short and concise"
		}
	]
	res.render('home', { isAuthenticated: req.isAuthenticated(), binges: binges});
};

exports.add = function(req, res) {
	res.render('add', { isAuthenticated: req.isAuthenticated() });
};

exports.dashboard = function(req, res) {
	// console.log(req.user);
	res.render('dashboard', { user: req.user });
};

