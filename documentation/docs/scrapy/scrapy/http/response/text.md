---
sidebar_label: text
title: scrapy.http.response.text
---

This module implements the TextResponse class which adds encoding handling and
discovering (through HTTP headers) to base Response class.

See documentation in docs/topics/request-response.rst

## TextResponse Objects

```python
class TextResponse(Response)
```

#### body\_as\_unicode

```python
 | body_as_unicode()
```

Return body as unicode

#### json

```python
 | json()
```

.. versionadded:: 2.2

Deserialize a JSON document to a Python object.

#### text

```python
 | @property
 | text()
```

Body as unicode

#### urljoin

```python
 | urljoin(url)
```

Join this Response&#x27;s url with a possible relative url to form an
absolute interpretation of the latter.

#### follow

```python
 | follow(url, callback=None, method='GET', headers=None, body=None, cookies=None, meta=None, encoding=None, priority=0, dont_filter=False, errback=None, cb_kwargs=None, flags=None)
```

Return a :class:`~.Request` instance to follow a link ``url``.
It accepts the same arguments as ``Request.__init__`` method,
but ``url`` can be not only an absolute URL, but also

* a relative URL
* a :class:`~scrapy.link.Link` object, e.g. the result of
  :ref:`topics-link-extractors`
* a :class:`~scrapy.selector.Selector` object for a ``&lt;link&gt;`` or ``&lt;a&gt;`` element, e.g.
  ``response.css(&#x27;a.my_link&#x27;)[0]``
* an attribute :class:`~scrapy.selector.Selector` (not SelectorList), e.g.
  ``response.css(&#x27;a::attr(href)&#x27;)[0]`` or
  ``response.xpath(&#x27;//img/@src&#x27;)[0]``

See :ref:`response-follow-example` for usage examples.

#### follow\_all

```python
 | follow_all(urls=None, callback=None, method='GET', headers=None, body=None, cookies=None, meta=None, encoding=None, priority=0, dont_filter=False, errback=None, cb_kwargs=None, flags=None, css=None, xpath=None)
```

A generator that produces :class:`~.Request` instances to follow all
links in ``urls``. It accepts the same arguments as the :class:`~.Request`&#x27;s
``__init__`` method, except that each ``urls`` element does not need to be
an absolute URL, it can be any of the following:

* a relative URL
* a :class:`~scrapy.link.Link` object, e.g. the result of
  :ref:`topics-link-extractors`
* a :class:`~scrapy.selector.Selector` object for a ``&lt;link&gt;`` or ``&lt;a&gt;`` element, e.g.
  ``response.css(&#x27;a.my_link&#x27;)[0]``
* an attribute :class:`~scrapy.selector.Selector` (not SelectorList), e.g.
  ``response.css(&#x27;a::attr(href)&#x27;)[0]`` or
  ``response.xpath(&#x27;//img/@src&#x27;)[0]``

In addition, ``css`` and ``xpath`` arguments are accepted to perform the link extraction
within the ``follow_all`` method (only one of ``urls``, ``css`` and ``xpath`` is accepted).

Note that when passing a ``SelectorList`` as argument for the ``urls`` parameter or
using the ``css`` or ``xpath`` parameters, this method will not produce requests for
selectors from which links cannot be obtained (for instance, anchor tags without an
``href`` attribute)

