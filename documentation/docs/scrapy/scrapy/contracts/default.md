---
sidebar_label: default
title: scrapy.contracts.default
---

## UrlContract Objects

```python
class UrlContract(Contract)
```

Contract to set the url of the request (mandatory)
@url http://scrapy.org

## CallbackKeywordArgumentsContract Objects

```python
class CallbackKeywordArgumentsContract(Contract)
```

Contract to set the keyword arguments for the request.
The value should be a JSON-encoded dictionary, e.g.:

@cb_kwargs {&quot;arg1&quot;: &quot;some value&quot;}

## ReturnsContract Objects

```python
class ReturnsContract(Contract)
```

Contract to check the output of a callback

general form:
@returns request(s)/item(s) [min=1 [max]]

e.g.:
@returns request
@returns request 2
@returns request 2 10
@returns request 0 10

## ScrapesContract Objects

```python
class ScrapesContract(Contract)
```

Contract to check presence of fields in scraped items
@scrapes page_name page_body

