<%*
await tp.user.note_base.setupTitle(tp, "请输入架构主题:");
tp.user.note_base.setTopic(tp, "Architecture");
await tp.user.note_base.choosePriority(tp);
await tp.user.note_base.chooseStatus(tp);
tR += tp.user.note_base.renderFrontmatter(tp, "architecture");
-%>
# <% tp.title %>

## 摘要
> [!tip] 快速说明方案结论和适用边界。

- **方案结论：** TODO
- **业务目标：** TODO
- **影响范围：** TODO


## 业务逻辑
> [!info] 先描述业务，再讨论技术方案。

- **业务流程：** TODO
- **核心对象：** TODO
- **边界条件：** TODO


## 设计
> [!note] 说明系统如何组织和协作。

- **架构图：** TODO
- **模块职责：** TODO
- **依赖关系：** TODO
- **数据流：** TODO


## 选型
> [!question] 记录为什么这样设计。

- **选型理由：** TODO
- **备选方案：** TODO
- **取舍判断：** TODO


## 落地
- **实施步骤：** TODO
- **风险：** TODO
- **验证方式：** TODO
- **后续演进：** TODO
- **相关笔记：** [[TODO]]
