---
sidebar_label: iterators
title: scrapy.utils.iterators
---

#### xmliter

```python
xmliter(obj, nodename)
```

Return a iterator of Selector&#x27;s over all nodes of a XML document,
   given the name of the node to iterate. Useful for parsing XML feeds.

obj can be:
- a Response object
- a unicode string
- a string encoded as utf-8

#### csviter

```python
csviter(obj, delimiter=None, headers=None, encoding=None, quotechar=None)
```

Returns an iterator of dictionaries from the given csv object

obj can be:
- a Response object
- a unicode string
- a string encoded as utf-8

delimiter is the character used to separate fields on the given obj.

headers is an iterable that when provided offers the keys
for the returned dictionaries, if not the first row is used.

quotechar is the character used to enclosure fields on the given obj.

