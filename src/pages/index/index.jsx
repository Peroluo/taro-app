import Taro, { Component } from "@tarojs/taro";
import { View, Swiper, SwiperItem, Image } from "@tarojs/components";
import { connect } from "@tarojs/redux";

import { add, minus, asyncAdd } from "../../actions/counter";

import http from "../../http";

import goodsImg from "../../static/img/goods.png";
import "./index.less";

@connect(
  ({ counter }) => ({
    counter
  }),
  dispatch => ({
    add() {
      dispatch(add());
    },
    dec() {
      dispatch(minus());
    },
    asyncAdd() {
      dispatch(asyncAdd());
    }
  })
)
class Index extends Component {
  state = {
    goodsList: [1, 2, 3, 4, 5, 6]
  };
  async componentWillMount() {
    console.log(this.$router);
    const data = await http.get("/goods/detail", {
      id: 1181000
    });
    console.log(data);
  }
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }
  componentWillUnmount() {}
  config = {
    navigationBarTitleText: "联家邦独角兽"
  };
  componentDidShow() {
    console.log(this.$router);
  }

  componentDidHide() {}
  render() {
    const { goodsList } = this.state;
    return (
      <View className="index">
        <View className="header">
          <View className="icon"></View>
          <View className="titleWrap">
            <View className="title">罗国雄杂货店</View>
            <View className="subTitle">兴盛你我他，优选人人夸</View>
          </View>
        </View>
        <Swiper
          className="swiperContent"
          indicatorColor="#fff"
          indicatorActiveColor="#00BFFF"
          circular
          indicatorDots
          autoplay
        >
          <SwiperItem>
            <Image
              className="swiperItem"
              src="http://yanxuan.nosdn.127.net/65091eebc48899298171c2eb6696fe27.jpg"
            ></Image>
          </SwiperItem>
          <SwiperItem>
            <Image
              className="swiperItem"
              src="http://yanxuan.nosdn.127.net/bff2e49136fcef1fd829f5036e07f116.jpg"
            ></Image>
          </SwiperItem>
          <SwiperItem>
            <Image
              className="swiperItem"
              src="http://yanxuan.nosdn.127.net/8e50c65fda145e6dd1bf4fb7ee0fcecc.jpg"
            ></Image>
          </SwiperItem>
        </Swiper>
        <View className="goodsListWrap">
          {goodsList.map(item => (
            <View key={item} className="goodsItem">
              <Image className="goodsImg" src={goodsImg}></Image>
              <View className="goodsMsgWrap">
                <View className="goodsMsg">
                  <View className="goodsName">人肉强棒棒</View>
                  <View className="goodsPrice">￥75.00</View>
                </View>
                <View className="goodsBuy">
                  <View className="goodsSell">人气 {item + 100}</View>
                  <View className="buyBtn">购买</View>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
    );
  }
}

export default Index;
