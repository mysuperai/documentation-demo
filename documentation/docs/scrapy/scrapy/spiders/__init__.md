---
sidebar_label: spiders
title: scrapy.spiders
---

Base class for Scrapy spiders

See documentation in docs/topics/spiders.rst

## Spider Objects

```python
class Spider(object_ref)
```

Base class for scrapy spiders. All spiders must inherit from this
class.

#### log

```python
 | log(message, level=logging.DEBUG, **kw)
```

Log the given message at the given log level

This helper wraps a log call to the logger within the spider, but you
can use it directly (e.g. Spider.logger.info(&#x27;msg&#x27;)) or use any other
Python logger too.

#### make\_requests\_from\_url

```python
 | make_requests_from_url(url)
```

This method is deprecated.

