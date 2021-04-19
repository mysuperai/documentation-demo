---
sidebar_label: reqser
title: scrapy.utils.reqser
---

Helper functions for serializing (and deserializing) requests.

#### request\_to\_dict

```python
request_to_dict(request, spider=None)
```

Convert Request object to a dict.

If a spider is given, it will try to find out the name of the spider method
used in the callback and store that as the callback.

#### request\_from\_dict

```python
request_from_dict(d, spider=None)
```

Create Request object from a dict.

If a spider is given, it will try to resolve the callbacks looking at the
spider for methods with the same name.

