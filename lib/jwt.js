import jwt from 'jsonwebtoken'

const secret = process.env.JWT_SECRET || 'your-secret-key'

export function verifyJwt(token) {
  return jwt.verify(token, secret)
}
