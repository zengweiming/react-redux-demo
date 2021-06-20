class AppleViewStore {
  id = Math.random()
  weight = Math.floor(200 + Math.random() * 50)
  isEaten = false
  title = ''

  constructor (title) {
    this.title = title
  }
}

export default AppleViewStore