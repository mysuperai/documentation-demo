---
sidebar_label: common
title: scrapy.loader.common
---

Common functions used in Item Loaders code

#### wrap\_loader\_context

```python
wrap_loader_context(function, context)
```

Wrap functions that receive loader_context to contain the context
&quot;pre-loaded&quot; and expose a interface that receives only one argument

