---
sidebar_label: spiderloader
title: scrapy.spiderloader
---

## SpiderLoader Objects

```python
@implementer(ISpiderLoader)
class SpiderLoader()
```

SpiderLoader is a class which locates and loads spiders
in a Scrapy project.

#### load

```python
 | load(spider_name)
```

Return the Spider class for the given spider name. If the spider
name is not found, raise a KeyError.

#### find\_by\_request

```python
 | find_by_request(request)
```

Return the list of spider names that can handle the given request.

#### list

```python
 | list()
```

Return a list with the names of all spiders available in the project.

