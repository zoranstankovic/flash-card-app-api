// @route   GET api/v1/collections
// @desc    Get all user collections
// @access  private
exports.getCollections = (req, res, next) => {
  res.send("get all Collections");
};

// @route   GET api/v1/collections/:id
// @desc    Get user collection
// @access  private
exports.getCollection = (req, res, next) => {
  res.send("get single collection");
};

// @route   POST api/v1/collections
// @desc    Create new user collection
// @access  private
exports.createCollection = (req, res, next) => {
  res.send("create new Collection");
};

// @route   PUT api/v1/collections/:id
// @desc    Update user collection
// @access  private
exports.updateCollection = (req, res, next) => {
  res.send("update collection");
};

// @route   DELETE api/v1/collections/:id
// @desc    Delete user collection
// @access  private
exports.deleteCollection = (req, res, next) => {
  res.send("delete collection");
};
