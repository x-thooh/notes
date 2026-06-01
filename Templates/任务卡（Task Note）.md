<%*
await tp.user.note_base.setupTitle(tp, "请输入任务标题:");
await tp.user.note_base.chooseTopic(tp, "Engineering");
await tp.user.note_base.choosePriority(tp);
const dueInput = await tp.system.prompt("截止日期（YYYY-MM-DD，可留空）:");
const ownerInput = await tp.system.prompt("负责人（可留空）:");
const due = (dueInput || "").trim();
const owner = (ownerInput || "").trim();
const now = tp.date.now("YYYY-MM-DD HH:mm");
tR += `---\n`;
tR += `tags:\n`;
tR += `  - task\n`;
tR += `  - topic/${tp.topic}\n`;
tR += `  - priority/${tp.priority}\n`;
tR += `status: todo\n`;
tR += `topic: ${tp.topic}\n`;
tR += `priority: ${tp.priority}\n`;
tR += `due: ${due}\n`;
tR += `owner: ${owner}\n`;
tR += `date: ${tp.file.creation_date("YYYY-MM-DD HH:mm")}\n`;
tR += `updated: ${now}\n`;
tR += `---\n\n`;
-%>
# <% tp.title %>

## 任务说明
- 背景：
- 目标：
- 完成标准：

## 下一步
- [ ] TODO

## 备注
