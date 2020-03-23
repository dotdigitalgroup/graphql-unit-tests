module.exports = async (_, { input }, { userRepository, cryptService, authService, user }) => {
  authService(user)
  if (input.id) {
    return userRepository.update(input.id, input.data)
  }
  const { password } = input.data
  const data = {
    ...input.data,
    password: cryptService.encrypt(password)
  }
  return userRepository.create(data)
}
