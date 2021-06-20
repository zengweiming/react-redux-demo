function AppleItem (props) {
  const { appleItem, appleListStore } = props
  return (
    <div className="appleItem">
      <div className="apple">
          <img src={require('../images/apple.png')} alt="" />
        </div>
        <div className="info">
          <div className="name">红苹果 - {appleItem.title}号</div>
          <div className="weight">{appleItem.weight}克</div>
        </div>
        <div className="btn-div">
          <button onClick={() => appleListStore.delApple(appleItem.id) }> 吃掉 </button>
        </div>
    </div>
  )
}

export default AppleItem