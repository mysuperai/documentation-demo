---
sidebar_label: crawler
title: scrapy.crawler
---

## Crawler Objects

```python
class Crawler()
```

#### stop

```python
 | @defer.inlineCallbacks
 | stop()
```

Starts a graceful stop of the crawler and returns a deferred that is
fired when the crawler is stopped.

## CrawlerRunner Objects

```python
class CrawlerRunner()
```

This is a convenient helper class that keeps track of, manages and runs
crawlers inside an already setup :mod:`~twisted.internet.reactor`.

The CrawlerRunner object must be instantiated with a
:class:`~scrapy.settings.Settings` object.

This class shouldn&#x27;t be needed (since Scrapy is responsible of using it
accordingly) unless writing scripts that manually handle the crawling
process. See :ref:`run-from-script` for an example.

#### crawl

```python
 | crawl(crawler_or_spidercls, *args, **kwargs)
```

Run a crawler with the provided arguments.

It will call the given Crawler&#x27;s :meth:`~Crawler.crawl` method, while
keeping track of it so it can be stopped later.

If ``crawler_or_spidercls`` isn&#x27;t a :class:`~scrapy.crawler.Crawler`
instance, this method will try to create one using this parameter as
the spider class given to it.

Returns a deferred that is fired when the crawling is finished.

**Arguments**:

- `crawler_or_spidercls`: already created crawler, or a spider class
    or spider&#x27;s name inside the project to create it
:type crawler_or_spidercls: :class:`~scrapy.crawler.Crawler` instance,
    :class:`~scrapy.spiders.Spider` subclass or string

- `args`: arguments to initialize the spider

- `kwargs`: keyword arguments to initialize the spider

#### create\_crawler

```python
 | create_crawler(crawler_or_spidercls)
```

Return a :class:`~scrapy.crawler.Crawler` object.

* If ``crawler_or_spidercls`` is a Crawler, it is returned as-is.
* If ``crawler_or_spidercls`` is a Spider subclass, a new Crawler
  is constructed for it.
* If ``crawler_or_spidercls`` is a string, this function finds
  a spider with this name in a Scrapy project (using spider loader),
  then creates a Crawler instance for it.

#### stop

```python
 | stop()
```

Stops simultaneously all the crawling jobs taking place.

Returns a deferred that is fired when they all have ended.

#### join

```python
 | @defer.inlineCallbacks
 | join()
```

join()

Returns a deferred that is fired when all managed :attr:`crawlers` have
completed their executions.

## CrawlerProcess Objects

```python
class CrawlerProcess(CrawlerRunner)
```

A class to run multiple scrapy crawlers in a process simultaneously.

This class extends :class:`~scrapy.crawler.CrawlerRunner` by adding support
for starting a :mod:`~twisted.internet.reactor` and handling shutdown
signals, like the keyboard interrupt command Ctrl-C. It also configures
top-level logging.

This utility should be a better fit than
:class:`~scrapy.crawler.CrawlerRunner` if you aren&#x27;t running another
:mod:`~twisted.internet.reactor` within your application.

The CrawlerProcess object must be instantiated with a
:class:`~scrapy.settings.Settings` object.

**Arguments**:

- `install_root_handler`: whether to install root logging handler
    (default: True)

This class shouldn&#x27;t be needed (since Scrapy is responsible of using it
accordingly) unless writing scripts that manually handle the crawling
process. See :ref:`run-from-script` for an example.

#### start

```python
 | start(stop_after_crawl=True)
```

This method starts a :mod:`~twisted.internet.reactor`, adjusts its pool
size to :setting:`REACTOR_THREADPOOL_MAXSIZE`, and installs a DNS cache
based on :setting:`DNSCACHE_ENABLED` and :setting:`DNSCACHE_SIZE`.

If ``stop_after_crawl`` is True, the reactor will be stopped after all
crawlers have finished, using :meth:`join`.

:param bool stop_after_crawl: stop or not the reactor when all
    crawlers have finished

