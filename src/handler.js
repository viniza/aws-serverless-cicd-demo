const crypto = require('crypto');

// This function is intended for generation of temporary tokens, not passwords 
function generateToken(length) {
  const token = crypto
    .randomBytes(Math.ceil(length / 2))
    .toString('hex')
    .slice(0, length);

  return token;
}

module.exports.getRandomString = async (event) => {
  let size = 64;

  if (event.queryStringParameters && event.queryStringParameters.size) {
    size = parseInt(event.queryStringParameters.size, 10);

    if (size > 300) {
      return {
        statusCode: '400',
        body: 'Token size must be lower than 300'
      };
    }
  }

  const randomToken = `${generateToken(size)}`;

  return {
    statusCode: '200',
    body: `Random Token: ${randomToken}`
  };
};
