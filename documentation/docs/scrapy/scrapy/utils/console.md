---
sidebar_label: console
title: scrapy.utils.console
---

#### get\_shell\_embed\_func

```python
get_shell_embed_func(shells=None, known_shells=None)
```

Return the first acceptable shell-embed function
from a given list of shell names.

#### start\_python\_console

```python
start_python_console(namespace=None, banner='', shells=None)
```

Start Python console bound to the given namespace.
Readline support and tab completion will be used on Unix, if available.

