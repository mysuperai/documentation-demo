---
sidebar_label: http11
title: scrapy.core.downloader.handlers.http11
---

Download handlers for http and https schemes

## HTTP11DownloadHandler Objects

```python
class HTTP11DownloadHandler()
```

#### download\_request

```python
 | download_request(request, spider)
```

Return a deferred for the HTTP download

## TunnelError Objects

```python
class TunnelError(Exception)
```

An HTTP CONNECT tunnel could not be established by the proxy.

## TunnelingTCP4ClientEndpoint Objects

```python
class TunnelingTCP4ClientEndpoint(TCP4ClientEndpoint)
```

An endpoint that tunnels through proxies to allow HTTPS downloads. To
accomplish that, this endpoint sends an HTTP CONNECT to the proxy.
The HTTP CONNECT is always sent when using this endpoint, I think this could
be improved as the CONNECT will be redundant if the connection associated
with this endpoint comes from the pool and a CONNECT has already been issued
for it.

#### requestTunnel

```python
 | requestTunnel(protocol)
```

Asks the proxy to open a tunnel.

#### processProxyResponse

```python
 | processProxyResponse(rcvd_bytes)
```

Processes the response from the proxy. If the tunnel is successfully
created, notifies the client that we are ready to send requests. If not
raises a TunnelError.

#### connectFailed

```python
 | connectFailed(reason)
```

Propagates the errback to the appropriate deferred.

## TunnelingAgent Objects

```python
class TunnelingAgent(Agent)
```

An agent that uses a L{TunnelingTCP4ClientEndpoint} to make HTTPS
downloads. It may look strange that we have chosen to subclass Agent and not
ProxyAgent but consider that after the tunnel is opened the proxy is
transparent to the client; thus the agent should behave like there is no
proxy involved.

## ScrapyProxyAgent Objects

```python
class ScrapyProxyAgent(Agent)
```

#### request

```python
 | request(method, uri, headers=None, bodyProducer=None)
```

Issue a new request via the configured proxy.

