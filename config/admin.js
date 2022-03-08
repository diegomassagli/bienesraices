module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c7934b541d81fc36ed20cebe835a9721'),
  },
});
