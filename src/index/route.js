import React from 'react'
import { Icon } from 'antd'
import { connect } from 'react-redux'
import style from './index.less'

const Index = ({ locale }) => {
    if (locale === 'en') {
        return (
            <div className={style.introduction}>
                <h1>Sample project built with Webpack</h1>
                <section>
                    <h2>Aimed at solving problems below：</h2>
                    <ul>
                        <ol>1. Import ant design dependencies on demand<Icon type="star" /></ol>
                        <ol>2. Differentiate multiple versions during build phase<Icon type="star" /></ol>
                        <ol>3. The file "require-conf.js" is increasing, RequireJS could be replaced<Icon type="star" /></ol>
                        <ol>4. Package and compress assets by directory is not reasonable<Icon type="star" /></ol>
                        <ol>5. Customize ant design theme in an elegant manner<Icon type="star" /></ol>
                        <ol><em>6. Enable CSS Modules</em></ol>
                        <ol><em>7. Take advantage of powerful Webpack ecosystem</em></ol>
                    </ul>
                </section>
            </div>
        )
    }
    return (
        <div className={style.introduction}>
            <h1>使用Webpack构建的示例项目</h1>
            <section>
                <h2>意在解决如下问题：</h2>
                <ul>
                    <ol>1. ant design不能按需引入<Icon type="star" /></ol>
                    <ol>2. 区分内外版本硬编码逻辑<Icon type="star" /></ol>
                    <ol>3. require-conf.js文件日渐变大，替换RequireJS<Icon type="star" /></ol>
                    <ol>4. 按目录打包压缩静态资源不科学<Icon type="star" /></ol>
                    <ol>5. 更好地自定义ant design主题<Icon type="star" /></ol>
                    <ol><em>6. 支持CSS Modules</em></ol>
                    <ol><em>7. 利用强大的Webpack生态</em></ol>
                </ul>
            </section>
        </div>
    )
};

export const root = connect(state => state.locale)(Index);