---
sidebar_label: httpcache
title: scrapy.extensions.httpcache
---

## FilesystemCacheStorage Objects

```python
class FilesystemCacheStorage()
```

#### retrieve\_response

```python
 | retrieve_response(spider, request)
```

Return response if present in cache, or None otherwise.

#### store\_response

```python
 | store_response(spider, request, response)
```

Store the given response in the cache.

#### parse\_cachecontrol

```python
parse_cachecontrol(header)
```

Parse Cache-Control header

https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9

&gt;&gt;&gt; parse_cachecontrol(b&#x27;public, max-age=3600&#x27;) == {b&#x27;public&#x27;: None,
...                                                 b&#x27;max-age&#x27;: b&#x27;3600&#x27;}
True
&gt;&gt;&gt; parse_cachecontrol(b&#x27;&#x27;) == {}
True

