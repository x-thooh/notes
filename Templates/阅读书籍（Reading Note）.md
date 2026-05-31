<%*
await tp.user.note_base.setupTitle(tp, "请输入书名或阅读主题:");
tp.user.note_base.setTopic(tp, "Management");
await tp.user.note_base.choosePriority(tp);
await tp.user.note_base.chooseStatus(tp);
tR += tp.user.note_base.renderFrontmatter(tp, "reading");
-%>
# <% tp.title %>

## 摘要
> [!tip] 快速说明这本书为什么值得读。

- **书名/作者：** TODO
- **阅读目的：** TODO
- **一句话收获：** TODO


## 全书概览
> [!info] 抓住作者的核心模型。

- **核心主旨：** TODO
- **作者模型：** TODO
- **整体结构：** TODO


## 核心思维模型
> [!note] 提取最能迁移到工作中的观点。

- **模型 1：** TODO
- **模型 2：** TODO
- **模型 3：** TODO
- **对架构/效率/管理的启发：** TODO


## 摘录与批注
> [!quote] 摘录要配合自己的批判性思考。

- **原文摘录：** TODO
- **个人批注：** TODO
- **反例或限制：** TODO


## 知识迁移
- **C-end 业务重构：** TODO
- **PingAn Bank 项目：** TODO
- **团队协作：** TODO
- **架构治理：** TODO


## 后续阅读
- **延伸书目：** TODO
- **参考论文：** TODO
- **相关笔记：** [[TODO]]
