<%*
await tp.user.note_base.setupTitle(tp, "请输入学习主题:");
await tp.user.note_base.chooseTopic(tp, "Engineering");
await tp.user.note_base.choosePriority(tp);
await tp.user.note_base.chooseStatus(tp);
tR += tp.user.note_base.renderFrontmatter(tp, "learning");
-%>
# <% tp.title %>

## 摘要
> [!tip] 快速说明这个概念或框架的价值。

- **一句话理解：** TODO
- **关键词：** TODO
- **适用场景：** TODO


## 概念
> [!info] 先理解它解决什么问题。

- **它是什么：** TODO
- **解决的问题：** TODO
- **不适合的场景：** TODO


## 核心用法
> [!example] 记录最小可用路径。

- **常用 API/命令：** TODO
- **最小示例：** TODO
- **注意事项：** TODO


## 架构实现
> [!note] 记录背后的机制，而不是只记用法。

- **核心流程：** TODO
- **关键组件：** TODO
- **原理图：** TODO


## 对比
- **优点：** TODO
- **缺点：** TODO
- **替代方案：** TODO
- **相关笔记：** [[TODO]]
