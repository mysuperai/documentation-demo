---
sidebar_label: interfaces
title: scrapy.interfaces
---

## ISpiderLoader Objects

```python
class ISpiderLoader(Interface)
```

#### from\_settings

```python
 | from_settings(settings)
```

Return an instance of the class for the given settings

#### load

```python
 | load(spider_name)
```

Return the Spider class for the given spider name. If the spider
name is not found, it must raise a KeyError.

#### list

```python
 | list()
```

Return a list with the names of all spiders available in the
project

#### find\_by\_request

```python
 | find_by_request(request)
```

Return the list of spiders names that can handle the given request

