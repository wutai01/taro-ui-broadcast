
# 说明

### 其实很简单，可以直接看src中的源码

怎么用：

```js

import broadcast from '/components/broadcast/broadcast';

<View className="nixi-notice">
    <broadcast lists={noticeLists} onMoreClick={this.moreClick}></broadcast>
</View>

```

两个props：

1. lists => 消息列表

2. onMoreClick => 查看更多 点击事件
