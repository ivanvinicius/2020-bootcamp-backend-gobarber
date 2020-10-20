interface IJwtProps {
  secret: string;
  expiresIn: string | number;
}

// const isProduction = process.env.NODE_ENV === 'production';

// secret: isProduction ? process.env.APP_SECRET : 'secret',
// expiresIn: isProduction ? process.env.EXPIRES_IN : '2d',

export default {
  jwt: {
    secret: process.env.APP_SECRET,
    expiresIn: process.env.EXPIRES_IN,
  } as IJwtProps,
};
