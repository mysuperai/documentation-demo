---
sidebar_label: signalmanager
title: scrapy.signalmanager
---

## SignalManager Objects

```python
class SignalManager()
```

#### connect

```python
 | connect(receiver, signal, **kwargs)
```

Connect a receiver function to a signal.

The signal can be any object, although Scrapy comes with some
predefined signals that are documented in the :ref:`topics-signals`
section.

**Arguments**:

- `receiver`: the function to be connected
:type receiver: collections.abc.Callable

- `signal`: the signal to connect to
:type signal: object

#### disconnect

```python
 | disconnect(receiver, signal, **kwargs)
```

Disconnect a receiver function from a signal. This has the
opposite effect of the :meth:`connect` method, and the arguments
are the same.

#### send\_catch\_log

```python
 | send_catch_log(signal, **kwargs)
```

Send a signal, catch exceptions and log them.

The keyword arguments are passed to the signal handlers (connected
through the :meth:`connect` method).

#### send\_catch\_log\_deferred

```python
 | send_catch_log_deferred(signal, **kwargs)
```

Like :meth:`send_catch_log` but supports returning
:class:`~twisted.internet.defer.Deferred` objects from signal handlers.

Returns a Deferred that gets fired once all signal handlers
deferreds were fired. Send a signal, catch exceptions and log them.

The keyword arguments are passed to the signal handlers (connected
through the :meth:`connect` method).

#### disconnect\_all

```python
 | disconnect_all(signal, **kwargs)
```

Disconnect all receivers from the given signal.

**Arguments**:

- `signal`: the signal to disconnect from
:type signal: object

