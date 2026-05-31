const TOPIC_LABELS = [
  "编程语言",
  "算法与数据结构",
  "基础设施",
  "架构与微服务",
  "数据与存储",
  "AI大模型",
  "安全与加密",
  "网络与协议",
  "工程实践",
  "项目与管理",
];

const TOPIC_VALUES = [
  "Language",
  "Algorithm",
  "Infrastructure",
  "Architecture",
  "Data",
  "AI",
  "Security",
  "Network",
  "Engineering",
  "Management",
];

async function setupTitle(tp, promptText) {
  const rawTitle = await tp.system.prompt(promptText);
  const cleanedTitle = (rawTitle || "")
    .trim()
    .replace(/[\\/:*?"<>|]/g, "-")
    .replace(/\s+/g, " ");

  let title = cleanedTitle || tp.file.title;
  if (cleanedTitle) {
    try {
      await tp.file.rename(cleanedTitle);
    } catch (error) {
      title = tp.file.title;
    }
  }

  tp.title = title;
  return title;
}

async function chooseTopic(tp, defaultTopic = "Engineering") {
  const topic = await tp.system.suggester(TOPIC_LABELS, TOPIC_VALUES);
  tp.topic = topic || defaultTopic;
  return tp.topic;
}

function setTopic(tp, topic) {
  tp.topic = topic;
  return topic;
}

async function choosePriority(tp) {
  const priority = await tp.system.suggester(["⭐ 简单", "⭐⭐ 中等", "⭐⭐⭐ 困难"], ["Lv1", "Lv2", "Lv3"]);
  tp.priority = priority || "Lv2";
  return tp.priority;
}

async function chooseStatus(tp) {
  const status = await tp.system.suggester(["生长中", "已稳定", "已归档"], ["growing", "stable", "archived"]);
  tp.status = status || "growing";
  return tp.status;
}

function renderFrontmatter(tp, type) {
  const typeTag = type ? `  - type/${type}\n` : "";

  return `---
tags:
  - note/standard
${typeTag}  - status/${tp.status}
  - topic/${tp.topic}
  - priority/${tp.priority}
date: ${tp.file.creation_date("YYYY-MM-DD HH:mm")}
updated: ${tp.date.now("YYYY-MM-DD HH:mm")}
status: ${tp.status}
topic: ${tp.topic}
priority: ${tp.priority}
deck: Note::${tp.topic}

---
`;
}

module.exports = {
  setupTitle,
  chooseTopic,
  setTopic,
  choosePriority,
  chooseStatus,
  renderFrontmatter,
};
