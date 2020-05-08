import Taro, { Component } from "@tarojs/taro";
import {
  View,
  Button,
  Text,
  Swiper,
  SwiperItem,
  Image
} from "@tarojs/components";
import { connect } from "@tarojs/redux";

import { add, minus, asyncAdd } from "../../actions/counter";

import http from "../../http";

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
    navigationBarTitleText: "完美志愿"
  };
  componentDidShow() {
    console.log(this.$router);
  }

  componentDidHide() {}
  render() {
    return (
      <View className="index">
        <Swiper
          className="swiperContent"
          indicatorColor="#999"
          indicatorActiveColor="#333"
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
              src="http://yanxuan.nosdn.127.net/65091eebc48899298171c2eb6696fe27.jpg"
            ></Image>
          </SwiperItem>
          <SwiperItem>
            <Image
              className="swiperItem"
              src="http://yanxuan.nosdn.127.net/65091eebc48899298171c2eb6696fe27.jpg"
            ></Image>
          </SwiperItem>
        </Swiper>
        <Button className="add_btn" onClick={this.props.add}>
          +
        </Button>
        <Button className="dec_btn" onClick={this.props.dec}>
          -
        </Button>
        <Button className="dec_btn" onClick={this.props.asyncAdd}>
          async
        </Button>
        <View>
          <Text>{this.props.counter.num}</Text>
        </View>
        <View>
          <Text>Hello, World</Text>
        </View>
      </View>
    );
  }
}

export default Index;
