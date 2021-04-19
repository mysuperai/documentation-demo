---
sidebar_label: protocol
title: scrapy.core.http2.protocol
---

## H2ClientProtocol Objects

```python
@implementer(IHandshakeListener)
class H2ClientProtocol(Protocol,  TimeoutMixin)
```

#### \_\_init\_\_

```python
 | __init__(uri: URI, settings: Settings, conn_lost_deferred: Deferred) -> None
```

**Arguments**:

- `uri` - URI of the base url to which HTTP/2 Connection will be made.
  uri is used to verify that incoming client requests have correct
  base URL.
- `settings` - Scrapy project settings
- `conn_lost_deferred` - Deferred fires with the reason: Failure to notify
  that connection was lost

#### h2\_connected

```python
 | @property
 | h2_connected() -> bool
```

Boolean to keep track of the connection status.
This is used while initiating pending streams to make sure
that we initiate stream only during active HTTP/2 Connection

#### allowed\_max\_concurrent\_streams

```python
 | @property
 | allowed_max_concurrent_streams() -> int
```

We keep total two streams for client (sending data) and
server side (receiving data) for a single request. To be safe
we choose the minimum. Since this value can change in event
RemoteSettingsChanged we make variable a property.

#### pop\_stream

```python
 | pop_stream(stream_id: int) -> Stream
```

Perform cleanup when a stream is closed

#### connectionMade

```python
 | connectionMade() -> None
```

Called by Twisted when the connection is established. We can start
sending some data now: we should open with the connection preamble.

#### handshakeCompleted

```python
 | handshakeCompleted() -> None
```

Close the connection if it&#x27;s not made via the expected protocol

#### timeoutConnection

```python
 | timeoutConnection() -> None
```

Called when the connection times out.
We lose the connection with TimeoutError

#### connectionLost

```python
 | connectionLost(reason: Failure = connectionDone) -> None
```

Called by Twisted when the transport connection is lost.
No need to write anything to transport here.

