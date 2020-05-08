import Taro, { Component } from "@tarojs/taro";
import { View, Button } from "@tarojs/components";

class Index extends Component {
  render() {
    return (
      <View className="index">
        <Button
          onClick={() => {
            this.props.onStart();
          }}
        >
          {this.props.children}
        </Button>
      </View>
    );
  }
}

export default Index;
