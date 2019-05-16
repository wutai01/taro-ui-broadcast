import Taro, { Component } from '@tarojs/taro'
import { View} from '@tarojs/components'
import './broadcast.scss'
import { AtIcon } from 'taro-ui'

export default class Broadcast extends Component {

  /**
   * props:
   *  lists 广播内容
   *  onMoreClick 查看更多点击
   */
  constructor (props) {
    super (props)
    this.state = {
        animate: false,
        listsMy: []
    }
  }

  lookMoreHandler () {
    this.props.onMoreClick()
  }

  scroll(){
    this.setState({
        animate: true
    })
    setTimeout(()=>{
        let target = this.state.listsMy;
        target.push(target[0])
        target.shift()
        this.setState({
            listsMy: target,
            animate: false
        })
    },500)
  }

  componentWillMount() {
    let {lists} = this.props;
    this.setState({
        listsMy: JSON.parse(JSON.stringify(lists))
    })
    setInterval(() => {
        this.scroll();
    }, 3000)
  }

  render () {
    let {animate, listsMy} = this.state;
    const noticeItem = listsMy.map(item => {
        return <View className="notice-item">
          {item.content}
        </View>
    })
    return (
      <View className='broadcast-lists clearfix'>
        <AtIcon value='volume-plus' size='18' color='#de8c17'></AtIcon>
        <View className="broadcast-content">
            <View className={animate ? 'broadcast-content-container anim' : 'broadcast-content-container'}>
                {noticeItem}
            </View>
        </View>
        <View className="look-more-href" onClick={this.lookMoreHandler}>查看更多</View>
      </View>
    )
  }
}