---
sidebar_label: contextfactory
title: scrapy.core.downloader.contextfactory
---

## ScrapyClientContextFactory Objects

```python
@implementer(IPolicyForHTTPS)
class ScrapyClientContextFactory(BrowserLikePolicyForHTTPS)
```

Non-peer-certificate verifying HTTPS context factory

Default OpenSSL method is TLS_METHOD (also called SSLv23_METHOD)
which allows TLS protocol negotiation

&#x27;A TLS/SSL connection established with [this method] may
 understand the SSLv3, TLSv1, TLSv1.1 and TLSv1.2 protocols.&#x27;

## BrowserLikeContextFactory Objects

```python
@implementer(IPolicyForHTTPS)
class BrowserLikeContextFactory(ScrapyClientContextFactory)
```

Twisted-recommended context factory for web clients.

Quoting the documentation of the :class:`~twisted.web.client.Agent` class:

    The default is to use a
    :class:`~twisted.web.client.BrowserLikePolicyForHTTPS`, so unless you
    have special requirements you can leave this as-is.

:meth:`creatorForNetloc` is the same as
:class:`~twisted.web.client.BrowserLikePolicyForHTTPS` except this context
factory allows setting the TLS/SSL method to use.

The default OpenSSL method is ``TLS_METHOD`` (also called
``SSLv23_METHOD``) which allows TLS protocol negotiation.

## AcceptableProtocolsContextFactory Objects

```python
@implementer(IPolicyForHTTPS)
class AcceptableProtocolsContextFactory()
```

Context factory to used to override the acceptable protocols
to set up the [OpenSSL.SSL.Context] for doing NPN and/or ALPN
negotiation.

