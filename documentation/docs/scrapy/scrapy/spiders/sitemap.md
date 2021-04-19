---
sidebar_label: sitemap
title: scrapy.spiders.sitemap
---

## SitemapSpider Objects

```python
class SitemapSpider(Spider)
```

#### sitemap\_filter

```python
 | sitemap_filter(entries)
```

This method can be used to filter sitemap entries by their
attributes, for example, you can filter locs with lastmod greater
than a given date (see docs).

