---
sidebar_label: deprecate
title: scrapy.utils.deprecate
---

Some helpers for deprecation messages

#### create\_deprecated\_class

```python
create_deprecated_class(name, new_class, clsdict=None, warn_category=ScrapyDeprecationWarning, warn_once=True, old_class_path=None, new_class_path=None, subclass_warn_message="{cls} inherits from deprecated class {old}, please inherit from {new}.", instance_warn_message="{cls} is deprecated, instantiate {new} instead.")
```

Return a &quot;deprecated&quot; class that causes its subclasses to issue a warning.
Subclasses of ``new_class`` are considered subclasses of this class.
It also warns when the deprecated class is instantiated, but do not when
its subclasses are instantiated.

It can be used to rename a base class in a library. For example, if we
have

    class OldName(SomeClass):
        # ...

and we want to rename it to NewName, we can do the following::

    class NewName(SomeClass):
        # ...

    OldName = create_deprecated_class(&#x27;OldName&#x27;, NewName)

Then, if user class inherits from OldName, warning is issued. Also, if
some code uses ``issubclass(sub, OldName)`` or ``isinstance(sub(), OldName)``
checks they&#x27;ll still return True if sub is a subclass of NewName instead of
OldName.

#### update\_classpath

```python
update_classpath(path)
```

Update a deprecated path from an object with its new location

#### method\_is\_overridden

```python
method_is_overridden(subclass, base_class, method_name)
```

Return True if a method named ``method_name`` of a ``base_class``
is overridden in a ``subclass``.

&gt;&gt;&gt; class Base:
...     def foo(self):
...         pass
&gt;&gt;&gt; class Sub1(Base):
...     pass
&gt;&gt;&gt; class Sub2(Base):
...     def foo(self):
...         pass
&gt;&gt;&gt; class Sub3(Sub1):
...     def foo(self):
...         pass
&gt;&gt;&gt; class Sub4(Sub2):
...     pass
&gt;&gt;&gt; method_is_overridden(Sub1, Base, &#x27;foo&#x27;)
False
&gt;&gt;&gt; method_is_overridden(Sub2, Base, &#x27;foo&#x27;)
True
&gt;&gt;&gt; method_is_overridden(Sub3, Base, &#x27;foo&#x27;)
True
&gt;&gt;&gt; method_is_overridden(Sub4, Base, &#x27;foo&#x27;)
True

