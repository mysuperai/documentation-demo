---
sidebar_label: images
title: scrapy.pipelines.images
---

Images Pipeline

See documentation in topics/media-pipeline.rst

## NoimagesDrop Objects

```python
class NoimagesDrop(DropItem)
```

Product with no images exception

## ImageException Objects

```python
class ImageException(FileException)
```

General image error exception

## ImagesPipeline Objects

```python
class ImagesPipeline(FilesPipeline)
```

Abstract pipeline that implement the image thumbnail generation logic

