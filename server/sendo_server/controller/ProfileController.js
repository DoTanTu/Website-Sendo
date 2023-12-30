const ProfileModel = require('../model/ProfileModel');
class ProfileController{
    static getProfileUser(req, res) {
        const idUser = req.params.id;
        ProfileModel.findInfor(idUser, (error, result) => {
          if (error) {
            console.error('Error getting category by ID:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
          }
    
          if (!result || result.length === 0) {
            return res.status(404).json({ error: 'Category not found' });
          }
    
          res.status(200).json({ data: result[0] });
        });
      }
}
module.exports = ProfileController;