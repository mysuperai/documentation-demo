---
sidebar_label: url
title: scrapy.utils.url
---

This module contains general purpose URL functions not found in the standard
library.

Some of the functions that used to be imported from this module have been moved
to the w3lib.url module. Always import those from there instead.

#### url\_is\_from\_any\_domain

```python
url_is_from_any_domain(url, domains)
```

Return True if the url belongs to any of the given domains

#### url\_is\_from\_spider

```python
url_is_from_spider(url, spider)
```

Return True if the url belongs to the given spider

#### parse\_url

```python
parse_url(url, encoding=None)
```

Return urlparsed url from the given argument (which could be an already
parsed url)

#### escape\_ajax

```python
escape_ajax(url)
```

Return the crawleable url according to:
https://developers.google.com/webmasters/ajax-crawling/docs/getting-started

&gt;&gt;&gt; escape_ajax(&quot;www.example.com/ajax.html#!key=value&quot;)
&#x27;www.example.com/ajax.html?_escaped_fragment_=key%3Dvalue&#x27;
&gt;&gt;&gt; escape_ajax(&quot;www.example.com/ajax.html?k1=v1&amp;k2=v2#!key=value&quot;)
&#x27;www.example.com/ajax.html?k1=v1&amp;k2=v2&amp;_escaped_fragment_=key%3Dvalue&#x27;
&gt;&gt;&gt; escape_ajax(&quot;www.example.com/ajax.html?#!key=value&quot;)
&#x27;www.example.com/ajax.html?_escaped_fragment_=key%3Dvalue&#x27;
&gt;&gt;&gt; escape_ajax(&quot;www.example.com/ajax.html#!&quot;)
&#x27;www.example.com/ajax.html?_escaped_fragment_=&#x27;

URLs that are not &quot;AJAX crawlable&quot; (according to Google) returned as-is:

&gt;&gt;&gt; escape_ajax(&quot;www.example.com/ajax.html#key=value&quot;)
&#x27;www.example.com/ajax.html#key=value&#x27;
&gt;&gt;&gt; escape_ajax(&quot;www.example.com/ajax.html#&quot;)
&#x27;www.example.com/ajax.html#&#x27;
&gt;&gt;&gt; escape_ajax(&quot;www.example.com/ajax.html&quot;)
&#x27;www.example.com/ajax.html&#x27;

#### add\_http\_if\_no\_scheme

```python
add_http_if_no_scheme(url)
```

Add http as the default scheme if it is missing from the url.

#### guess\_scheme

```python
guess_scheme(url)
```

Add an URL scheme if missing: file:// for filepath-like input or
http:// otherwise.

#### strip\_url

```python
strip_url(url, strip_credentials=True, strip_default_port=True, origin_only=False, strip_fragment=True)
```

Strip URL string from some of its components:

- ``strip_credentials`` removes &quot;user:password@&quot;
- ``strip_default_port`` removes &quot;:80&quot; (resp. &quot;:443&quot;, &quot;:21&quot;)
  from http:// (resp. https://, ftp://) URLs
- ``origin_only`` replaces path component with &quot;/&quot;, also dropping
  query and fragment components ; it also strips credentials
- ``strip_fragment`` drops any #fragment component

