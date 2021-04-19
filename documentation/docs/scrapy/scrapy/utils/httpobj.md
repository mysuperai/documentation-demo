---
sidebar_label: httpobj
title: scrapy.utils.httpobj
---

Helper functions for scrapy.http objects (Request, Response)

#### urlparse\_cached

```python
urlparse_cached(request_or_response: Union[Request, Response]) -> ParseResult
```

Return urlparse.urlparse caching the result, where the argument can be a
Request or Response object

