---
sidebar_label: scraper
title: scrapy.core.scraper
---

This module implements the Scraper component which parses responses and
extracts information from them

## Slot Objects

```python
class Slot()
```

Scraper slot (one per running spider)

## Scraper Objects

```python
class Scraper()
```

#### open\_spider

```python
 | @inlineCallbacks
 | open_spider(spider: Spider)
```

Open the given spider for scraping and allocate resources for it

#### close\_spider

```python
 | close_spider(spider: Spider) -> Deferred
```

Close a spider being scraped and release its resources

#### is\_idle

```python
 | is_idle() -> bool
```

Return True if there isn&#x27;t any more spiders to process

