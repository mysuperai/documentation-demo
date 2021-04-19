---
sidebar_label: unified
title: scrapy.selector.unified
---

XPath selectors based on lxml

## SelectorList Objects

```python
class SelectorList(_ParselSelector.selectorlist_cls,  object_ref)
```

The :class:`SelectorList` class is a subclass of the builtin ``list``
class, which provides a few additional methods.

## Selector Objects

```python
class Selector(_ParselSelector,  object_ref)
```

An instance of :class:`Selector` is a wrapper over response to select
certain parts of its content.

``response`` is an :class:`~scrapy.http.HtmlResponse` or an
:class:`~scrapy.http.XmlResponse` object that will be used for selecting
and extracting data.

``text`` is a unicode string or utf-8 encoded text for cases when a
``response`` isn&#x27;t available. Using ``text`` and ``response`` together is
undefined behavior.

``type`` defines the selector type, it can be ``&quot;html&quot;``, ``&quot;xml&quot;``
or ``None`` (default).

If ``type`` is ``None``, the selector automatically chooses the best type
based on ``response`` type (see below), or defaults to ``&quot;html&quot;`` in case it
is used together with ``text``.

If ``type`` is ``None`` and a ``response`` is passed, the selector type is
inferred from the response type as follows:

* ``&quot;html&quot;`` for :class:`~scrapy.http.HtmlResponse` type
* ``&quot;xml&quot;`` for :class:`~scrapy.http.XmlResponse` type
* ``&quot;html&quot;`` for anything else

Otherwise, if ``type`` is set, the selector type will be forced and no
detection will occur.

