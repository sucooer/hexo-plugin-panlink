# hexo-plugin-panlink

[![npm version](https://img.shields.io/npm/v/hexo-plugin-panlink)](https://www.npmjs.com/package/hexo-plugin-panlink)
[![license](https://img.shields.io/github/license/sucooer/hexo-plugin-panlink)](https://github.com/sucooer/hexo-plugin-panlink/blob/main/LICENSE)

A plugin for elegantly displaying cloud storage download links in Hexo blogs, supporting multiple platforms with beautiful animation effects.

English | [简体中文](./readme.md)

## Preview

![Preview](https://raw.githubusercontent.com/sucooer/hexo-plugin-panlink/main/assets/Preview/preview.gif)

## Features

- 🎨 Beautiful dark card design
- ✨ Smooth animation effects
- 🎯 Support for multiple cloud storage platforms
- 🔒 Extraction code display support
- 📱 Responsive design

## Installation

```bash
npm install hexo-plugin-panlink --save
```

## Usage

In your Markdown posts, use:

```markdown
{% panlink platform "filename" "download_link" "extraction_code" %}
```

### Examples

```markdown
{% panlink baidu "test_file.zip" "https://pan.baidu.com/s/xxx" "1234" %}
{% panlink quark "document.pdf" "https://pan.quark.cn/s/xxx" "abcd" %}
{% panlink lanzou "software.exe" "https://lanzou.com/xxx" %}
```

### Supported Platforms

| Platform | Identifier | Extraction Code Support |
|----------|------------|------------------------|
| Baidu Netdisk | baidu | ✅ |
| Quark Netdisk | quark | ✅ |
| LanzouCloud | lanzou | ✅ |
| Aliyun Drive | aliyun | ✅ |
| TianyiCloud | tianyi | ✅ |
| ChengTongCloud | chengtong | ✅ |
| 123Cloud | 123 | ✅ |
| LanzouCloud | lanzou | ✅ |
| GitHub | github | ❌ |
| Gitee | gitee | ❌ |
| WeiYun | weiyun | ✅ |
| 115 Drive | 115 | ✅ |
| Xunlei Cloud | xunlei | ✅ |

## Custom Styling

If you want to customize the styles, you can override the following classes in your theme's CSS file:

```css
.pan-link-card { /* Card container */ }
.pan-link-content { /* Content layout */ }
.pan-icon { /* Icon style */ }
.pan-info { /* Information area */ }
.pan-name { /* Filename */ }
.pan-code { /* Extraction code */ }
.pan-button { /* Download button */ }
```

## License

This project is open-sourced under the MIT License - see the [LICENSE](LICENSE) file for details
