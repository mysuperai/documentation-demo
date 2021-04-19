---
sidebar_label: conf
title: scrapy.utils.conf
---

#### build\_component\_list

```python
build_component_list(compdict, custom=None, convert=update_classpath)
```

Compose a component list from a { class: order } dictionary.

#### arglist\_to\_dict

```python
arglist_to_dict(arglist)
```

Convert a list of arguments like [&#x27;arg1=val1&#x27;, &#x27;arg2=val2&#x27;, ...] to a
dict

#### closest\_scrapy\_cfg

```python
closest_scrapy_cfg(path='.', prevpath=None)
```

Return the path to the closest scrapy.cfg file by traversing the current
directory and its parents

#### init\_env

```python
init_env(project='default', set_syspath=True)
```

Initialize environment to use command-line tool from inside a project
dir. This sets the Scrapy settings module and modifies the Python path to
be able to locate the project module.

#### get\_config

```python
get_config(use_closest=True)
```

Get Scrapy config file as a ConfigParser

#### feed\_process\_params\_from\_cli

```python
feed_process_params_from_cli(settings, output, output_format=None, overwrite_output=None)
```

Receives feed export params (from the &#x27;crawl&#x27; or &#x27;runspider&#x27; commands),
checks for inconsistencies in their quantities and returns a dictionary
suitable to be used as the FEEDS setting.

