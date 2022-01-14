module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1e19a36d5445c2ee5d1201dd6d17ea57'),
  },
});
