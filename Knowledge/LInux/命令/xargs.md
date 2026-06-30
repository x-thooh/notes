---
tags:
  - note/standard
  - type/standard
  - status/growing
  - topic/Language
  - priority/Lv3
date: 2026-06-29 12:58
updated: 2026-06-29 12:59
status: growing
topic: Language
priority: Lv3
deck: Note::Language

---
# xargs

## 摘要
> [!note] 一个命令的输出，作为另一个命令的参数

`xargs` 是 Linux/Unix 中一个非常强大且常用的命令，它的核心作用是将**标准输入**（stdin）的数据转换为**命令行参数**，传递给其他命令执行。

## 语法
```
command1 | xargs [选项] command2
```

### 选项

| 选项 | 作用 |
| --- | --- |
| **`-n N`** | 每次传递 **N** 个参数给命令（用于分批处理）。 |
| **`-I {}`** | 占位符替换。将 `{}` 替换为输入数据，常用于需要指定参数位置的场景。 |
| **`-0`** | 以空字符（`\0`）作为分隔符，而非空格/换行。**必须与 `find -print0` 配合**，处理含空格或特殊字符的文件名。 |
| **`-P N`** | 同时运行 **N** 个进程（并行执行），加快处理速度。 |
| **`-p`** | 交互模式，执行前询问确认（安全操作）。 |
| **`-t`** | 打印执行的命令到终端（调试用）。 |

## 案例

### 批量删除文件
```shell
# 查找所有 .tmp 文件并删除（安全处理空格）
find . -name "*.tmp" -print0 | xargs -0 rm -f
```


### 批量压缩日志
```shell
# 每次传 5 个文件给 gzip
ls *.log | xargs -n 5 gzip
```


### 批量复制文件到多个目录（使用 -I）
```shell
# 将 file.txt 复制到 dir1, dir2, dir3
echo "dir1 dir2 dir3" | xargs -n 1 cp file.txt
# 或者使用占位符更灵活：
echo "dir1 dir2 dir3" | xargs -I {} cp file.txt {}
```


### 批量删除
```shell
# 安全的做法（推荐）
find /path -type f -name "*.pdf" -print0 | xargs -0 rm
# 不安全的做法（文件名有空格会报错）
find /path -type f -name "*.pdf" | xargs rm
```


## 延伸
- **相关笔记：** [[TODO]]
- **参考资料：** TODO
- **后续问题：** TODO
- **可复用沉淀：** TODO
