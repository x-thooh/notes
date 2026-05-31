<%*
await tp.user.note_base.setupTitle(tp, "请输入故障标题:");
tp.user.note_base.setTopic(tp, "Engineering");
await tp.user.note_base.choosePriority(tp);
await tp.user.note_base.chooseStatus(tp);
tR += tp.user.note_base.renderFrontmatter(tp, "troubleshooting");
-%>
# <% tp.title %>

## 摘要
> [!tip] 快速判断故障价值和处理状态。

- **一句话结论：** TODO
- **影响范围：** TODO
- **当前状态：** TODO


## 现象
> [!bug] 先记录客观事实，避免过早下结论。

- **报错日志：** TODO
- **环境信息：** TODO
- **触发条件：** TODO


## 定位
> [!note] 保留排查路径和关键证据。

- **排查步骤：** TODO
- **关键证据：** TODO
- **排除项：** TODO


## 修复
> [!success] 记录实际生效的修复方式。

- **修复方案：** TODO
- **验证方式：** TODO
- **回滚方案：** TODO


## 复盘
- **根因：** TODO
- **预防措施：** TODO
- **后续动作：** TODO
- **相关笔记：** [[TODO]]
