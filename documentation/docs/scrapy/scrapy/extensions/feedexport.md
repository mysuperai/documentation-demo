---
sidebar_label: feedexport
title: scrapy.extensions.feedexport
---

Feed Exports extension

See documentation in docs/topics/feed-exports.rst

## IFeedStorage Objects

```python
class IFeedStorage(Interface)
```

Interface that all Feed Storages must implement

#### \_\_init\_\_

```python
 | __init__(uri, *, feed_options=None)
```

Initialize the storage with the parameters given in the URI and the
feed-specific options (see :setting:`FEEDS`)

#### open

```python
 | open(spider)
```

Open the storage for the given spider. It must return a file-like
object that will be used for the exporters

#### store

```python
 | store(file)
```

Store the given file stream

