---
sidebar_label: headers
title: scrapy.http.headers
---

## Headers Objects

```python
class Headers(CaselessDict)
```

Case insensitive http headers dictionary

#### normkey

```python
 | normkey(key)
```

Normalize key to bytes

#### normvalue

```python
 | normvalue(value)
```

Normalize values to bytes

#### to\_unicode\_dict

```python
 | to_unicode_dict()
```

Return headers as a CaselessDict with unicode keys
and unicode values. Multiple values are joined with &#x27;,&#x27;.

