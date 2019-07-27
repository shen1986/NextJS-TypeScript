import MyHead from '../componets/Head';
import '../styles/style.less';

function Home() {
    return (
        <div>
            <MyHead title="魔笙科技 AI服务商"/>
            <div className="example">Welcome to Next.js!</div>
        </div>
    );
}

export default Home