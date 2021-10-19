/* eslint-disable no-underscore-dangle */
const outputUserData = (data) => ({
  id: data._id,
  featured: data.featured,
  name: data.name,
  type: data.type,
  phone: data.phone,
  cityId: data.cityId,
  email: data.email,
  image_url: data.image_url,
  ...(data.type === 'persona' ? {
    last_name: data.last_name,
    gender: data.gender,
    birthdate: data.birthdate,
    profession_id: data.profession_id,
  } : {
    nit: data.nit,
    name_legal_representative: data.name_legal_representative,
    phone_legal_representative: data.phone_legal_representative,
    email_legal_representative: data.email_legal_representative,
  }),
});

module.exports = {
  outputUserData,
};
