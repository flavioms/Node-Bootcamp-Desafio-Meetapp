import Meetup from '../models/Meetup';
import User from '../models/User';
import File from '../models/File';

class OrganizingController {
  async index(req, res) {
    const meetups = await Meetup.findAll({ 
      where: { user_id: req.userId }, 
      include: [
        {
          model: User,
          attributes: ['id', 'name', 'email'],
        },
        {
          model: File,
          attributes: ['id', 'path', 'url'],
        },
      ], 
    });
    return res.json(meetups);
  }
}

export default new OrganizingController();
