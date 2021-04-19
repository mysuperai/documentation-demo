---
sidebar_label: lxmlhtml
title: scrapy.linkextractors.lxmlhtml
---

Link extractor based on lxml.html

## LxmlLinkExtractor Objects

```python
class LxmlLinkExtractor(FilteringLinkExtractor)
```

#### extract\_links

```python
 | extract_links(response)
```

Returns a list of :class:`~scrapy.link.Link` objects from the
specified :class:`response &lt;scrapy.http.Response&gt;`.

Only links that match the settings passed to the ``__init__`` method of
the link extractor are returned.

Duplicate links are omitted.

