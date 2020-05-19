import Taro, { Component } from "@tarojs/taro";
import { Provider } from "@tarojs/redux";

import Index from "./pages/index";

import configStore from "./store";

import "./app.less";

const store = configStore();

class App extends Component {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  config = {
    pages: ["pages/index/index", "pages/mine/index", "pages/detail/index"],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#00BFFF",
      navigationBarTitleText: "链家邦",
      navigationBarTextStyle: "white"
    },
    tabBar: {
      color: "#999",
      selectedColor: "#00BFFF",
      backgroundColor: "#fafafa",
      list: [
        {
          pagePath: "pages/index/index",
          text: "首页",
          iconPath: "./static/img/ic_tab_home_normal.png",
          selectedIconPath: "./static/img/ic_tab_home_active.png"
        },
        {
          pagePath: "pages/mine/index",
          text: "我的",
          iconPath: "./static/img/ic_tab_profile_normal.png",
          selectedIconPath: "./static/img/ic_tab_profile_active.png"
        }
      ]
    }
  };

  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById("app"));
