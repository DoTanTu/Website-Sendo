function verificationEmail(verificationLink, phoneLink) {
    return `
      <p>Thank you for registering!</p>
      <p>Please click the following link to verify your email: <a href="${verificationLink}">${verificationLink}</a></p>
      <br/> 
      </br>
      <p>If you are using a phone, please use the following link to verify your email: <a href="${phoneLink}">${phoneLink}</a></p>
    `;
}
  
module.exports = verificationEmail;
  