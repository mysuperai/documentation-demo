---
sidebar_label: reactor
title: scrapy.utils.reactor
---

#### listen\_tcp

```python
listen_tcp(portrange, host, factory)
```

Like reactor.listenTCP but tries different ports in a range.

## CallLaterOnce Objects

```python
class CallLaterOnce()
```

Schedule a function to be called in the next reactor loop, but only if
it hasn&#x27;t been already scheduled since the last time it ran.

#### install\_reactor

```python
install_reactor(reactor_path, event_loop_path=None)
```

Installs the :mod:`~twisted.internet.reactor` with the specified
import path. Also installs the asyncio event loop with the specified import
path if the asyncio reactor is enabled

#### verify\_installed\_reactor

```python
verify_installed_reactor(reactor_path)
```

Raises :exc:`Exception` if the installed
:mod:`~twisted.internet.reactor` does not match the specified import
path.

