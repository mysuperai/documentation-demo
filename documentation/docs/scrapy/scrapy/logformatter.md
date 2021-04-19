---
sidebar_label: logformatter
title: scrapy.logformatter
---

## LogFormatter Objects

```python
class LogFormatter()
```

Class for generating log messages for different actions.

All methods must return a dictionary listing the parameters ``level``, ``msg``
and ``args`` which are going to be used for constructing the log message when
calling ``logging.log``.

Dictionary keys for the method outputs:

*   ``level`` is the log level for that action, you can use those from the
    `python logging library &lt;https://docs.python.org/3/library/logging.html&gt;`_ :
    ``logging.DEBUG``, ``logging.INFO``, ``logging.WARNING``, ``logging.ERROR``
    and ``logging.CRITICAL``.
*   ``msg`` should be a string that can contain different formatting placeholders.
    This string, formatted with the provided ``args``, is going to be the long message
    for that action.
*   ``args`` should be a tuple or dict with the formatting placeholders for ``msg``.
    The final log message is computed as ``msg % args``.

Users can define their own ``LogFormatter`` class if they want to customize how
each action is logged or if they want to omit it entirely. In order to omit
logging an action the method must return ``None``.

Here is an example on how to create a custom log formatter to lower the severity level of
the log message when an item is dropped from the pipeline::

        class PoliteLogFormatter(logformatter.LogFormatter):
            def dropped(self, item, exception, response, spider):
                return {
                    &#x27;level&#x27;: logging.INFO, # lowering the level from logging.WARNING
                    &#x27;msg&#x27;: &quot;Dropped: %(exception)s&quot; + os.linesep + &quot;%(item)s&quot;,
                    &#x27;args&#x27;: {
                        &#x27;exception&#x27;: exception,
                        &#x27;item&#x27;: item,
                    }
                }

#### crawled

```python
 | crawled(request, response, spider)
```

Logs a message when the crawler finds a webpage.

#### scraped

```python
 | scraped(item, response, spider)
```

Logs a message when an item is scraped by a spider.

#### dropped

```python
 | dropped(item, exception, response, spider)
```

Logs a message when an item is dropped while it is passing through the item pipeline.

#### item\_error

```python
 | item_error(item, exception, response, spider)
```

Logs a message when an item causes an error while it is passing
through the item pipeline.

.. versionadded:: 2.0

#### spider\_error

```python
 | spider_error(failure, request, response, spider)
```

Logs an error message from a spider.

.. versionadded:: 2.0

#### download\_error

```python
 | download_error(failure, request, spider, errmsg=None)
```

Logs a download error message from a spider (typically coming from
the engine).

.. versionadded:: 2.0

