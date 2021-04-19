---
sidebar_label: stream
title: scrapy.core.http2.stream
---

## InactiveStreamClosed Objects

```python
class InactiveStreamClosed(ConnectionClosed)
```

Connection was closed without sending request headers
of the stream. This happens when a stream is waiting for other
streams to close and connection is lost.

## Stream Objects

```python
class Stream()
```

Represents a single HTTP/2 Stream.

Stream is a bidirectional flow of bytes within an established connection,
which may carry one or more messages. Handles the transfer of HTTP Headers
and Data frames.

Role of this class is to
1. Combine all the data frames

#### \_\_init\_\_

```python
 | __init__(stream_id: int, request: Request, protocol: "H2ClientProtocol", download_maxsize: int = 0, download_warnsize: int = 0) -> None
```

**Arguments**:

- `stream_id` - Unique identifier for the stream within a single HTTP/2 connection
- `request` - The HTTP request associated to the stream
- `protocol` - Parent H2ClientProtocol instance

#### get\_response

```python
 | get_response() -> Deferred
```

Simply return a Deferred which fires when response
from the asynchronous request is available

#### send\_data

```python
 | send_data() -> None
```

Called immediately after the headers are sent. Here we send all the
data as part of the request.

If the content length is 0 initially then we end the stream immediately and
wait for response data.

Warning: Only call this method when stream not closed from client side
and has initiated request already by sending HEADER frame. If not then
stream will raise ProtocolError (raise by h2 state machine).

#### receive\_window\_update

```python
 | receive_window_update() -> None
```

Flow control window size was changed.
Send data that earlier could not be sent as we were
blocked behind the flow control.

#### reset\_stream

```python
 | reset_stream(reason: StreamCloseReason = StreamCloseReason.RESET) -> None
```

Close this stream by sending a RST_FRAME to the remote peer

#### close

```python
 | close(reason: StreamCloseReason, errors: Optional[List[BaseException]] = None, from_protocol: bool = False) -> None
```

Based on the reason sent we will handle each case.

