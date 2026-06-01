---
tags:
  - note/standard
  - type/standard
  - status/growing
  - topic/Algorithm
  - priority/Lv2
date: 2026-06-01 21:35
updated: 2026-06-01 21:35
status: growing
topic: Algorithm
priority: Lv2
deck: Note::Algorithm
---
# 问题
在无序数组中寻找第 $K$ 大元素，最直观的方法是先排序（如快排或堆排序），时间复杂度为 $O(n \log n)$。

但在 $O(n)$ 时间复杂度内解决这个问题，最经典的算法是 **快速选择算法（Quick Select）**。它是快速排序（Quick Sort）的变种，利用了快排中 **Partition（切分）** 的思想。

### 核心思想：为什么是 $O(n)$？

快排的 Partition 操作会选择一个基准元素（pivot），并将数组分为两部分：

- 左边都小于或等于 pivot
    
- 右边都大于 pivot
    

一旦 Partition 完成，pivot 最终所在的位置 `p` 就是它在有序数组中的**绝对位置**。

- 如果我们要找第 $K$ 大，本质上就是找升序排序后下标为 `target = len - K` 的元素。
    
- **快排**：需要递归处理左边**和**右边两部分，时间复杂度 $O(n \log n)$。
    
- **快速选择**：因为 pivot 的位置已固定，我们只需对比 `p` 与 `target`。如果 `p == target` 直接返回；否则**只需要递归其中一边**。
    

每一次我们都将搜索范围缩小约一半，总执行的工作量为：

$$n + \frac{n}{2} + \frac{n}{4} + \frac{n}{8} + \dots \approx 2n$$

因此，平均时间复杂度成功降到了 **$O(n)$**。

### Go 语言实现代码

```go
package main

import (
	"fmt"
	"math/rand"
)

func findKthLargest(nums []int, k int) int {
	n := len(nums)
	// 第 K 大元素，对应升序排序后的下标就是 n - k
	target := n - k
	return quickSelect(nums, 0, n-1, target)
}

func quickSelect(nums []int, left, right, target int) int {
	if left == right {
		return nums[left]
	}

	// 划分之后，pivot 的随机下标变为 p
	p := randomPartition(nums, left, right)

	if p == target {
		return nums[p]
	} else if p < target {
		// 目标在右半部分
		return quickSelect(nums, p+1, right, target)
	} else {
		// 目标在左半部分
		return quickSelect(nums, left, p-1, target)
	}
}

// 随机选择 pivot，防止最坏情况 O(n^2) 退化
func randomPartition(nums []int, left, right int) int {
	i := rand.Intn(right-left+1) + left
	nums[i], nums[right] = nums[right], nums[i] // 把 pivot 交换到最右侧挂起
	return partition(nums, left, right)
}

func partition(nums []int, left, right int) int {
	pivot := nums[right]
	i := left - 1 // i 指向小于等于 pivot 区域的右边界

	for j := left; j < right; j++ {
		if nums[j] <= pivot {
			i++
			nums[i], nums[j] = nums[j], nums[i]
		}
	}
	// 把 pivot 换回它最终应该在的位置
	nums[i+1], nums[right] = nums[right], nums[i+1]
	return i + 1
}

func main() {
	nums := []int{3, 2, 1, 5, 6, 4}
	k := 2
	fmt.Printf("第 %d 大的元素是: %d\n", k, findKthLargest(nums, k)) // 输出 5
}
```

### 复杂度与细节分析

#### 1. 时间复杂度

- **平均时间复杂度**：$O(n)$。
    
- **最坏时间复杂度**：$O(n^2)$。当数组已经有序，且每次切分都倒霉地选到了最大或最小值时会退化。代码中引入了 **`randomPartition`（随机选择基准值）**，在概率学上将最坏情况的发生几率降到了极低，保证了实际运行中的 $O(n)$ 表现。
    

#### 2. 空间复杂度

- **$O(\log n)$ 至 $O(n)$** 的递归栈空间。如果显式地改写成 **迭代（while 循环）** 的形式，可以将空间复杂度进一步优化到 **$O(1)$**。
    

#### 3. 为什么不用大顶堆/小顶堆？

- 使用容量为 $K$ 的小顶堆，时间复杂度是 $O(n \log K)$，空间复杂度是 $O(K)$。
    
- 如果面试官明确要求 **$O(n)$ 时间** 且 **不需要考虑 $O(1)$ 空间**（或允许修改原数组），**快速选择** 是唯一标准的正解。