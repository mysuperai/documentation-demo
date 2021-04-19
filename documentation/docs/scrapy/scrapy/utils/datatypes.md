---
sidebar_label: datatypes
title: scrapy.utils.datatypes
---

This module contains data types used by Scrapy which are not included in the
Python Standard Library.

This module must not depend on any module outside the Standard Library.

## CaselessDict Objects

```python
class CaselessDict(dict)
```

#### normkey

```python
 | normkey(key)
```

Method to normalize dictionary key access

#### normvalue

```python
 | normvalue(value)
```

Method to normalize values prior to be setted

## LocalCache Objects

```python
class LocalCache(collections.OrderedDict)
```

Dictionary with a finite number of keys.

Older items expires first.

## LocalWeakReferencedCache Objects

```python
class LocalWeakReferencedCache(weakref.WeakKeyDictionary)
```

A weakref.WeakKeyDictionary implementation that uses LocalCache as its
underlying data structure, making it ordered and capable of being size-limited.

Useful for memoization, while avoiding keeping received
arguments in memory only because of the cached references.

Note: like LocalCache and unlike weakref.WeakKeyDictionary,
it cannot be instantiated with an initial dictionary.

## SequenceExclude Objects

```python
class SequenceExclude()
```

Object to test if an item is NOT within some sequence.

