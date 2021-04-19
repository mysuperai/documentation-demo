---
sidebar_label: response
title: scrapy.utils.response
---

This module provides some useful functions for working with
scrapy.http.Response objects

#### get\_base\_url

```python
get_base_url(response: "scrapy.http.response.text.TextResponse") -> str
```

Return the base url of the given response, joined with the response url

#### get\_meta\_refresh

```python
get_meta_refresh(response: "scrapy.http.response.text.TextResponse", ignore_tags: Optional[Iterable[str]] = ('script', 'noscript')) -> Union[Tuple[None, None], Tuple[float, str]]
```

Parse the http-equiv refrsh parameter from the given response

#### response\_status\_message

```python
response_status_message(status: Union[bytes, float, int, str]) -> str
```

Return status code plus status text descriptive message

#### response\_httprepr

```python
response_httprepr(response: Response) -> bytes
```

Return raw HTTP representation (as bytes) of the given response. This
is provided only for reference, since it&#x27;s not the exact stream of bytes
that was received (that&#x27;s not exposed by Twisted).

#### open\_in\_browser

```python
open_in_browser(response: Union["scrapy.http.response.html.HtmlResponse", "scrapy.http.response.text.TextResponse"], _openfunc: Callable[[str], Any] = webbrowser.open) -> Any
```

Open the given response in a local web browser, populating the &lt;base&gt;
tag for external links to work

