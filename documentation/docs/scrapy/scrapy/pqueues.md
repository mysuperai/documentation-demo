---
sidebar_label: pqueues
title: scrapy.pqueues
---

## ScrapyPriorityQueue Objects

```python
class ScrapyPriorityQueue()
```

A priority queue implemented using multiple internal queues (typically,
FIFO queues). It uses one internal queue for each priority value. The internal
queue must implement the following methods:

    * push(obj)
    * pop()
    * close()
    * __len__()

``__init__`` method of ScrapyPriorityQueue receives a downstream_queue_cls
argument, which is a class used to instantiate a new (internal) queue when
a new priority is allocated.

Only integer priorities should be used. Lower numbers are higher
priorities.

startprios is a sequence of priorities to start with. If the queue was
previously closed leaving some priority buckets non-empty, those priorities
should be passed in startprios.

## DownloaderAwarePriorityQueue Objects

```python
class DownloaderAwarePriorityQueue()
```

PriorityQueue which takes Downloader activity into account:
domains (slots) with the least amount of active downloads are dequeued
first.

