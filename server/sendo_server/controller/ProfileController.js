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
  static async  updateProfile(req,res){
    try {
      const { name, address, phoneNumber, gender, birthday, image} = req.body;
      const userId = req.user.id;
      console.log('User ID:', userId);
      const result = await ProfileModel.updateProfile(userId, { name, address, phoneNumber, gender, birthday, image });
      res.status(200).json(result); 
    } catch (error) {
      console.error('Error update profile:', error);
      res.status(500).send('Internal Server Error');
    }
  }
  static async updateProfileOrder(req,res){
    try {
      const { name, address, phoneNumber} = req.body;
      const userId = req.user.id;
      console.log('User ID:', userId);
      const result = await ProfileModel.updateProfileOrder(userId, { name, address, phoneNumber});
      res.status(200).json(result); 
    } catch (error) {
      console.error('Error update profile:', error);
      res.status(500).send('Internal Server Error');
    }
  }
}
module.exports = ProfileController;
