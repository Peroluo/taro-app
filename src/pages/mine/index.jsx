import Taro, { Component } from "@tarojs/taro";
import { View, ScrollView, Button } from "@tarojs/components";
import Tab from "../../components/tab/index";
import "./index.less";

class Index extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}
  config = {
    navigationBarTitleText: "我的"
  };

  componentDidShow() {}

  componentDidHide() {}
  render() {
    return (
      <ScrollView
        className="scrollView"
        scrollY
        onScroll={e => {
          console.log(e.detail.scrollTop);
        }}
      >
        <Tab
          onStart={() => {
            Taro.switchTab({
              url: "/pages/index/index?id=2&type=test'"
            });
          }}
        >
          回去
        </Tab>
        <View className="content"></View>

        <Button
          onClick={() => {
            Taro.navigateTo({
              url: "/pages/detail/index?id=2&type=test'"
            });
          }}
        >
          回到首页
        </Button>
      </ScrollView>
    );
  }
}

export default Index;
