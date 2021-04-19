---
sidebar_label: commands
title: scrapy.commands
---

Base class for Scrapy commands

## ScrapyCommand Objects

```python
class ScrapyCommand()
```

#### syntax

```python
 | syntax()
```

Command syntax (preferably one-line). Do not include command name.

#### short\_desc

```python
 | short_desc()
```

A short description of the command

#### long\_desc

```python
 | long_desc()
```

A long description of the command. Return short description when not
available. It cannot contain newlines, since contents will be formatted
by optparser which removes newlines and wraps text.

#### help

```python
 | help()
```

An extensive help for the command. It will be shown when using the
&quot;help&quot; command. It can contain newlines, since no post-formatting will
be applied to its contents.

#### add\_options

```python
 | add_options(parser)
```

Populate option parse with options available for this command

#### run

```python
 | run(args, opts)
```

Entry point for running commands

## BaseRunSpiderCommand Objects

```python
class BaseRunSpiderCommand(ScrapyCommand)
```

Common class used to share functionality between the crawl, parse and runspider commands

