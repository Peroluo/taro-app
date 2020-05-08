import Taro, { Component } from "@tarojs/taro";
import { View, Swiper, SwiperItem, Button } from "@tarojs/components";
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
      <View className="index">
        <Swiper
          indicatorColor="#999"
          indicatorActiveColor="#333"
          vertical
          circular
          indicatorDots
          autoplay
        >
          <SwiperItem>
            <View className="demo-text-1">1</View>
          </SwiperItem>
          <SwiperItem>
            <View className="demo-text-2">2</View>
          </SwiperItem>
          <SwiperItem>
            <View className="demo-text-3">3</View>
          </SwiperItem>
        </Swiper>
        <Button
          onClick={() => {
            Taro.navigateTo({
              url: "/pages/detail/index?id=2&type=test'"
            });
          }}
        >
          回到首页
        </Button>
        <Tab
          onStart={() => {
            Taro.switchTab({
              url: "/pages/index/index?id=2&type=test'"
            });
          }}
        >
          回去
        </Tab>
      </View>
    );
  }
}

export default Index;
