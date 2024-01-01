const ProfileModel = require('../model/ProfileModel');

class ProfileController {
  static getProfileUser(req, res) {
    const idUser = req.user.id;
    
    ProfileModel.findInfor(idUser, (error, result) => {
      if (error) {
        console.error('Error getting profile by ID:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
      }

      if (!result || result.length === 0) {
        return res.status(404).json({ error: 'Profile not found' });
      }

      res.status(200).json({ data: result[0] });
    });
  }
}

module.exports = ProfileController;
