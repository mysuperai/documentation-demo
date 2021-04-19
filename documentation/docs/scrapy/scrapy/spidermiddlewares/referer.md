---
sidebar_label: referer
title: scrapy.spidermiddlewares.referer
---

RefererMiddleware: populates Request referer field, based on the Response which
originated it.

## ReferrerPolicy Objects

```python
class ReferrerPolicy()
```

#### strip\_url

```python
 | strip_url(url, origin_only=False)
```

https://www.w3.org/TR/referrer-policy/#strip-url

If url is null, return no referrer.
If url&#x27;s scheme is a local scheme, then return no referrer.
Set url&#x27;s username to the empty string.
Set url&#x27;s password to null.
Set url&#x27;s fragment to null.
If the origin-only flag is true, then:
    Set url&#x27;s path to null.
    Set url&#x27;s query to null.
Return url.

#### origin

```python
 | origin(url)
```

Return serialized origin (scheme, host, path) for a request or response URL.

## NoReferrerPolicy Objects

```python
class NoReferrerPolicy(ReferrerPolicy)
```

https://www.w3.org/TR/referrer-policy/#referrer-policy-no-referrer

The simplest policy is &quot;no-referrer&quot;, which specifies that no referrer information
is to be sent along with requests made from a particular request client to any origin.
The header will be omitted entirely.

## NoReferrerWhenDowngradePolicy Objects

```python
class NoReferrerWhenDowngradePolicy(ReferrerPolicy)
```

https://www.w3.org/TR/referrer-policy/#referrer-policy-no-referrer-when-downgrade

The &quot;no-referrer-when-downgrade&quot; policy sends a full URL along with requests
from a TLS-protected environment settings object to a potentially trustworthy URL,
and requests from clients which are not TLS-protected to any origin.

Requests from TLS-protected clients to non-potentially trustworthy URLs,
on the other hand, will contain no referrer information.
A Referer HTTP header will not be sent.

This is a user agent&#x27;s default behavior, if no policy is otherwise specified.

## SameOriginPolicy Objects

```python
class SameOriginPolicy(ReferrerPolicy)
```

https://www.w3.org/TR/referrer-policy/#referrer-policy-same-origin

The &quot;same-origin&quot; policy specifies that a full URL, stripped for use as a referrer,
is sent as referrer information when making same-origin requests from a particular request client.

Cross-origin requests, on the other hand, will contain no referrer information.
A Referer HTTP header will not be sent.

## OriginPolicy Objects

```python
class OriginPolicy(ReferrerPolicy)
```

https://www.w3.org/TR/referrer-policy/#referrer-policy-origin

The &quot;origin&quot; policy specifies that only the ASCII serialization
of the origin of the request client is sent as referrer information
when making both same-origin requests and cross-origin requests
from a particular request client.

## StrictOriginPolicy Objects

```python
class StrictOriginPolicy(ReferrerPolicy)
```

https://www.w3.org/TR/referrer-policy/#referrer-policy-strict-origin

The &quot;strict-origin&quot; policy sends the ASCII serialization
of the origin of the request client when making requests:
- from a TLS-protected environment settings object to a potentially trustworthy URL, and
- from non-TLS-protected environment settings objects to any origin.

Requests from TLS-protected request clients to non- potentially trustworthy URLs,
on the other hand, will contain no referrer information.
A Referer HTTP header will not be sent.

## OriginWhenCrossOriginPolicy Objects

```python
class OriginWhenCrossOriginPolicy(ReferrerPolicy)
```

https://www.w3.org/TR/referrer-policy/#referrer-policy-origin-when-cross-origin

The &quot;origin-when-cross-origin&quot; policy specifies that a full URL,
stripped for use as a referrer, is sent as referrer information
when making same-origin requests from a particular request client,
and only the ASCII serialization of the origin of the request client
is sent as referrer information when making cross-origin requests
from a particular request client.

## StrictOriginWhenCrossOriginPolicy Objects

```python
class StrictOriginWhenCrossOriginPolicy(ReferrerPolicy)
```

https://www.w3.org/TR/referrer-policy/#referrer-policy-strict-origin-when-cross-origin

The &quot;strict-origin-when-cross-origin&quot; policy specifies that a full URL,
stripped for use as a referrer, is sent as referrer information
when making same-origin requests from a particular request client,
and only the ASCII serialization of the origin of the request client
when making cross-origin requests:

- from a TLS-protected environment settings object to a potentially trustworthy URL, and
- from non-TLS-protected environment settings objects to any origin.

Requests from TLS-protected clients to non- potentially trustworthy URLs,
on the other hand, will contain no referrer information.
A Referer HTTP header will not be sent.

## UnsafeUrlPolicy Objects

```python
class UnsafeUrlPolicy(ReferrerPolicy)
```

https://www.w3.org/TR/referrer-policy/#referrer-policy-unsafe-url

The &quot;unsafe-url&quot; policy specifies that a full URL, stripped for use as a referrer,
is sent along with both cross-origin requests
and same-origin requests made from a particular request client.

Note: The policy&#x27;s name doesn&#x27;t lie; it is unsafe.
This policy will leak origins and paths from TLS-protected resources
to insecure origins.
Carefully consider the impact of setting such a policy for potentially sensitive documents.

## DefaultReferrerPolicy Objects

```python
class DefaultReferrerPolicy(NoReferrerWhenDowngradePolicy)
```

A variant of &quot;no-referrer-when-downgrade&quot;,
with the addition that &quot;Referer&quot; is not sent if the parent request was
using ``file://`` or ``s3://`` scheme.

## RefererMiddleware Objects

```python
class RefererMiddleware()
```

#### policy

```python
 | policy(resp_or_url, request)
```

Determine Referrer-Policy to use from a parent Response (or URL),
and a Request to be sent.

- if a valid policy is set in Request meta, it is used.
- if the policy is set in meta but is wrong (e.g. a typo error),
  the policy from settings is used
- if the policy is not set in Request meta,
  but there is a Referrer-policy header in the parent response,
  it is used if valid
- otherwise, the policy from settings is used.

