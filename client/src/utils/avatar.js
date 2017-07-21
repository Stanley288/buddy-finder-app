import md5 from 'md5'

export default (email, size = 80) => {
  const hashedEmail = md5(email)

  return `http://www.gravatar.com/avatar/${hashedEmail}?s=${size}&d=https://api.adorable.io/avatars/${size}/${email}`
}
