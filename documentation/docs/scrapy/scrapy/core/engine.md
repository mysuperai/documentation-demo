---
sidebar_label: engine
title: scrapy.core.engine
---

This is the Scrapy engine which controls the Scheduler, Downloader and Spiders.

For more information see docs/topics/architecture.rst

## ExecutionEngine Objects

```python
class ExecutionEngine()
```

#### start

```python
 | @defer.inlineCallbacks
 | start()
```

Start the execution engine

#### stop

```python
 | stop()
```

Stop the execution engine gracefully

#### close

```python
 | close()
```

Close the execution engine gracefully.

If it has already been started, stop it. In all cases, close all spiders
and the downloader.

#### pause

```python
 | pause()
```

Pause the execution engine

#### unpause

```python
 | unpause()
```

Resume the execution engine

#### has\_capacity

```python
 | has_capacity()
```

Does the engine have capacity to handle more spiders

#### close\_spider

```python
 | close_spider(spider, reason='cancelled')
```

Close (cancel) spider and clear all its outstanding requests

