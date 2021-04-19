---
sidebar_label: item
title: scrapy.item
---

Scrapy Item

See documentation in docs/topics/item.rst

## BaseItem Objects

```python
class BaseItem(_BaseItem, metaclass=_BaseItemMeta)
```

Deprecated, please use :class:`scrapy.item.Item` instead

## Field Objects

```python
class Field(dict)
```

Container of field metadata

## ItemMeta Objects

```python
class ItemMeta(_BaseItemMeta)
```

Metaclass_ of :class:`Item` that handles field definitions.

.. _metaclass: https://realpython.com/python-metaclasses

## DictItem Objects

```python
class DictItem(MutableMapping,  BaseItem)
```

#### deepcopy

```python
 | deepcopy()
```

Return a :func:`~copy.deepcopy` of this item.

## Item Objects

```python
class Item(DictItem, metaclass=ItemMeta)
```

Base class for scraped items.

In Scrapy, an object is considered an ``item`` if it is an instance of either
:class:`Item` or :class:`dict`, or any subclass. For example, when the output of a
spider callback is evaluated, only instances of :class:`Item` or
:class:`dict` are passed to :ref:`item pipelines &lt;topics-item-pipeline&gt;`.

If you need instances of a custom class to be considered items by Scrapy,
you must inherit from either :class:`Item` or :class:`dict`.

Items must declare :class:`Field` attributes, which are processed and stored
in the ``fields`` attribute. This restricts the set of allowed field names
and prevents typos, raising ``KeyError`` when referring to undefined fields.
Additionally, fields can be used to define metadata and control the way
data is processed internally. Please refer to the :ref:`documentation
about fields &lt;topics-items-fields&gt;` for additional information.

Unlike instances of :class:`dict`, instances of :class:`Item` may be
:ref:`tracked &lt;topics-leaks-trackrefs&gt;` to debug memory leaks.

