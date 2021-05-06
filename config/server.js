module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 5001),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '60dad516a9d97a370f4e8ca6eb43741d'),
    },
  },
});
