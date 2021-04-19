---
sidebar_label: log
title: scrapy.utils.log
---

#### failure\_to\_exc\_info

```python
failure_to_exc_info(failure)
```

Extract exc_info from Failure instances

## TopLevelFormatter Objects

```python
class TopLevelFormatter(logging.Filter)
```

Keep only top level loggers&#x27;s name (direct children from root) from
records.

This filter will replace Scrapy loggers&#x27; names with &#x27;scrapy&#x27;. This mimics
the old Scrapy log behaviour and helps shortening long names.

Since it can&#x27;t be set for just one logger (it won&#x27;t propagate for its
children), it&#x27;s going to be set in the root handler, with a parametrized
``loggers`` list where it should act.

#### configure\_logging

```python
configure_logging(settings=None, install_root_handler=True)
```

Initialize logging defaults for Scrapy.

**Arguments**:

- `settings`: settings used to create and configure a handler for the
    root logger (default: None).
:type settings: dict, :class:`~scrapy.settings.Settings` object or ``None``

- `install_root_handler`: whether to install root logging handler
    (default: True)
:type install_root_handler: bool

This function does:

- Route warnings and twisted logging through Python standard logging
- Assign DEBUG and ERROR level to Scrapy and Twisted loggers respectively
- Route stdout to log if LOG_STDOUT setting is True

When ``install_root_handler`` is True (default), this function also
creates a handler for the root logger according to given settings
(see :ref:`topics-logging-settings`). You can override default options
using ``settings`` argument. When ``settings`` is empty or None, defaults
are used.

## StreamLogger Objects

```python
class StreamLogger()
```

Fake file-like stream object that redirects writes to a logger instance

Taken from:
    https://www.electricmonk.nl/log/2011/08/14/redirect-stdout-and-stderr-to-a-logger-in-python/

## LogCounterHandler Objects

```python
class LogCounterHandler(logging.Handler)
```

Record log levels count into a crawler stats

#### logformatter\_adapter

```python
logformatter_adapter(logkws)
```

Helper that takes the dictionary output from the methods in LogFormatter
and adapts it into a tuple of positional arguments for logger.log calls,
handling backward compatibility as well.

