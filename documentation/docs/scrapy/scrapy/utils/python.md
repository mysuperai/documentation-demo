---
sidebar_label: python
title: scrapy.utils.python
---

This module contains essential stuff that should&#x27;ve come with Python itself ;)

#### flatten

```python
flatten(x)
```

flatten(sequence) -&gt; list

Returns a single, flat list which contains all elements retrieved
from the sequence and all recursively contained sub-sequences
(iterables).

**Examples**:

  &gt;&gt;&gt; [1, 2, [3,4], (5,6)]
  [1, 2, [3, 4], (5, 6)]
  &gt;&gt;&gt; flatten([[[1,2,3], (42,None)], [4,5], [6], 7, (8,9,10)])
  [1, 2, 3, 42, None, 4, 5, 6, 7, 8, 9, 10]
  &gt;&gt;&gt; flatten([&quot;foo&quot;, &quot;bar&quot;])
  [&#x27;foo&#x27;, &#x27;bar&#x27;]
  &gt;&gt;&gt; flatten([&quot;foo&quot;, [&quot;baz&quot;, 42], &quot;bar&quot;])
  [&#x27;foo&#x27;, &#x27;baz&#x27;, 42, &#x27;bar&#x27;]

#### iflatten

```python
iflatten(x)
```

iflatten(sequence) -&gt; iterator

Similar to ``.flatten()``, but returns iterator instead

#### is\_listlike

```python
is_listlike(x)
```

&gt;&gt;&gt; is_listlike(&quot;foo&quot;)
False
&gt;&gt;&gt; is_listlike(5)
False
&gt;&gt;&gt; is_listlike(b&quot;foo&quot;)
False
&gt;&gt;&gt; is_listlike([b&quot;foo&quot;])
True
&gt;&gt;&gt; is_listlike((b&quot;foo&quot;,))
True
&gt;&gt;&gt; is_listlike({})
True
&gt;&gt;&gt; is_listlike(set())
True
&gt;&gt;&gt; is_listlike((x for x in range(3)))
True
&gt;&gt;&gt; is_listlike(range(5))
True

#### unique

```python
unique(list_, key=lambda x: x)
```

efficient function to uniquify a list preserving item order

#### to\_unicode

```python
to_unicode(text, encoding=None, errors='strict')
```

Return the unicode representation of a bytes object ``text``. If
``text`` is already an unicode object, return it as-is.

#### to\_bytes

```python
to_bytes(text, encoding=None, errors='strict')
```

Return the binary representation of ``text``. If ``text``
is already a bytes object, return it as-is.

#### to\_native\_str

```python
@deprecated('to_unicode')
to_native_str(text, encoding=None, errors='strict')
```

Return str representation of ``text``.

#### re\_rsearch

```python
re_rsearch(pattern, text, chunk_size=1024)
```

This function does a reverse search in a text using a regular expression
given in the attribute &#x27;pattern&#x27;.
Since the re module does not provide this functionality, we have to find for
the expression into chunks of text extracted from the end (for the sake of efficiency).
At first, a chunk of &#x27;chunk_size&#x27; kilobytes is extracted from the end, and searched for
the pattern. If the pattern is not found, another chunk is extracted, and another
search is performed.
This process continues until a match is found, or until the whole file is read.
In case the pattern wasn&#x27;t found, None is returned, otherwise it returns a tuple containing
the start position of the match, and the ending (regarding the entire text).

#### memoizemethod\_noargs

```python
memoizemethod_noargs(method)
```

Decorator to cache the result of a method (without arguments) using a
weak reference to its object

#### binary\_is\_text

```python
binary_is_text(data)
```

Returns ``True`` if the given ``data`` argument (a ``bytes`` object)
does not contain unprintable control characters.

#### get\_func\_args

```python
get_func_args(func, stripself=False)
```

Return the argument name list of a callable

#### get\_spec

```python
get_spec(func)
```

Returns (args, kwargs) tuple for a function
&gt;&gt;&gt; import re
&gt;&gt;&gt; get_spec(re.match)
([&#x27;pattern&#x27;, &#x27;string&#x27;], {&#x27;flags&#x27;: 0})

&gt;&gt;&gt; class Test:
...     def __call__(self, val):
...         pass
...     def method(self, val, flags=0):
...         pass

&gt;&gt;&gt; get_spec(Test)
([&#x27;self&#x27;, &#x27;val&#x27;], {})

&gt;&gt;&gt; get_spec(Test.method)
([&#x27;self&#x27;, &#x27;val&#x27;], {&#x27;flags&#x27;: 0})

&gt;&gt;&gt; get_spec(Test().method)
([&#x27;self&#x27;, &#x27;val&#x27;], {&#x27;flags&#x27;: 0})

#### equal\_attributes

```python
equal_attributes(obj1, obj2, attributes)
```

Compare two objects attributes

#### retry\_on\_eintr

```python
@deprecated
retry_on_eintr(function, *args, **kw)
```

Run a function and retry it while getting EINTR errors

#### without\_none\_values

```python
without_none_values(iterable)
```

Return a copy of ``iterable`` with all ``None`` entries removed.

If ``iterable`` is a mapping, return a dictionary where all pairs that have
value ``None`` have been removed.

#### global\_object\_name

```python
global_object_name(obj)
```

Return full name of a global object.

&gt;&gt;&gt; from scrapy import Request
&gt;&gt;&gt; global_object_name(Request)
&#x27;scrapy.http.request.Request&#x27;

## MutableChain Objects

```python
class MutableChain(Iterable)
```

Thin wrapper around itertools.chain, allowing to add iterables &quot;in-place&quot;

