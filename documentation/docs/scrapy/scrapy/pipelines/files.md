---
sidebar_label: files
title: scrapy.pipelines.files
---

Files Pipeline

See documentation in topics/media-pipeline.rst

## FileException Objects

```python
class FileException(Exception)
```

General media error exception

## S3FilesStore Objects

```python
class S3FilesStore()
```

#### persist\_file

```python
 | persist_file(path, buf, info, meta=None, headers=None)
```

Upload file to S3 storage

## FilesPipeline Objects

```python
class FilesPipeline(MediaPipeline)
```

Abstract pipeline that implement the file downloading

This pipeline tries to minimize network transfers and file processing,
doing stat of the files and determining if file is new, uptodate or
expired.

``new`` files are those that pipeline never processed and needs to be
    downloaded from supplier site the first time.

``uptodate`` files are the ones that the pipeline processed and are still
    valid files.

``expired`` files are those that pipeline already processed but the last
    modification was made long time ago, so a reprocessing is recommended to
    refresh it in case of change.

