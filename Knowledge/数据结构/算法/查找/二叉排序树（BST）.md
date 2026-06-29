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

## 原理
### 查找 (Search)
从根节点开始：
- 如果目标值等于当前节点值，查找成功。
- 如果目标值小于当前节点值，转向**左子树**继续查找。
- 如果目标值大于当前节点值，转向**右子树**继续查找。
- 如果查找到叶子节点仍未找到，说明树中不存在该值。
###  插入 (Insert)
插入新节点的过程其实就是查找失败的过程：
- 新节点总是作为**叶子节点**插入的。
- 从根节点出发，比当前节点小就往左走，大就往右走，直到找到一个空位置（`None`），把新节点安顿在那里。
###  删除 (Delete)——最复杂的操作

删除节点时，为了不破坏二叉排序树的结构，需要分三种情况讨论：
1. **叶子节点**（没有子节点）：直接删除，将其父节点对应的指针设为 `None`。
2. **只有一个孩子**（只有左子树或只有右子树）：让这个孩子节点顶替被删除节点的位置。
3. **有两个孩子**：不能直接删。需要找到该节点**右子树中的最小值**（即右子树的最左下节点，称为后继节点），用它的值覆盖掉要删除的值，然后再去右子树中删掉那个重复的后继节点。

## 代码
```go
package main

import "fmt"

// TreeNode 定义二叉排序树的节点结构
type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

// BinarySortTree 定义二叉排序树结构
type BinarySortTree struct {
	Root *TreeNode
}

// ==================== 1. 插入操作 ====================
// Insert 向树中插入一个新值
func (bst *BinarySortTree) Insert(val int) {
	if bst.Root == nil {
		bst.Root = &TreeNode{Val: val}
	} else {
		bst.insertRecursive(bst.Root, val)
	}
}

func (bst *BinarySortTree) insertRecursive(node *TreeNode, val int) {
	if val < node.Val {
		if node.Left == nil {
			node.Left = &TreeNode{Val: val}
		} else {
			bst.insertRecursive(node.Left, val)
		}
	} else if val > node.Val {
		if node.Right == nil {
			node.Right = &TreeNode{Val: val}
		} else {
			bst.insertRecursive(node.Right, val)
		}
	}
	// 如果 val == node.Val，通常 BST 不允许重复，这里直接忽略
}

// ==================== 2. 查找操作 ====================
// Search 在树中查找某个值，返回对应的节点指针
func (bst *BinarySortTree) Search(val int) *TreeNode {
	return bst.searchRecursive(bst.Root, val)
}

func (bst *BinarySortTree) searchRecursive(node *TreeNode, val int) *TreeNode {
	if node == nil || node.Val == val {
		return node
	}
	if val < node.Val {
		return bst.searchRecursive(node.Left, val)
	}
	return bst.searchRecursive(node.Right, val)
}

// ==================== 3. 删除操作 ====================
// Delete 从树中删除一个指定的值
func (bst *BinarySortTree) Delete(val int) {
	bst.Root = bst.deleteRecursive(bst.Root, val)
}

func (bst *BinarySortTree) deleteRecursive(node *TreeNode, val int) *TreeNode {
	if node == nil {
		return nil
	}

	// 1. 先通过二分查找定位要删除的节点
	if val < node.Val {
		node.Left = bst.deleteRecursive(node.Left, val)
	} else if val > node.Val {
		node.Right = bst.deleteRecursive(node.Right, val)
	} else {
		// 找到了要删除的节点！

		// 情况 1 & 2：左子树或右子树为空（或者都为空）
		if node.Left == nil {
			return node.Right
		} else if node.Right == nil {
			return node.Left
		}

		// 情况 3：左右子树都不为空
		// 找到右子树中的最小值节点（后继节点）来顶替
		minNode := bst.findMin(node.Right)
		// 复制后继节点的值到当前节点
		node.Val = minNode.Val
		// 在右子树中递归删除那个已经被用掉的后继节点
		node.Right = bst.deleteRecursive(node.Right, minNode.Val)
	}
	return node
}

// 辅助函数：查找子树中的最小值节点
func (bst *BinarySortTree) findMin(node *TreeNode) *TreeNode {
	current := node
	for current.Left != nil {
		current = current.Left
	}
	return current
}

// ==================== 4. 中序遍历 ====================
// Inorder 中序遍历，返回一个有序的整型切片
func (bst *BinarySortTree) Inorder() []int {
	var result []int
	bst.inorderRecursive(bst.Root, &result)
	return result
}

func (bst *BinarySortTree) inorderRecursive(node *TreeNode, result *[]int) {
	if node != nil {
		bst.inorderRecursive(node.Left, result)
		*result = append(*result, node.Val)
		bst.inorderRecursive(node.Right, result)
	}
}
```