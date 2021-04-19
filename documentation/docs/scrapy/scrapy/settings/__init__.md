---
sidebar_label: settings
title: scrapy.settings
---

#### get\_settings\_priority

```python
get_settings_priority(priority)
```

Small helper function that looks up a given string priority in the
:attr:`~scrapy.settings.SETTINGS_PRIORITIES` dictionary and returns its
numerical value, or directly returns a given numerical priority.

## SettingsAttribute Objects

```python
class SettingsAttribute()
```

Class for storing data related to settings attributes.

This class is intended for internal usage, you should try Settings class
for settings configuration, not this one.

#### set

```python
 | set(value, priority)
```

Sets value if priority is higher or equal than current priority.

## BaseSettings Objects

```python
class BaseSettings(MutableMapping)
```

Instances of this class behave like dictionaries, but store priorities
along with their ``(key, value)`` pairs, and can be frozen (i.e. marked
immutable).

Key-value entries can be passed on initialization with the ``values``
argument, and they would take the ``priority`` level (unless ``values`` is
already an instance of :class:`~scrapy.settings.BaseSettings`, in which
case the existing priority levels will be kept).  If the ``priority``
argument is a string, the priority name will be looked up in
:attr:`~scrapy.settings.SETTINGS_PRIORITIES`. Otherwise, a specific integer
should be provided.

Once the object is created, new settings can be loaded or updated with the
:meth:`~scrapy.settings.BaseSettings.set` method, and can be accessed with
the square bracket notation of dictionaries, or with the
:meth:`~scrapy.settings.BaseSettings.get` method of the instance and its
value conversion variants. When requesting a stored key, the value with the
highest priority will be retrieved.

#### get

```python
 | get(name, default=None)
```

Get a setting value without affecting its original type.

**Arguments**:

- `name`: the setting name
:type name: str

- `default`: the value to return if no setting is found
:type default: object

#### getbool

```python
 | getbool(name, default=False)
```

Get a setting value as a boolean.

``1``, ``&#x27;1&#x27;``, `True`` and ``&#x27;True&#x27;`` return ``True``,
while ``0``, ``&#x27;0&#x27;``, ``False``, ``&#x27;False&#x27;`` and ``None`` return ``False``.

For example, settings populated through environment variables set to
``&#x27;0&#x27;`` will return ``False`` when using this method.

**Arguments**:

- `name`: the setting name
:type name: str

- `default`: the value to return if no setting is found
:type default: object

#### getint

```python
 | getint(name, default=0)
```

Get a setting value as an int.

**Arguments**:

- `name`: the setting name
:type name: str

- `default`: the value to return if no setting is found
:type default: object

#### getfloat

```python
 | getfloat(name, default=0.0)
```

Get a setting value as a float.

**Arguments**:

- `name`: the setting name
:type name: str

- `default`: the value to return if no setting is found
:type default: object

#### getlist

```python
 | getlist(name, default=None)
```

Get a setting value as a list. If the setting original type is a list, a
copy of it will be returned. If it&#x27;s a string it will be split by &quot;,&quot;.

For example, settings populated through environment variables set to
``&#x27;one,two&#x27;`` will return a list [&#x27;one&#x27;, &#x27;two&#x27;] when using this method.

**Arguments**:

- `name`: the setting name
:type name: str

- `default`: the value to return if no setting is found
:type default: object

#### getdict

```python
 | getdict(name, default=None)
```

Get a setting value as a dictionary. If the setting original type is a
dictionary, a copy of it will be returned. If it is a string it will be
evaluated as a JSON dictionary. In the case that it is a
:class:`~scrapy.settings.BaseSettings` instance itself, it will be
converted to a dictionary, containing all its current settings values
as they would be returned by :meth:`~scrapy.settings.BaseSettings.get`,
and losing all information about priority and mutability.

**Arguments**:

- `name`: the setting name
:type name: str

- `default`: the value to return if no setting is found
:type default: object

#### getwithbase

```python
 | getwithbase(name)
```

