---
sidebar_label: tls
title: scrapy.core.downloader.tls
---

## ScrapyClientTLSOptions Objects

```python
class ScrapyClientTLSOptions(ClientTLSOptions)
```

SSL Client connection creator ignoring certificate verification errors
(for genuinely invalid certificates or bugs in verification code).

Same as Twisted&#x27;s private _sslverify.ClientTLSOptions,
except that VerificationError, CertificateError and ValueError
exceptions are caught, so that the connection is not closed, only
logging warnings. Also, HTTPS connection parameters logging is added.

