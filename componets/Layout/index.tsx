import { Layout as MyLayout, Menu, Breadcrumb, Icon } from 'antd';
import '../../styles/style.less';

const { Header, Content, Footer } = MyLayout;

function Layout({children}: {children: any}) {
    return (
        <MyLayout className="layout">
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%', height: 68 }}>
                <div className="logo" >
                    <a target="_self" href="/sy">
                        <img src="//nwzimg.wezhan.cn/contents/sitefiles2025/10129049/images/4683947.png" alt="魔笙科技" title="魔笙科技" style={{ width: "184px", height: "45px" }} />
                    </a>
                </div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '68px' }}
                >
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
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
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </Footer>
        </MyLayout>
    )
}

export default Layout;