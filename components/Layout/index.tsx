import { Layout as MyLayout, Menu , Icon } from 'antd';
import { TitleEventEntity } from '../../types';
import '../../styles/style.less';
import { useCallback } from 'react';

const { Header, Content, Footer } = MyLayout;
const { SubMenu } = Menu;

function Layout({ children }: {children: any}) {
    const onTitleClick = useCallback((e: TitleEventEntity) => {
        console.log(e);

    },                               []);

    return (
        <MyLayout className="layout">
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%', height: 68 }}>
                <div className="logo" >
                    <a target="_self" href="/sy">
                        <img
                        src="//nwzimg.wezhan.cn/contents/sitefiles2025/10129049/images/4683947.png"
                            alt="魔笙科技" title="魔笙科技" style={{ width: '184px', height: '45px' }}
                        />
                    </a>
                </div>
                <div className="menu">
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        style={{ lineHeight: '68px' }}
                    >
                        <SubMenu
                            key="sub1"
                            title={
                                <span>
                                    产品服务
                                </span>
                            }
                            onTitleClick={onTitleClick}
                        >
                            <Menu.Item key="1">身份识别</Menu.Item>
                            <Menu.Item key="2">人脸识别</Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
            </Header>
            <Content style={{ padding: '0 50px', marginTop: 64 }}>
                <div style={{ background: '#fff', minHeight: 380 }}>{children}</div>
            </Content>
            <Footer>
                <div className="footer-body">
                    <ul>
                        <li>
                            <Icon type="environment" />
                            <span className="company-info-title">地址：</span>
                            <span className="company-text">上海市虹口区曲阳路489弄8号201室</span>
                        </li>
                        <li>
                            <Icon type="phone" />
                            <span className="company-info-title">电话：</span>
                            <span className="company-text">021-62996366</span>
                        </li>
                        <li>
                            <Icon type="printer" />
                            <span className="company-info-title">传真：</span>
                            <span className="company-text">021-62996366</span>
                        </li>
                        <li>
                            <Icon type="mail" />
                            <span className="company-info-title">邮箱：</span>
                            <span className="company-text">ivywu@aimsky.com</span>
                        </li>
                    </ul>
                    <div className="w-company-info iconStyle1">
                        <span>版权所有： 上海魔笙科技有限公司</span>
                        <span>备案号： 京ICP备2018xxxx号</span>
                    </div>
                </div>
            </Footer>
        </MyLayout>
    );
}

export default Layout;
