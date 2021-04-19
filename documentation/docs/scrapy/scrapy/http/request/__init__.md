---
sidebar_label: request
title: scrapy.http.request
---

This module implements the Request class which is used to represent HTTP
requests in Scrapy.

See documentation in docs/topics/request-response.rst

## Request Objects

```python
class Request(object_ref)
```

#### copy

```python
 | copy()
```

Return a copy of this Request

#### replace

```python
 | replace(*args, **kwargs)
```

Create a new Request with the same attributes except for those
given new values.

#### from\_curl

```python
 | @classmethod
 | from_curl(cls, curl_command, ignore_unknown_options=True, **kwargs)
```

Create a Request object from a string containing a `cURL
&lt;https://curl.haxx.se/&gt;`_ command. It populates the HTTP method, the
URL, the headers, the cookies and the body. It accepts the same
arguments as the :class:`Request` class, taking preference and
overriding the values of the same arguments contained in the cURL
command.

Unrecognized options are ignored by default. To raise an error when
finding unknown options call this method by passing
``ignore_unknown_options=False``.

.. caution:: Using :meth:`from_curl` from :class:`~scrapy.http.Request`
             subclasses, such as :class:`~scrapy.http.JSONRequest`, or
             :class:`~scrapy.http.XmlRpcRequest`, as well as having
             :ref:`downloader middlewares &lt;topics-downloader-middleware&gt;`
             and
             :ref:`spider middlewares &lt;topics-spider-middleware&gt;`
             enabled, such as
             :class:`~scrapy.downloadermiddlewares.defaultheaders.DefaultHeadersMiddleware`,
             :class:`~scrapy.downloadermiddlewares.useragent.UserAgentMiddleware`,
             or
             :class:`~scrapy.downloadermiddlewares.httpcompression.HttpCompressionMiddleware`,
             may modify the :class:`~scrapy.http.Request` object.

To translate a cURL command into a Scrapy request,
you may use `curl2scrapy &lt;https://michael-shub.github.io/curl2scrapy/&gt;`_.

