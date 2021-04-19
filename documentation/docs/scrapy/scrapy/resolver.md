---
sidebar_label: resolver
title: scrapy.resolver
---

## CachingThreadedResolver Objects

```python
@implementer(IResolverSimple)
class CachingThreadedResolver(ThreadedResolver)
```

Default caching resolver. IPv4 only, supports setting a timeout value for DNS requests.

## CachingHostnameResolver Objects

```python
@implementer(IHostnameResolver)
class CachingHostnameResolver()
```

Experimental caching resolver. Resolves IPv4 and IPv6 addresses,
does not support setting a timeout value for DNS requests.

