<%*
await tp.user.note_base.setupTitle(tp, "请输入代码片段标题:");
tp.user.note_base.setTopic(tp, "Engineering");
await tp.user.note_base.choosePriority(tp);
await tp.user.note_base.chooseStatus(tp);
tR += tp.user.note_base.renderFrontmatter(tp, "snippets");
-%>
# <% tp.title %>

## 摘要
> [!tip] 快速判断这段代码是否可复用。

- **功能描述：** TODO
- **适用场景：** TODO
- **语言/环境：** TODO


## 代码
> [!example] 保留可直接复制的最小代码。

- **依赖：** TODO
- **版本要求：** TODO

```text
TODO
```


## 使用
> [!note] 说明如何验证和调用。

- **输入输出：** TODO
- **调用方式：** TODO
- **测试环境：** TODO


## 注意
- **边界条件：** TODO
- **常见错误：** TODO
- **安全/性能：** TODO


## 延伸
- **相关片段：** [[TODO]]
- **参考资料：** TODO
- **可复用沉淀：** TODO
