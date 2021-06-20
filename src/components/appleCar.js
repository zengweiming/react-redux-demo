import AppleItem from './appleItem'
import { observer } from 'mobx-react-lite'

// observer 方法的作用监控组件当中所使用的由 Mobx 跟踪的observable state，状态发生变化，通知react更新视图
// observer 是个高阶组件函数，函数接收一个组件，再返回一个新的组件


function AppleCar ({appleListStore}) {
  // const { nowAppleNum, nowAppleWeight, isPicking, appleList } = appleStore
  // const {} = appleListStore
  return (
    <div className="appleBusket">
      <div className="title">苹果篮子</div>

      <div className="stats">
        <div className="section">
          <div className="head">当前</div>
          <div className="content">
            {appleListStore.appleList.length}个苹果，{appleListStore.nowAppleWeight}克
          </div>
        </div>
        <div className="section">
          <div className="head">已吃掉</div>
          <div className="content">
            {appleListStore.eatAppleList.length}个苹果，{appleListStore.eatAppleWeight}克
          </div>
        </div>
      </div>

      {/* <AppleItem appleStore={appleStore}></AppleItem> */}

      <div className="appleList">
        {appleListStore.appleList.map(appleItem =>(
          <AppleItem appleListStore={appleListStore} appleItem={appleItem} key={appleItem.id}></AppleItem>
        ))}
      </div>

      <div className="btn-div">
          <button   onClick={() => appleListStore.createApple() } >摘苹果</button>
      </div>
    </div>
  )
}

export default observer(AppleCar)