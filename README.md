# 🌟 A Deep Dive into Handling 10,000 List Items 🌟

Welcome to this repository where we explore performance optimization techniques when handling 10,000 list items on the DOM. This project demonstrates how to manipulate DOM elements efficiently, avoiding common pitfalls such as layout thrashing and rendering all items as nodes.

## Overview

When it comes to performance, especially in technical interviews, it is crucial to provide specific and optimized solutions. In this example project, we focus on methods that enhance DOM manipulation performance, ensuring smooth and efficient user experiences.

## Key Techniques Used

### 1. Efficient DOM Manipulation
When performing read and write operations on the DOM, doing these consecutively can lead to a layout operation for each process, resulting in blocking time. To avoid this:
- **Step 1:** Perform all read operations first.
- **Step 2:** Follow with all write operations.
This approach prevents layout thrashing, as advised in [this source](https://web.dev/articles/avoid-large-complex-layouts-and-layout-thrashing?hl=tr).

### 2. Utilizing `will-change` Property
Since we are modifying the width and height of list item elements, setting the `will-change` property to `width, height` informs the user agent to optimize these changes, improving performance.

### 3. Scheduling DOM Operations
To organize and schedule read/write operations on the DOM efficiently, consider using libraries like **FastDOM** or developing a custom solution. Learn more about FastDOM [here](https://github.com/wilsonpage/fastdom).

### 4. Lazy Loading with `@defer`
Lazy loading allows us to defer calculations for list items not currently visible on the screen, enhancing performance. The `@defer` block is particularly useful in this context.

### 5. Reducing DOM Nodes with Angular CDK Virtual Scroll
Using `@defer` with `@placeholder` and the "on viewport" option helps, but doesn't reduce the number of DOM nodes. To tackle this:
- Use **Angular CDK Virtual Scroll** to reduce the number of rendered DOM nodes, boosting performance.

### 6. Minimizing Node Depth
To further reduce the number of DOM nodes, review and remove unnecessary nodes, which decreases the overall depth and number of nodes rendered.

## Performance Results

After implementing and testing these optimizations with **Lighthouse**, we achieved a performance score of **96** with no blocking time remaining. This demonstrates the effectiveness of these techniques.

## Conclusion

Performance optimization is a blend of general principles and specific techniques. Different scenarios may require tailored solutions. Explore the project files to see these methods in action and apply them to your own projects.
