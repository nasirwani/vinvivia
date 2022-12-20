module.exports = function paginatedResults(model) {
  return async (req, res, next) => {
    const page = parseInt(req.query.page);
    const count = parseInt(req.query.count);

    const startIndex = (page - 1) * count;
    const endIndex = page * count;

    const results = {};
    if (page <= 0 || count < 0)
      return res
        .status(400)
        .send({ error: "Query Parameters cannot contain negative value!" });

    if (endIndex < (await model.countDocuments().exec())) {
      results.next = {
        page: page + 1,
        limit: count,
      };
    }

    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: count,
      };
    }
    try {
      results.results = await model.find().limit(count).skip(startIndex).exec();
      // console.log(results);
      res.paginatedResults = results;
      next();
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  };
};
