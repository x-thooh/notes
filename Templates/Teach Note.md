<%*
// 1. 标题与重命名 
let title = await tp.system.prompt("请输入笔记标题:"); if (title) { await tp.file.rename(title); } else { title = tp.file.title; } tp.title = title;

// 2. 内容类型 
let tech = await tp.system.suggester( ["微服务", "云原生", "设施", "语言", "算法"], ["Microservices", "CloudNative", "Infra", "Lang", "Algorithm"] ); tp.tech = tech || "Lang";

// 3. 难度评级
let priority = await tp.system.suggester(["⭐ 简单", "⭐⭐ 中等", "⭐⭐⭐ 困难"], ["Lv1", "Lv2", "Lv3"]); tp.priority = priority || "Lv2";

-%>
---
tags:
  - status/growing
  - tech/<% tp.tech %>
  - priority/<% tp.priority %>
date: <% tp.file.creation_date("YYYY-MM-DD HH:mm") %>
anki-deck: <% tp.tech %>

---
# <% tp.title %>

## 场景/问题


## 解决方案


## 思考过程


## 参考文档


## 记忆卡
ˆ
TARGET DECK: Note::<% tp.tech %>
START 
填空题
1. 关于 **<% tp.title %>**，其核心机制在于：{{c1::填入核心机制}}。
FILE: <% tp.title %>
END