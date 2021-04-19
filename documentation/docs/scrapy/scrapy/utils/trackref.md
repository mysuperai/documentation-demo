---
sidebar_label: trackref
title: scrapy.utils.trackref
---

This module provides some functions and classes to record and report
references to live object instances.

If you want live objects for a particular class to be tracked, you only have to
subclass from object_ref (instead of object).

About performance: This library has a minimal performance impact when enabled,
and no performance penalty at all when disabled (as object_ref becomes just an
alias to object in that case).

## object\_ref Objects

```python
class object_ref()
```

Inherit from this class to a keep a record of live instances

#### format\_live\_refs

```python
format_live_refs(ignore=NoneType)
```

Return a tabular representation of tracked objects

#### print\_live\_refs

```python
print_live_refs(*a, **kw)
```

Print tracked objects

#### get\_oldest

```python
get_oldest(class_name)
```

Get the oldest object for a specific class name

#### iter\_all

```python
iter_all(class_name)
```

Iterate over all objects of the same class by its class name

