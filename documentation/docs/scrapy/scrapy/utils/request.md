---
sidebar_label: request
title: scrapy.utils.request
---

This module provides some useful functions for working with
scrapy.http.Request objects

#### request\_fingerprint

```python
request_fingerprint(request: Request, include_headers: Optional[Iterable[Union[bytes, str]]] = None, keep_fragments: bool = False)
```

Return the request fingerprint.

The request fingerprint is a hash that uniquely identifies the resource the
request points to. For example, take the following two urls:

http://www.example.com/query?id=111&amp;cat=222
http://www.example.com/query?cat=222&amp;id=111

Even though those are two different URLs both point to the same resource
and are equivalent (i.e. they should return the same response).

Another example are cookies used to store session ids. Suppose the
following page is only accessible to authenticated users:

http://www.example.com/members/offers.html

Lot of sites use a cookie to store the session id, which adds a random
component to the HTTP Request and thus should be ignored when calculating
the fingerprint.

For this reason, request headers are ignored by default when calculating
the fingeprint. If you want to include specific headers use the
include_headers argument, which is a list of Request headers to include.

Also, servers usually ignore fragments in urls when handling requests,
so they are also ignored by default when calculating the fingerprint.
If you want to include them, set the keep_fragments argument to True
(for instance when handling requests with a headless browser).

#### request\_authenticate

```python
request_authenticate(request: Request, username: str, password: str) -> None
```

Autenticate the given request (in place) using the HTTP basic access
authentication mechanism (RFC 2617) and the given username and password

#### request\_httprepr

```python
request_httprepr(request: Request) -> bytes
```

Return the raw HTTP representation (as bytes) of the given request.
This is provided only for reference since it&#x27;s not the actual stream of
bytes that will be send when performing the request (that&#x27;s controlled
by Twisted).

#### referer\_str

```python
referer_str(request: Request) -> Optional[str]
```

Return Referer HTTP header suitable for logging.

