'use strict';

const path = require('path');
const fs = require('fs');

console.log('=== Panlink Plugin Loading ===');

// 获取图标路径
const ICONS_DIR = path.join(__dirname, 'assets', 'icons');

// 平台名称到图标文件名的映射
const PLATFORM_ICONS = {
  'baidu': 'baidu.svg',
  '360': '123.svg',          // 360云盘使用123.svg
  'aliyun': 'aliyun.svg',
  'lanzou': 'lanzou.png',
  'weiyun': 'weiyun.png',
  'quark': 'quark.png',
  'gitee': 'gitee.svg',
  'github': 'github.svg',
  'tianyi': 'tianyi.svg',
  'chengtong': 'chengtong.svg',
  'xunlei': 'xunlei.svg',
  '115': '115.png'
};

// 复制图标到博客的公共资源目录
hexo.extend.generator.register('panlink-icons', function(locals) {
  try {
    const iconFiles = fs.readdirSync(ICONS_DIR);
    return iconFiles.map(filename => ({
      path: `css/panlink/${filename}`,
      data: function() {
        return fs.createReadStream(path.join(ICONS_DIR, filename));
      }
    }));
  } catch (error) {
    console.error('Error reading icons directory:', error);
    return [];
  }
});

// 平台图标映射（使用 Base64 编码的默认图标）
const DEFAULT_ICONS = {
  'baidu': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#2196F3"/>
    <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="#2196F3"/>
  </svg>`,
  '360': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    <circle cx="12" cy="12" r="10" fill="#4285F4"/>
    <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="#FFFFFF"/>
  </svg>`,
  'lanzou': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#00BCD4"/>
    <circle cx="12" cy="12" r="4" fill="#00BCD4"/>
  </svg>`
};

hexo.extend.tag.register('panlink', function(args) {
  try {
    const processedArgs = args.map(arg => arg.replace(/^["']|["']$/g, ''));
    const [platform, name, link, code] = processedArgs;
    
    const iconFile = PLATFORM_ICONS[platform.toLowerCase()] || 'default.svg';
    const iconPath = `/css/panlink/${iconFile}`;
    
    const iconHtml = `<img src="${iconPath}" width="24" height="24" alt="${platform}" />`;
    
    const codeHtml = code ? `<div class="pan-code">提取码: ${code}</div>` : '';
    
    return `<div class="pan-link-card">
      <div class="pan-link-content">
        <div class="pan-icon">
          ${iconHtml}
        </div>
        <div class="pan-info">
          <div class="pan-name">${name}</div>
          ${codeHtml}
        </div>
        <div class="pan-download">
          <a href="${link}" target="_blank" rel="noopener noreferrer">
            <button class="pan-button">下载</button>
          </a>
        </div>
      </div>
    </div>`;
    
  } catch (error) {
    console.error('Error in panlink plugin:', error);
    return `<div style="color: red;">Error in panlink plugin: ${error.message}</div>`;
  }
}, {ends: false});

console.log('=== Panlink Plugin Loaded ===');

// 注入样式
hexo.extend.injector.register('head_end', `
  <style>
    @keyframes borderGlow {
      0% {
        border-color: #3f7cff;
        box-shadow: 0 0 5px #3f7cff;
      }
      33% {
        border-color: #ff3f7c;
        box-shadow: 0 0 5px #ff3f7c;
      }
      66% {
        border-color: #7cff3f;
        box-shadow: 0 0 5px #7cff3f;
      }
      100% {
        border-color: #3f7cff;
        box-shadow: 0 0 5px #3f7cff;
      }
    }

    @keyframes buttonPulse {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.05);
      }
      100% {
        transform: scale(1);
      }
    }

    .pan-link-card {
      margin: 1rem 0;
      padding: 0.8rem;
      background: #1a1b1e;
      border-radius: 8px;
      transition: all 0.3s;
      border: 1px solid #2a2b2e;
      color: #e4e4e4;
      position: relative;
      overflow: hidden;
    }

    .pan-link-card:hover {
      border-color: transparent;
      animation: borderGlow 4s linear infinite;
      transform: translateY(-2px);
    }

    .pan-link-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      z-index: 1;
    }

    .pan-icon {
      margin-right: 12px;
      display: flex;
      align-items: center;
      transition: transform 0.3s;
    }

    .pan-link-card:hover .pan-icon {
      transform: rotate(360deg);
    }

    .pan-icon img {
      width: 24px;
      height: 24px;
      object-fit: contain;
    }

    .pan-info {
      flex-grow: 1;
      transition: transform 0.3s;
    }

    .pan-link-card:hover .pan-info {
      transform: translateX(5px);
    }

    .pan-name {
      font-size: 1.1em;
      font-weight: bold;
      color: #e4e4e4;
    }

    .pan-code {
      font-size: 0.9em;
      color: #888;
      margin-top: 4px;
      transition: color 0.3s;
    }

    .pan-link-card:hover .pan-code {
      color: #aaa;
    }

    .pan-button {
      background: #3f7cff;
      color: white;
      border: none;
      padding: 6px 16px;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.3s;
      position: relative;
      overflow: hidden;
    }

    .pan-button:hover {
      background: #3365d6;
      animation: buttonPulse 1s ease-in-out infinite;
    }

    .pan-button::after {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: linear-gradient(
        45deg,
        transparent,
        rgba(255, 255, 255, 0.1),
        transparent
      );
      transform: rotate(45deg);
      transition: 0.3s;
      opacity: 0;
    }

    .pan-button:hover::after {
      opacity: 1;
      transform: rotate(45deg) translate(50%, 50%);
    }
  </style>
`);