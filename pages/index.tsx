import MyHead from '../components/Head';
import { Carousel, Icon } from 'antd';
import { Component } from 'react';
import { inject, observer } from 'mobx-react';
import '../styles/index.less';

@inject((stores) => {
    return {
        appState: (stores as any).appState,
    };
})
@observer
class Home extends Component<any, any> {
    constructor(props) {
        super(props);
        console.log(this.props.appState.count);
    }

    static async getInitialProps({ mobxStore }) {

        const appState = mobxStore;

        if (appState) {
            appState.add();
        }

        return { };
    }

    onClick(direction: string) {
        const { carousel } = this.refs;
        if (direction === 'prev') {
            (carousel as any).prev();
        } else {
            (carousel as any).next();
        }
        this.props.appState.add();
        console.log(this.props.appState.count);
    }

    render() {
        return (
        <div className="home">
            <MyHead title="魔笙科技 AI服务商"/>
            <div className="carousel">
                <Icon type="left" onClick={() => this.onClick('prev')} />
                <Carousel
                    autoplay
                    dots={false}
                    speed={500}
                    infinite={true}
                    ref="carousel"
                >
                    <div>
                        <img
                    src="http://ntemimg.wezhan.cn/contents/sitefiles2001/10007281/images/-33833.jpg"
                        />
                    </div>
                    <div>
                        <img
                    src="http://ntemimg.wezhan.cn/contents/sitefiles2001/10007281/images/-33832.jpg"
                        />
                    </div>
                </Carousel>
                <Icon type="right" onClick={() => this.onClick('next')} />
            </div>
        </div>
        );
    }
}

export default Home;
