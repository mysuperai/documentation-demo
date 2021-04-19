---
sidebar_label: cookies
title: scrapy.http.cookies
---

#### potential\_domain\_matches

```python
potential_domain_matches(domain)
```

Potential domain matches for a cookie

&gt;&gt;&gt; potential_domain_matches(&#x27;www.example.com&#x27;)
[&#x27;www.example.com&#x27;, &#x27;example.com&#x27;, &#x27;.www.example.com&#x27;, &#x27;.example.com&#x27;]

## WrappedRequest Objects

```python
class WrappedRequest()
```

Wraps a scrapy Request class with methods defined by urllib2.Request class to interact with CookieJar class

see http://docs.python.org/library/urllib2.html#urllib2.Request

#### is\_unverifiable

```python
 | is_unverifiable()
```

Unverifiable should indicate whether the request is unverifiable, as defined by RFC 2965.

It defaults to False. An unverifiable request is one whose URL the user did not have the
option to approve. For example, if the request is for an image in an
HTML document, and the user had no option to approve the automatic
fetching of the image, this should be true.

