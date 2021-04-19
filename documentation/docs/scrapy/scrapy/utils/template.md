---
sidebar_label: template
title: scrapy.utils.template
---

Helper functions for working with templates

#### string\_camelcase

```python
string_camelcase(string)
```

Convert a word  to its CamelCase version and remove invalid chars

&gt;&gt;&gt; string_camelcase(&#x27;lost-pound&#x27;)
&#x27;LostPound&#x27;

&gt;&gt;&gt; string_camelcase(&#x27;missing_images&#x27;)
&#x27;MissingImages&#x27;

