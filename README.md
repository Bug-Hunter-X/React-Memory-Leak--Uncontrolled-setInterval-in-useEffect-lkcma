# React Memory Leak: Uncontrolled setInterval in useEffect

This example demonstrates a common error in React applications: memory leaks caused by improperly using `setInterval` within the `useEffect` hook. The provided code showcases the issue and offers a corrected solution.

## Problem

The `setInterval` function is used to update a counter every second. However, the returned interval ID from `setInterval` is not stored or cleared. When the component unmounts, the interval continues to run, causing a memory leak.  This could also lead to unnecessary renders and unexpected behavior.

## Solution

The solution involves storing the interval ID in a state variable and clearing it using `clearInterval` in the cleanup function of `useEffect`.