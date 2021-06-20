import AppleViewStore from './appleViewStore'
import { action, computed, makeObservable, observable } from 'mobx'

class AppleListStore {
  appleList = []
  eatAppleList = []

  constructor (appleList) {
    if (appleList) this.appleList = appleList
    makeObservable (this, {
      appleList: observable,
      eatAppleList: observable,
      createApple: action,
      delApple: action,
      nowAppleWeight: computed,
      eatAppleWeight: computed
    })
  }

  get nowAppleWeight () {
    let num = null
    this.appleList.forEach(item => {
      num += item.weight
    })
    return num
  }

  get eatAppleWeight () {
    let num = null
    this.eatAppleList.forEach(item => {
      num += item.weight
    })
    return num
  }

  createApple () {
    const title = Math.floor(Math.random() * 100)
    this.appleList.push(new AppleViewStore(title))
  }

  delApple (id) {
    let i = null
    this.appleList.forEach((item, index) => {
      if (item.id === id) {
        console.log('--', item)
        item.isEaten = true
        i = index
      }
    })
    const eatApple = this.appleList.splice(i, 1)
    this.eatAppleList.push(...eatApple)
  }
}

export default AppleListStore