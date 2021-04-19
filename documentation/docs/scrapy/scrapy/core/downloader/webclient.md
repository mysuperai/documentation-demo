---
sidebar_label: webclient
title: scrapy.core.downloader.webclient
---

## ScrapyHTTPClientFactory Objects

```python
class ScrapyHTTPClientFactory(ClientFactory)
```

#### gotStatus

```python
 | gotStatus(version, status, message)
```

Set the status of the request on us.
@param version: The HTTP version.
@type version: L{bytes}
@param status: The HTTP status code, an integer represented as a
    bytestring.
@type status: L{bytes}
@param message: The HTTP status message.
@type message: L{bytes}

#### clientConnectionFailed

```python
 | clientConnectionFailed(_, reason)
```

When a connection attempt fails, the request cannot be issued.  If no
result has yet been provided to the result Deferred, provide the
connection failure reason as an error result.

