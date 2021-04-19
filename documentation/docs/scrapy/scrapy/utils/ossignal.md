---
sidebar_label: ossignal
title: scrapy.utils.ossignal
---

#### install\_shutdown\_handlers

```python
install_shutdown_handlers(function, override_sigint=True)
```

Install the given function as a signal handler for all common shutdown
signals (such as SIGINT, SIGTERM, etc). If override_sigint is ``False`` the
SIGINT handler won&#x27;t be install if there is already a handler in place
(e.g.  Pdb)

