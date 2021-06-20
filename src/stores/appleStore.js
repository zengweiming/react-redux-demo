import { makeAutoObservable } from 'mobx'

class AppleStore {
  nowAppleNum = 10
  nowAppleWeight = 0
  isPicking = false
  newAppleId = 1
  appleList = []

  constructor () {
    // this为store实例对象
    // 参数1：作用是将当前实例对象上的属性变成 observable state，将实例对象的方法变成action方法
    // 参数2：覆盖默认设置，将实例对象上的某些属性或方法设置为普通对象
    // 参数3：配置对象。使action方法始终拥有正确的this指向
    makeAutoObservable(this)
  }
  addApple () {
    console.log('===', this)
    let weight = Math.floor(200 + Math.random() * 50);
    this.appleList.push({
        id: this.newAppleId++,
        weight: weight,
        isEaten: false
    });
  }
}

export default AppleStore