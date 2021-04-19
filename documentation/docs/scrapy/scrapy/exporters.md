---
sidebar_label: exporters
title: scrapy.exporters
---

Item Exporters are used to export/serialize items into different formats.

## MarshalItemExporter Objects

```python
class MarshalItemExporter(BaseItemExporter)
```

Exports items in a Python-specific binary format (see
:mod:`marshal`).

**Arguments**:

- `file`: The file-like object to use for exporting the data. Its
             ``write`` method should accept :class:`bytes` (a disk file
             opened in binary mode, a :class:`~io.BytesIO` object, etc)

## PythonItemExporter Objects

```python
class PythonItemExporter(BaseItemExporter)
```

This is a base class for item exporters that extends
:class:`BaseItemExporter` with support for nested items.

It serializes items to built-in Python types, so that any serialization
library (e.g. :mod:`json` or msgpack_) can be used on top of it.

.. _msgpack: https://pypi.org/project/msgpack/

