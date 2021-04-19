---
sidebar_label: defer
title: scrapy.utils.defer
---

Helper functions for dealing with Twisted deferreds

#### defer\_fail

```python
defer_fail(_failure: Failure) -> Deferred
```

Same as twisted.internet.defer.fail but delay calling errback until
next reactor loop

It delays by 100ms so reactor has a chance to go through readers and writers
before attending pending delayed calls, so do not set delay to zero.

#### defer\_succeed

```python
defer_succeed(result) -> Deferred
```

Same as twisted.internet.defer.succeed but delay calling callback until
next reactor loop

It delays by 100ms so reactor has a chance to go trough readers and writers
before attending pending delayed calls, so do not set delay to zero.

#### mustbe\_deferred

```python
mustbe_deferred(f: Callable, *args, **kw) -> Deferred
```

Same as twisted.internet.defer.maybeDeferred, but delay calling
callback/errback to next reactor loop

#### parallel

```python
parallel(iterable: Iterable, count: int, callable: Callable, *args, **named) -> DeferredList
```

Execute a callable over the objects in the given iterable, in parallel,
using no more than ``count`` concurrent calls.

Taken from: https://jcalderone.livejournal.com/24285.html

#### process\_chain

```python
process_chain(callbacks: Iterable[Callable], input, *a, **kw) -> Deferred
```

Return a Deferred built by chaining the given callbacks

#### process\_chain\_both

```python
process_chain_both(callbacks: Iterable[Callable], errbacks: Iterable[Callable], input, *a, **kw) -> Deferred
```

Return a Deferred built by chaining the given callbacks and errbacks

#### process\_parallel

```python
process_parallel(callbacks: Iterable[Callable], input, *a, **kw) -> Deferred
```

Return a Deferred with the output of all successful calls to the given
callbacks

#### iter\_errback

```python
iter_errback(iterable: Iterable, errback: Callable, *a, **kw) -> Generator
```

Wraps an iterable calling an errback if an error is caught while
iterating it.

#### deferred\_from\_coro

```python
deferred_from_coro(o) -> Any
```

Converts a coroutine into a Deferred, or returns the object as is if it isn&#x27;t a coroutine

#### deferred\_f\_from\_coro\_f

```python
deferred_f_from_coro_f(coro_f: Callable[..., Coroutine]) -> Callable
```

Converts a coroutine function into a function that returns a Deferred.

The coroutine function will be called at the time when the wrapper is called. Wrapper args will be passed to it.
This is useful for callback chains, as callback functions are called with the previous callback result.

#### maybeDeferred\_coro

```python
maybeDeferred_coro(f: Callable, *args, **kw) -> Deferred
```

Copy of defer.maybeDeferred that also converts coroutines to Deferreds.

