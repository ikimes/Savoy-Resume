var express = require('express');
var router = express.Router();
var actions = require('./../models');
const app = express();

/* GET home page. */
router.get('/', async function(req, res, next) {
  var data = await actions.getPosts();
  console.log(data);
  res.render('index',{data});
});

router.get('/posts/:id', async function(req, res, next) {
    var data = await actions.getPost(req.params.id);
    res.render('post', {data});
  });


router.get('/courses', function(req, res, next) {
  //no longer used
res.render('courses');
});

router.get('/experience', function(req, res, next) {
  //no longer used
  res.render('exp');
});

router.get('/exp', function(req, res, next) {
  //no longer used
  res.render('exp');
});


router.get('/grants', function(req, res, next) {
  //no longer used
  res.render('grants');
});

router.get('/blog', async function(req, res, next) {
  var data = await actions.getPosts();
  console.log(data);
  res.render('blog',{data});
});

router.get('/blog2', function(req, res, next) {
  //no longer used
  res.render('blog2');
});

router.get('/cdemo', function(req, res, next) {
  //no longer used
  res.render('cdemo');
});

// router.get('/publications', function(req, res, next) {
//   //no longer used
//   res.render('publications');
// });

router.get('/addPost', function(req, res, next) {
  res.render('addBlog');
});

router.get('/allposts',  async function(req, res, next) {
  var data = await actions.getAllPosts();
  res.render('allposts',{data});
});

router.post('/submit', async function(req, res, next) {
  var id = await actions.addToDb(req.body.title,req.body.subtitle,req.body.postBody,req.body.imageLink);
  res.redirect(`/posts/${id}`);
});

// router.post('/sendEmail', async function(req, res, next) {
//   var id = await actions.sendEmail(req.body.message, req.body.email);
//   res.redirect(`index`);
// });

// router.get('/resume', async function(req, res, next) {
//  var data = fs.readFileSync('./views/savoyresume.pdf');
//  res.contentType('application/pdf');
//  res.send(data);
// })





module.exports = router;