Get a composition of a dictionary-like setting and its `_BASE`
counterpart.

**Arguments**:

- `name`: name of the dictionary-like setting
:type name: str

#### getpriority

```python
 | getpriority(name)
```

Return the current numerical priority value of a setting, or ``None`` if
the given ``name`` does not exist.

**Arguments**:

- `name`: the setting name
:type name: str

#### maxpriority

```python
 | maxpriority()
```

Return the numerical value of the highest priority present throughout
all settings, or the numerical value for ``default`` from
:attr:`~scrapy.settings.SETTINGS_PRIORITIES` if there are no settings
stored.

#### set

```python
 | set(name, value, priority='project')
```

Store a key/value attribute with a given priority.

Settings should be populated *before* configuring the Crawler object
(through the :meth:`~scrapy.crawler.Crawler.configure` method),
otherwise they won&#x27;t have any effect.

**Arguments**:

- `name`: the setting name
:type name: str

- `value`: the value to associate with the setting
:type value: object

- `priority`: the priority of the setting. Should be a key of
    :attr:`~scrapy.settings.SETTINGS_PRIORITIES` or an integer
:type priority: str or int

#### setmodule

```python
 | setmodule(module, priority='project')
```

Store settings from a module with a given priority.

This is a helper function that calls
:meth:`~scrapy.settings.BaseSettings.set` for every globally declared
uppercase variable of ``module`` with the provided ``priority``.

**Arguments**:

- `module`: the module or the path of the module
:type module: types.ModuleType or str

- `priority`: the priority of the settings. Should be a key of
    :attr:`~scrapy.settings.SETTINGS_PRIORITIES` or an integer
:type priority: str or int

#### update

```python
 | update(values, priority='project')
```

Store key/value pairs with a given priority.

This is a helper function that calls
:meth:`~scrapy.settings.BaseSettings.set` for every item of ``values``
with the provided ``priority``.

If ``values`` is a string, it is assumed to be JSON-encoded and parsed
into a dict with ``json.loads()`` first. If it is a
:class:`~scrapy.settings.BaseSettings` instance, the per-key priorities
will be used and the ``priority`` parameter ignored. This allows
inserting/updating settings with different priorities with a single
command.

**Arguments**:

- `values`: the settings names and values
:type values: dict or string or :class:`~scrapy.settings.BaseSettings`

- `priority`: the priority of the settings. Should be a key of
    :attr:`~scrapy.settings.SETTINGS_PRIORITIES` or an integer
:type priority: str or int

#### copy

```python
 | copy()
```

Make a deep copy of current settings.

This method returns a new instance of the :class:`Settings` class,
populated with the same values and their priorities.

Modifications to the new object won&#x27;t be reflected on the original
settings.

#### freeze

```python
 | freeze()
```

Disable further changes to the current settings.

After calling this method, the present state of the settings will become
immutable. Trying to change values through the :meth:`~set` method and
its variants won&#x27;t be possible and will be alerted.

#### frozencopy

```python
 | frozencopy()
```

Return an immutable copy of the current settings.

Alias for a :meth:`~freeze` call in the object returned by :meth:`copy`.

#### copy\_to\_dict

```python
 | copy_to_dict()
```

Make a copy of current settings and convert to a dict.

This method returns a new dict populated with the same values
and their priorities as the current settings.

Modifications to the returned dict won&#x27;t be reflected on the original
settings.

This method can be useful for example for printing settings
in Scrapy shell.

## Settings Objects

```python
class Settings(BaseSettings)
```

This object stores Scrapy settings for the configuration of internal
components, and can be used for any further customization.

It is a direct subclass and supports all methods of
:class:`~scrapy.settings.BaseSettings`. Additionally, after instantiation
of this class, the new object will have the global default settings
described on :ref:`topics-settings-ref` already populated.

#### iter\_default\_settings

```python
iter_default_settings()
```

Return the default settings as an iterator of (name, value) tuples

#### overridden\_settings

```python
overridden_settings(settings)
```

Return a dict of the settings that have been overridden

