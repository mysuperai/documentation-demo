---
sidebar_label: scheduler
title: scrapy.core.scheduler
---

## Scheduler Objects

```python
class Scheduler()
```

Scrapy Scheduler. It allows to enqueue requests and then get
a next request to download. Scheduler is also handling duplication
filtering, via dupefilter.

Prioritization and queueing is not performed by the Scheduler.
User sets ``priority`` field for each Request, and a PriorityQueue
(defined by :setting:`SCHEDULER_PRIORITY_QUEUE`) uses these priorities
to dequeue requests in a desired order.

Scheduler uses two PriorityQueue instances, configured to work in-memory
and on-disk (optional). When on-disk queue is present, it is used by
default, and an in-memory queue is used as a fallback for cases where
a disk queue can&#x27;t handle a request (can&#x27;t serialize it).

:setting:`SCHEDULER_MEMORY_QUEUE` and
:setting:`SCHEDULER_DISK_QUEUE` allow to specify lower-level queue classes
which PriorityQueue instances would be instantiated with, to keep requests
on disk and in memory respectively.

Overall, Scheduler is an object which holds several PriorityQueue instances
(in-memory and on-disk) and implements fallback logic for them.
Also, it handles dupefilters.

