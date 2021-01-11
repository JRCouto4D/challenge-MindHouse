import Image from '../models/Image';

class FileControlle {
  async store(req, res) {
    const { name } = req.body;

    const image = await Image.create({
      name,
    });

    return res.json(image);
  }
}

export default new FileControlle();
