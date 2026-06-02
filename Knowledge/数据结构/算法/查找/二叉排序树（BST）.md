---
tags:
  - note/standard
  - type/standard
  - status/growing
  - topic/Algorithm
  - priority/Lv1
date: 2026-06-01 21:43
updated: 2026-06-01 21:43
status: growing
topic: Algorithm
priority: Lv1
deck: Note::Algorithm
---
# 二叉排序树（Binary Search Tree，BST）

## 概念

二叉排序树，又称二叉查找树
它或者是一棵空树，或者具有下列性质的**二叉树**。
- 如它的左子树不空，则左子树上所有结点的值均小于它的根结构的值。
- 如它的右子树不空，则右子树上所有结点的值均大于它的根结构的值。
- 它的左、右子树也分别为二叉排序树。

### BST 的一个神奇特性：中序遍历
如果你对一棵二叉排序树进行**中序遍历**（左子树 -> 根节点 -> 右子树），你会发现一个非常漂亮的现象：**输出的序列是严格递增（升序）的。**

以上图为例，中序遍历的结果是： `1, 3, 4, 6, 7, 8, 10, 13, 14`

> **提示**：如果在开发中需要对树形结构的数据进行排序输出，BST 的这个特性极其有用。

### 复杂度
```jsp
O(logn)
```