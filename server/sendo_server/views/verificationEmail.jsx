function verificationEmail(verificationLink) {
    return `
      <p>Thank you for registering!</p>
      <p>Please click the following link to verify your email: <a href="${verificationLink}">${verificationLink}</a></p>
    `;
}
  
module.exports = verificationEmail;
  