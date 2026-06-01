<%*
await tp.user.note_base.setupTitle(tp, "请输入笔记标题:");
await tp.user.note_base.chooseTopic(tp, "Engineering");
await tp.user.note_base.choosePriority(tp);
await tp.user.note_base.chooseStatus(tp);
tR += tp.user.note_base.renderFrontmatter(tp, "standard");
-%>
# <% tp.title %>

## 摘要
> [!tip] 快速判断这篇笔记的价值。

- **一句话结论：** TODO
- **关键词：** TODO
- **适用场景：** TODO


## 背景
> [!info] 说明为什么需要记录。

- **问题/场景：** TODO
- **现象/事实：** TODO
- **约束/前提：** TODO


## 分析
> [!note] 保留思考过程，而不是只留下答案。

- **关键原因：** TODO
- **方案/观点对比：** TODO
- **取舍判断：** TODO


## 结论
> [!success] 沉淀可以复用的知识。

- **最终结论：** TODO
- **实践要点：** TODO
- **注意事项：** TODO


## 延伸
- **相关笔记：** [[TODO]]
- **参考资料：** TODO
- **后续问题：** TODO
- **可复用沉淀：** TODO
