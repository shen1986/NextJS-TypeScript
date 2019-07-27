import Head from 'next/head'

function MyHead({title}) {
    return (
        <Head>
            {/* 魔笙科技 AI服务商 */}
            <title>{title}</title>
            <meta name="viewport" content="width=device-width"/>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
            <meta name="description" content="魔笙科技公司主页"/>
            <meta name="keywords" content="AIoT；魔笙科技；AI服务商；智慧校园；智慧培训机构；获客；物联网；智能会议；智能抓拍系统；AI解决方案服务商"/>
            <meta name="renderer" content="webkit"/>
            <meta name="applicable-device" content="pc"/>
            <meta http-equiv="Cache-Control" content="no-transform"/>
            <link rel="icon" href="http://nwzimg.wezhan.cn/sitefiles10129/10129049/58x58 icon.png"/>
            <link rel="shortcut icon" href="http://nwzimg.wezhan.cn/sitefiles10129/10129049/58x58 icon.png"/>
            <link rel="bookmark" href="http://nwzimg.wezhan.cn/sitefiles10129/10129049/58x58 icon.png"/>
        </Head>
    )
}

export default MyHead;