const { postService } = require('../services');

const insertPostCont = async (req, res) => {
  const dataPost = req.body;
  const { id } = req.user;
  const { status, data } = await postService.insertPostServ(dataPost, id);
  res.status(status).json(data);
};

module.exports = {
  insertPostCont,
};