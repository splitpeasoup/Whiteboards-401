
### challenge 8
Write a functin called `isDiff` that accepts two objects and returns `true` if there is any difference between the objects. It should return `false` if the objects contain all the same key-value pairs.

Example:
```
    isDiff({foo: 'bar'},) ({foo: 'bar'}) // false
    isDiff({foo: 'bar'},) ({foo: 'qqq'}) //  true different values with the pairs
    isDiff({foo: 'bar'},) ({}) // true missing key
    isDiff({},) ({foo: 'bar'} // true missing key
```