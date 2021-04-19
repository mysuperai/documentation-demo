---
sidebar_label: response
title: scrapy.http.response
---

This module implements the Response class which is used to represent HTTP
responses in Scrapy.

See documentation in docs/topics/request-response.rst

## Response Objects

```python
class Response(object_ref)
```

#### copy

```python
 | copy()
```

Return a copy of this Response

#### replace

```python
 | replace(*args, **kwargs)
```

Create a new Response with the same attributes except for those
given new values.

#### urljoin

```python
 | urljoin(url)
```

Join this Response&#x27;s url with a possible relative url to form an
absolute interpretation of the latter.

#### text

```python
 | @property
 | text()
```

For subclasses of TextResponse, this will return the body
as str

#### css

```python
 | css(*a, **kw)
```

Shortcut method implemented only by responses whose content
is text (subclasses of TextResponse).

#### xpath

```python
 | xpath(*a, **kw)
```

Shortcut method implemented only by responses whose content
is text (subclasses of TextResponse).

#### follow

```python
 | follow(url, callback=None, method='GET', headers=None, body=None, cookies=None, meta=None, encoding='utf-8', priority=0, dont_filter=False, errback=None, cb_kwargs=None, flags=None)
```

Return a :class:`~.Request` instance to follow a link ``url``.
It accepts the same arguments as ``Request.__init__`` method,
but ``url`` can be a relative URL or a ``scrapy.link.Link`` object,
not only an absolute URL.

:class:`~.TextResponse` provides a :meth:`~.TextResponse.follow`
method which supports selectors in addition to absolute/relative URLs
and Link objects.

.. versionadded:: 2.0
   The *flags* parameter.

#### follow\_all

```python
 | follow_all(urls, callback=None, method='GET', headers=None, body=None, cookies=None, meta=None, encoding='utf-8', priority=0, dont_filter=False, errback=None, cb_kwargs=None, flags=None)
```

.. versionadded:: 2.0

Return an iterable of :class:`~.Request` instances to follow all links
in ``urls``. It accepts the same arguments as ``Request.__init__`` method,
but elements of ``urls`` can be relative URLs or :class:`~scrapy.link.Link` objects,
not only absolute URLs.

:class:`~.TextResponse` provides a :meth:`~.TextResponse.follow_all`
method which supports selectors in addition to absolute/relative URLs
and Link objects.

