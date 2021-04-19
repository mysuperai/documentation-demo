---
sidebar_label: robotstxt
title: scrapy.robotstxt
---

## RobotParser Objects

```python
class RobotParser(, metaclass=ABCMeta)
```

#### from\_crawler

```python
 | @classmethod
 | @abstractmethod
 | from_crawler(cls, crawler, robotstxt_body)
```

Parse the content of a robots.txt_ file as bytes. This must be a class method.
It must return a new instance of the parser backend.

**Arguments**:

- `crawler`: crawler which made the request
:type crawler: :class:`~scrapy.crawler.Crawler` instance

- `robotstxt_body`: content of a robots.txt_ file.
:type robotstxt_body: bytes

#### allowed

```python
 | @abstractmethod
 | allowed(url, user_agent)
```

Return ``True`` if  ``user_agent`` is allowed to crawl ``url``, otherwise return ``False``.

**Arguments**:

- `url`: Absolute URL
:type url: str

- `user_agent`: User agent
:type user_agent: str

