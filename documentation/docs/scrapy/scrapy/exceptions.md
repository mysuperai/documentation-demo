---
sidebar_label: exceptions
title: scrapy.exceptions
---

Scrapy core exceptions

These exceptions are documented in docs/topics/exceptions.rst. Please don&#x27;t add
new exceptions here without documenting them there.

## NotConfigured Objects

```python
class NotConfigured(Exception)
```

Indicates a missing configuration situation

## IgnoreRequest Objects

```python
class IgnoreRequest(Exception)
```

Indicates a decision was made not to process a request

## DontCloseSpider Objects

```python
class DontCloseSpider(Exception)
```

Request the spider not to be closed yet

## CloseSpider Objects

```python
class CloseSpider(Exception)
```

Raise this from callbacks to request the spider to be closed

## StopDownload Objects

```python
class StopDownload(Exception)
```

Stop the download of the body for a given response.
The &#x27;fail&#x27; boolean parameter indicates whether or not the resulting partial response
should be handled by the request errback. Note that &#x27;fail&#x27; is a keyword-only argument.

## DropItem Objects

```python
class DropItem(Exception)
```

Drop item from the item pipeline

## NotSupported Objects

```python
class NotSupported(Exception)
```

Indicates a feature or method is not supported

## UsageError Objects

```python
class UsageError(Exception)
```

To indicate a command-line usage error

## ScrapyDeprecationWarning Objects

```python
class ScrapyDeprecationWarning(Warning)
```

Warning category for deprecated features, since the default
DeprecationWarning is silenced on Python 2.7+

## ContractFail Objects

```python
class ContractFail(AssertionError)
```

Error raised in case of a failing contract

