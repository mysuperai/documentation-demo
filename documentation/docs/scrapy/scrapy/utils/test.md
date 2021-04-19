---
sidebar_label: test
title: scrapy.utils.test
---

This module contains some assorted functions used in tests

#### get\_crawler

```python
get_crawler(spidercls=None, settings_dict=None)
```

Return an unconfigured Crawler object. If settings_dict is given, it
will be used to populate the crawler settings with a project level
priority.

#### get\_pythonpath

```python
get_pythonpath()
```

Return a PYTHONPATH suitable to use in processes so that they find this
installation of Scrapy

#### get\_testenv

```python
get_testenv()
```

Return a OS environment dict suitable to fork processes that need to import
this installation of Scrapy, instead of a system installed one.

#### assert\_samelines

```python
assert_samelines(testcase, text1, text2, msg=None)
```

Asserts text1 and text2 have the same lines, ignoring differences in
line endings between platforms

#### mock\_google\_cloud\_storage

```python
mock_google_cloud_storage()
```

Creates autospec mocks for google-cloud-storage Client, Bucket and Blob
classes and set their proper return values.

