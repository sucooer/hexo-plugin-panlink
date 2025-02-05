# hexo-plugin-panlink

[![npm version](https://img.shields.io/npm/v/hexo-plugin-panlink)](https://www.npmjs.com/package/hexo-plugin-panlink)
[![license](https://img.shields.io/github/license/sucooer/hexo-plugin-panlink)](https://github.com/sucooer/hexo-plugin-panlink/blob/main/LICENSE)

一个用于在 Hexo 博客中优雅展示网盘下载链接的插件，支持多个网盘平台，并带有美观的动画效果。

[English](./readme_en.md) | 简体中文

## 预览效果

![Preview](https://raw.githubusercontent.com/sucooer/hexo-plugin-panlink/main/assets/Preview/preview.gif)

## 特性

- 🎨 精美的深色卡片设计
- ✨ 流畅的动画效果
- 🎯 支持多个网盘平台
- 🔒 支持提取码显示
- 📱 响应式设计

## 安装

```bash
npm install hexo-plugin-panlink --save
```

## 使用方法

在你的 Markdown 文章中使用：

```markdown
{% panlink platform "文件名" "下载链接" "提取码" %}
```

### 示例

```markdown
{% panlink baidu "测试文件.zip" "https://pan.baidu.com/s/xxx" "1234" %}
{% panlink quark "文档.pdf" "https://pan.quark.cn/s/xxx" "abcd" %}
{% panlink lanzou "软件.exe" "https://lanzou.com/xxx" %}
```

### 支持的平台

| 平台         | 标识符    | 是否支持提取码 |
|--------------|-----------|----------------|
| 百度网盘     | baidu     | ✅              |
| 夸克网盘     | quark     | ✅              |
| 蓝奏云       | lanzou    | ✅              |
| 阿里云盘     | aliyun    | ✅              |
| 天翼云盘     | tianyi    | ✅              |
| 城通网盘     | chengtong | ✅              |
| 123云盘      | 123       | ✅              |
| 蓝奏云       | lanzou    | ✅              |
| GitHub       | github    | ❌              |
| Gitee        | gitee     | ❌              |
| 微云         | weiyun    | ✅              |
| 115网盘      | 115       | ✅              |
| 迅雷云盘     | xunlei    | ✅              |
| 中国移动云盘 | yidong    | ✅              |

## 自定义样式

如果你想自定义样式，可以在你的主题 CSS 文件中覆盖以下类：

```css
.pan-link-card { /* 卡片容器 */ }
.pan-link-content { /* 内容布局 */ }
.pan-icon { /* 图标样式 */ }
.pan-info { /* 信息区域 */ }
.pan-name { /* 文件名 */ }
.pan-code { /* 提取码 */ }
.pan-button { /* 下载按钮 */ }
```

## 许可证

本项目基于 MIT 许可证开源 - 查看 [LICENSE](LICENSE) 文件了解更多细节