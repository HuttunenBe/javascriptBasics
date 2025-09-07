/*Arrays

Find max/min number → Math.max(...arr) or loop

Sort ascending/descending → arr.sort((a,b)=>a-b)

Find index → arr.indexOf(value) or arr.findIndex(cond)

Filter → arr.filter(cond)

Check existence → arr.includes(value)

Strings

Check if substring exists → str.includes("text")

Find position → str.indexOf("text")

Replace part of string → str.replace("old","new")

Slice part of string → str.slice(start,end)

Objects

Sort by property → arr.sort((a,b)=>a.prop-b.prop)

Find object → arr.find(o=>o.prop===value)

Find index → arr.findIndex(o=>o.prop===value)

Filter objects → arr.filter(o=>condition)

Easiest way to answer in tests

Read question carefully: Does it need sorting first?

Pick right method: sort(), find(), filter(), indexOf()

Use custom comparator only if sorting numbers or objects.

Use binary search if array is sorted and question asks for index of element.

Remember edge cases: element not found → return -1 (arrays) or undefined (objects).*/