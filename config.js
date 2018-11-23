let isProd = process.env.NODE_ENV === 'production';

module.exports = {
  REST_ENDPOINT: JSON.stringify('http://loveplanet.live/wp-json/wp/v2'),
  POSTS_PER_PAGE: JSON.stringify(9),
  GA_TRACKING_ID: JSON.stringify('UA-129495864-1'),
  REQUEST_CACHE_MAX: JSON.stringify(150)
  //https://wptavern.com/wp-json/wp/v2
  //http://loveplanet.live/wp-json/wp/v2
};
