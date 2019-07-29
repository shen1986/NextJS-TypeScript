import MyHead from '../components/Head';
import { Carousel, Icon } from 'antd';
import { useRef, useCallback } from 'react';
import '../styles/index.less';

function Home() {
    const carousel = useRef(null);

    const onClick = useCallback(
        (direction: string) => {
            if (direction === 'prev') {
                (carousel.current as any).prev();
            } else {
                (carousel.current as any).next();
            }
        },
        [carousel],
    );

    return (
        <div className="home">
            <MyHead title="魔笙科技 AI服务商"/>
            <div className="carousel">
                <Icon type="left" onClick={() => onClick('prev')} />
                <Carousel
                    autoplay
                    dots={false}
                    speed={500}
                    infinite={true}
                    ref={carousel}
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
                <Icon type="right" onClick={() => onClick('next')} />
            </div>
        </div>
    );
}

export default Home;
