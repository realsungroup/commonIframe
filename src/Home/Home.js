import React from "react";
import "./Home.less";
import qs from "qs";
class Home extends React.Component {
  state = {
    url: "",
  };
  componentDidMount = () => {
    let search = window.location.search.substring(1);
    const code = qs.parse(search).qrcode;
    const links = window.fix.links;
    links.forEach((item) => {
      if (item.key === code) {
        this.setState({
          url: item.value,
        });
      }
    });
  };

  render() {
    const { url } = this.state;
    return (
      <div className="home">
        {/* <span
          onClick={() => {
            console.log("documentd", window.parent);
          }}
        >
          关闭
        </span> */}
        <div>扫描二维码</div>
        <img src={url} />
        <div>关注了解更多</div>
      </div>
    );
  }
}
export default Home;
