---
sidebar_label: responsetypes
title: scrapy.responsetypes
---

This module implements a class which returns the appropriate Response class
based on different criteria.

## ResponseTypes Objects

```python
class ResponseTypes()
```

#### from\_mimetype

```python
 | from_mimetype(mimetype)
```

Return the most appropriate Response class for the given mimetype

#### from\_content\_type

```python
 | from_content_type(content_type, content_encoding=None)
```

Return the most appropriate Response class from an HTTP Content-Type
header

#### from\_headers

```python
 | from_headers(headers)
```

Return the most appropriate Response class by looking at the HTTP
headers

#### from\_filename

```python
 | from_filename(filename)
```

Return the most appropriate Response class from a file name

#### from\_body

```python
 | from_body(body)
```

Try to guess the appropriate response based on the body content.
This method is a bit magic and could be improved in the future, but
it&#x27;s not meant to be used except for special cases where response types
cannot be guess using more straightforward methods.

#### from\_args

```python
 | from_args(headers=None, url=None, filename=None, body=None)
```

Guess the most appropriate Response class based on
the given arguments.

