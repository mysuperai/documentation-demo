---
sidebar_label: agent
title: scrapy.core.http2.agent
---

## H2ConnectionPool Objects

```python
class H2ConnectionPool()
```

#### close\_connections

```python
 | close_connections() -> None
```

Close all the HTTP/2 connections and remove them from pool

**Returns**:

  Deferred that fires when all connections have been closed

## H2Agent Objects

```python
class H2Agent()
```

#### get\_key

```python
 | get_key(uri: URI) -> Tuple
```

**Arguments**:

  uri - URI obtained directly from request URL

## ScrapyProxyH2Agent Objects

```python
class ScrapyProxyH2Agent(H2Agent)
```

#### get\_key

```python
 | get_key(uri: URI) -> Tuple
```

We use the proxy uri instead of uri obtained from request url

