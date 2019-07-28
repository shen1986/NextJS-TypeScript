import MyHead from '../componets/Head';
import { Carousel } from 'antd';
import '../styles/index.less';

function Home() {
    return (
        <div className="home">
            <MyHead title="魔笙科技 AI服务商"/>
            <Carousel autoplay dots={false} speed={500} infinite={true} nextArrow={<span>l</span>}
                      prevArrow= {<span>></span>} >
                <div>
                    <img src="http://ntemimg.wezhan.cn/contents/sitefiles2001/10007281/images/-33833.jpg" />
                </div>
                <div>
                    <img src="http://ntemimg.wezhan.cn/contents/sitefiles2001/10007281/images/-33832.jpg" />
                </div>
            </Carousel>
        </div>
    );
}

export default Home