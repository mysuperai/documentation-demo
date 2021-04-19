---
sidebar_label: media
title: scrapy.pipelines.media
---

## MediaPipeline Objects

```python
class MediaPipeline()
```

#### media\_to\_download

```python
 | media_to_download(request, info, *, item=None)
```

Check request before starting download

#### get\_media\_requests

```python
 | get_media_requests(item, info)
```

Returns the media requests to download

#### media\_downloaded

```python
 | media_downloaded(response, request, info, *, item=None)
```

Handler for success downloads

#### media\_failed

```python
 | media_failed(failure, request, info)
```

Handler for failed downloads

#### item\_completed

```python
 | item_completed(results, item, info)
```

Called per item when all media requests has been processed

#### file\_path

```python
 | file_path(request, response=None, info=None, *, item=None)
```

Returns the path where downloaded media should be stored

