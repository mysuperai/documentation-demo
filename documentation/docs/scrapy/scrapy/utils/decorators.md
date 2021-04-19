---
sidebar_label: decorators
title: scrapy.utils.decorators
---

#### deprecated

```python
deprecated(use_instead=None)
```

This is a decorator which can be used to mark functions
as deprecated. It will result in a warning being emitted
when the function is used.

#### defers

```python
defers(func)
```

Decorator to make sure a function always returns a deferred

#### inthread

```python
inthread(func)
```

Decorator to call a function in a thread and return a deferred with the
result

