---
sidebar_label: link
title: scrapy.link
---

This module defines the Link object used in Link extractors.

For actual link extractors implementation see scrapy.linkextractors, or
its documentation in: docs/topics/link-extractors.rst

## Link Objects

```python
class Link()
```

Link objects represent an extracted link by the LinkExtractor.

Using the anchor tag sample below to illustrate the parameters::

        &lt;a href=&quot;https://example.com/nofollow.html#foo&quot; rel=&quot;nofollow&quot;&gt;Dont follow this one&lt;/a&gt;

**Arguments**:

- `url`: the absolute url being linked to in the anchor tag.
            From the sample, this is ``https://example.com/nofollow.html``.

- `text`: the text in the anchor tag. From the sample, this is ``Dont follow this one``.

- `fragment`: the part of the url after the hash symbol. From the sample, this is ``foo``.

- `nofollow`: an indication of the presence or absence of a nofollow value in the ``rel`` attribute
                of the anchor tag.

