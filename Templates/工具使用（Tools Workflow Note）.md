<%*
await tp.user.note_base.setupTitle(tp, "请输入工具或工作流名称:");
tp.user.note_base.setTopic(tp, "Engineering");
await tp.user.note_base.choosePriority(tp);
await tp.user.note_base.chooseStatus(tp);
tR += tp.user.note_base.renderFrontmatter(tp, "tools-workflow");
-%>
# <% tp.title %>

## 摘要
> [!tip] 快速判断这个工具是否值得长期使用。

- **工具用途：** TODO
- **适用场景：** TODO
- **当前结论：** TODO


## 安装与配置
> [!info] 记录环境一致性相关信息。

- **版本管理：** TODO
- **PATH 路径：** TODO
- **环境变量：** TODO
- **配置入口：** TODO


## 高频操作
> [!example] 只保留最常用的 3-5 个命令。

- **命令 1：** TODO
- **命令 2：** TODO
- **命令 3：** TODO
- **典型工作流：** TODO


## 环境隔离
> [!note] 记录 session、profile、workspace 等隔离方式。

- **隔离方式：** TODO
- **配置方法：** TODO
- **适用边界：** TODO


## 配置同步
- **配置文件位置：** TODO
- **同步方式：** TODO
- **备份策略：** TODO


## 坑点记录
- **兼容性问题：** TODO
- **权限/路径问题：** TODO
- **版本冲突：** TODO
- **相关笔记：** [[TODO]]
