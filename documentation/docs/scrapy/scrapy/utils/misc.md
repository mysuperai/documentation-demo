---
sidebar_label: misc
title: scrapy.utils.misc
---

Helper functions which don&#x27;t fit anywhere else

#### arg\_to\_iter

```python
arg_to_iter(arg)
```

Convert an argument to an iterable. The argument can be a None, single
value, or an iterable.

Exception: if arg is a dict, [arg] will be returned

#### load\_object

```python
load_object(path)
```

Load an object given its absolute object path, and return it.

The object can be the import path of a class, function, variable or an
instance, e.g. &#x27;scrapy.downloadermiddlewares.redirect.RedirectMiddleware&#x27;.

If ``path`` is not a string, but is a callable object, such as a class or
a function, then return it as is.

#### walk\_modules

```python
walk_modules(path)
```

Loads a module and all its submodules from the given module path and
returns them. If *any* module throws an exception while importing, that
exception is thrown back.

For example: walk_modules(&#x27;scrapy.utils&#x27;)

#### extract\_regex

```python
extract_regex(regex, text, encoding='utf-8')
```

Extract a list of unicode strings from the given text/encoding using the following policies:

* if the regex contains a named group called &quot;extract&quot; that will be returned
* if the regex contains multiple numbered groups, all those will be returned (flattened)
* if the regex doesn&#x27;t contain any group the entire regex matching is returned

#### md5sum

```python
md5sum(file)
```

Calculate the md5 checksum of a file-like object without reading its
whole content in memory.

&gt;&gt;&gt; from io import BytesIO
&gt;&gt;&gt; md5sum(BytesIO(b&#x27;file content to hash&#x27;))
&#x27;784406af91dd5a54fbb9c84c2236595a&#x27;

#### rel\_has\_nofollow

```python
rel_has_nofollow(rel)
```

Return True if link rel attribute has nofollow type

#### create\_instance

```python
create_instance(objcls, settings, crawler, *args, **kwargs)
```

Construct a class instance using its ``from_crawler`` or
``from_settings`` constructors, if available.

At least one of ``settings`` and ``crawler`` needs to be different from
``None``. If ``settings `` is ``None``, ``crawler.settings`` will be used.
If ``crawler`` is ``None``, only the ``from_settings`` constructor will be
tried.

``*args`` and ``**kwargs`` are forwarded to the constructors.

Raises ``ValueError`` if both ``settings`` and ``crawler`` are ``None``.

.. versionchanged:: 2.2
   Raises ``TypeError`` if the resulting instance is ``None`` (e.g. if an
   extension has not been implemented correctly).

#### set\_environ

```python
@contextmanager
set_environ(**kwargs)
```

Temporarily set environment variables inside the context manager and
fully restore previous environment afterwards

#### walk\_callable

```python
walk_callable(node)
```

Similar to ``ast.walk``, but walks only function body and skips nested
functions defined within the node.

#### is\_generator\_with\_return\_value

```python
is_generator_with_return_value(callable)
```

Returns True if a callable is a generator function which includes a
&#x27;return&#x27; statement with a value different than None, False otherwise

#### warn\_on\_generator\_with\_return\_value

```python
warn_on_generator_with_return_value(spider, callable)
```

Logs a warning if a callable is a generator function and includes
a &#x27;return&#x27; statement with a value different than None

