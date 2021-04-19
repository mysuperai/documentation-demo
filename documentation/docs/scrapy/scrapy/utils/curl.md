---
sidebar_label: curl
title: scrapy.utils.curl
---

#### curl\_to\_request\_kwargs

```python
curl_to_request_kwargs(curl_command, ignore_unknown_options=True)
```

Convert a cURL command syntax to Request kwargs.

:param str curl_command: string containing the curl command
:param bool ignore_unknown_options: If true, only a warning is emitted when
                                    cURL options are unknown. Otherwise
                                    raises an error. (default: True)

**Returns**:

dictionary of Request kwargs

