---
sidebar_label: signal
title: scrapy.utils.signal
---

Helper functions for working with signals

#### send\_catch\_log

```python
send_catch_log(signal=Any, sender=Anonymous, *arguments, **named)
```

Like pydispatcher.robust.sendRobust but it also logs errors and returns
Failures instead of exceptions.

#### send\_catch\_log\_deferred

```python
send_catch_log_deferred(signal=Any, sender=Anonymous, *arguments, **named)
```

Like send_catch_log but supports returning deferreds on signal handlers.
Returns a deferred that gets fired once all signal handlers deferreds were
fired.

#### disconnect\_all

```python
disconnect_all(signal=Any, sender=Any)
```

Disconnect all signal handlers. Useful for cleaning up after running
tests

