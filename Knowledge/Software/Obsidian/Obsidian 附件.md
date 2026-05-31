---
tags:
  - note/standard
  - type/tools-workflow
  - status/growing
  - topic/Engineering
  - priority/Lv2
date: 2026-05-31 09:36
updated: 2026-05-31 09:38
status: growing
topic: Engineering
priority: Lv2
deck: Note::Engineering
---
# Obsidian 资源管理

## 摘要

两种方式结合
- 统一集中管理
- 图床


## 安装与配置

### 统一集中管理

配置 
`Preferenses > Files and Links > Default location for new attachments`
	- `Vault folder`: 库（Vault）根文件夹
	- `Same folder as current file`: 与当前文件相同的文件夹
	- `In subfolder under current folder`: 当前文件夹下的子文件夹
	- **`In the folder specified below`**: 在下方指定的文件夹中

`Preferenses > Files and Links > Attachment folder path`
指定自定义目录，如 `_resources`

### 图床
1. 工具 `PicGo/PicList/uPic`
2. 插件
	1. `Image Auto Upload Plugin` 剪贴板资源或者链接上传
	2. `Paste Image Rename` 资源重命名
#### `Image Auto Upload Plugin`

![Screenshot 2026-05-31 at 11-52-13.png](https://raw.githubusercontent.com/x-thooh/picture/main/obsidian/Screenshot%202026-05-31%20at%2011-52-13.png)
#### Obsidian 插件 Image Auto Upload Plugin 重点配置说明
- `Image desc` 图片描述
	- 自动插入到 Obsidian 里的 Markdown 语法中 `![图片描述]`
		- 建议 `default`
- `Delete source file after you upload file` 删除上传的本地文件