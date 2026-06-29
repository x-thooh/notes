---
tags:
  - note/standard
  - type/standard
  - status/growing
  - topic/Language
  - priority/Lv2
date: 2026-06-29 12:55
updated: 2026-06-29 12:56
status: growing
topic: Language
priority: Lv2
deck: Note::Language

---
# find

## 摘要

```
find [搜索路径] [匹配条件] [执行动作]
```



## 搜索路径
> [!tip] 如果不指定路径，默认在当前目录下搜索。

支持绝对路径与相对路径

## 匹配条件
> [!tip] 条件之间默认是“与”（AND）的关系。

### 文件名称

```shell
# 精确查找名为 file.txt 的文件
find /home -name "file.txt"
# 忽略大小写
find /home -iname "file.txt"
# 通配符查找所有 .log 文件（注意加引号）
find /var/log -name "*.log"
# 查找以 abc 开头的文件
find . -name "abc*"
```

### 文件类型

```shell
# 普通文件
find . -type f
# 目录
find . -type d
# 符号链接
find . -type l
# 块设备
find . -type b
# 字符设备
find . -type c
```

### 文件大小
> [!note] 常用单位：c(字节)、k(KB)、M(MB)、G(GB)

```shell
# 大于 100MB
find . -size +100M
# 小于 1GB
find . -size -1G
# 正好 500KB（c 表示字节，k/M/G 表示单位）
find . -size 500k
```

### 文件时间

> [!summary] 时间类型
> mtime/amin 修改时间
> atime/amin  访问时间
> ctime/cmin 状态更改时间

```shell
# 7天内修改过的文件
find . -mtime -7
# 30天前修改的文件
find . -mtime +30
# 今天修改的文件
find . -mtime 0
# 比 file.txt 更新的文件
find . -newer file.txt
```

### 文件权限
```
# 权限恰好是 644
find . -perm 644
# 至少包含 644 的权限（即 u=rw, g=r, o=r 都满足）
find . -perm -644
# 任何人具有写权限（数字或符号模式）
find . -perm /222
# 属于 root 用户
find . -user root
# 属于 adm 组
find . -group adm
# 文件所有者不存在
find . -nouser
# 文件所属组不存在
find . -nogroup
```

> [!note] 备注
> `-nogroup` 用户组被删除后遗留的文件
> `-nouser` 用户被删除后遗留的问题

> [!note] 备注
> `-perm /222` **OR（或）**：**任意**一个位置有写权限即匹配
> `-perm -222` **AND（且）**：每个位置**全部**必须有写权限才匹配
### 组合条件

```shell
# 与（默认）
find . -name "*.txt" -size +1M
# 或（-o）
find . -name "*.log" -o -name "*.out"
# 非（! 或 -not）
find . ! -name "*.txt"
find . -not -name "*.txt"
# 复杂组合
find . \( -name "*.c" -o -name "*.h" \) -size +10k
```

## 执行动作

#### `-print`（默认，打印路径）

```shell
find . -name "*.conf" -print
```

#### `-ls`（显示详细信息，类似 ls -l）
```shell
find . -name "*.log" -ls
```

#### `-delete`（删除找到的文件，要小心！）
```shell
find . -name "*.tmp" -**delete**
```


####`-exec`（对每个结果执行命令，最常用）

```shell
# 删除所有 .log 文件（会逐个询问）
find . -name "*.log" -exec rm -i {} \;
# 批量修改权限
find . -type f -exec chmod 644 {} \;
# 批量查看文件内容
find . -name "*.txt" -exec cat {} \;
```

> [!note]  
> - `{}` 代表查找到的文件名
> - `\;` 表示命令结束（必须转义分号）  

#### `-exec ... {} +`（高效版，将所有文件一次性传给命令）

```shell
# 批量删除，效率更高
find . -name "*.log" -exec rm {} +
find . -name "*.c" -exec grep "main" {} +
```

#### `-ok`（类似 -exec，但每步会询问确认）
```shell
find . -name "*.conf" -ok rm {} \;
```

#### `-printf`（自定义输出格式）
> [!summary] 说明
> - # %p=路径
> - %f=文件名
> - %s=大小
> - %t=修改时间

```shell
find . -name "*.txt" -printf "%p  %s bytes\n"
```




## 常用命令

### 查找并统计行数
```shell
find . -name "*.c" -exec wc -l {} +
```

### 查找并打包
```shell
find . -name "*.jpg" -exec tar -rf images.tar {} +
```

### 查找大文件并排序显示
```shell
find . -type f -printf "%T@ %p\n" | sort -nr | head -10
```

### 查找并复制到指定目录

```shell
find . -name "*.pdf" -exec cp {} /backup/ \;
```

### 排除某个目录（使用 -path 和 -prune）

```shell
find . -path "./cache" -prune -o -name "*.txt" -print
```

> [!info] 
> - `-prune` 的作用是**告诉 find 不要进入这个目录**，它本身总返回 true
> - `-o`（或）确保：如果匹配了 `./cache`，就跳过后面的 `-name` 检查
## 延伸
- **相关笔记：** [[TODO]]
- **参考资料：** TODO
- **后续问题：** TODO
- **可复用沉淀：** TODO
