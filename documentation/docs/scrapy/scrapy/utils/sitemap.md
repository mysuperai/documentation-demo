---
sidebar_label: sitemap
title: scrapy.utils.sitemap
---

Module for processing Sitemaps.

Note: The main purpose of this module is to provide support for the
SitemapSpider, its API is subject to change without notice.

## Sitemap Objects

```python
class Sitemap()
```

Class to parse Sitemap (type=urlset) and Sitemap Index
(type=sitemapindex) files

#### sitemap\_urls\_from\_robots

```python
sitemap_urls_from_robots(robots_text, base_url=None)
```

Return an iterator over all sitemap urls contained in the given
robots.txt file

