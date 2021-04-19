---
sidebar_label: boto
title: scrapy.utils.boto
---

Boto/botocore helpers

#### is\_botocore

```python
is_botocore()
```

Returns True if botocore is available, otherwise raises NotConfigured. Never returns False.

Previously, when boto was supported in addition to botocore, this returned False if boto was available
but botocore wasn&#x27;t.

