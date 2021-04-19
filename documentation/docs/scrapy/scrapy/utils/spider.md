---
sidebar_label: spider
title: scrapy.utils.spider
---

#### iter\_spider\_classes

```python
iter_spider_classes(module)
```

Return an iterator over all spider classes defined in the given module
that can be instantiated (i.e. which have name)

#### spidercls\_for\_request

```python
spidercls_for_request(spider_loader, request, default_spidercls=None, log_none=False, log_multiple=False)
```

Return a spider class that handles the given Request.

This will look for the spiders that can handle the given request (using
the spider loader) and return a Spider class if (and only if) there is
only one Spider able to handle the Request.

If multiple spiders (or no spider) are found, it will return the
default_spidercls passed. It can optionally log if multiple or no spiders
are found.

