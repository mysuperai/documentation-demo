---
sidebar_label: feed
title: scrapy.spiders.feed
---

This module implements the XMLFeedSpider which is the recommended spider to use
for scraping from an XML feed.

See documentation in docs/topics/spiders.rst

## XMLFeedSpider Objects

```python
class XMLFeedSpider(Spider)
```

This class intends to be the base class for spiders that scrape
from XML feeds.

You can choose whether to parse the file using the &#x27;iternodes&#x27; iterator, an
&#x27;xml&#x27; selector, or an &#x27;html&#x27; selector.  In most cases, it&#x27;s convenient to
use iternodes, since it&#x27;s a faster and cleaner.

#### process\_results

```python
 | process_results(response, results)
```

This overridable method is called for each result (item or request)
returned by the spider, and it&#x27;s intended to perform any last time
processing required before returning the results to the framework core,
for example setting the item GUIDs. It receives a list of results and
the response which originated that results. It must return a list of
results (items or requests).

#### adapt\_response

```python
 | adapt_response(response)
```

You can override this function in order to make any changes you want
to into the feed before parsing it. This function must return a
response.

#### parse\_node

```python
 | parse_node(response, selector)
```

This method must be overriden with your custom spider functionality

#### parse\_nodes

```python
 | parse_nodes(response, nodes)
```

This method is called for the nodes matching the provided tag name
(itertag). Receives the response and an Selector for each node.
Overriding this method is mandatory. Otherwise, you spider won&#x27;t work.
This method must return either an item, a request, or a list
containing any of them.

## CSVFeedSpider Objects

```python
class CSVFeedSpider(Spider)
```

Spider for parsing CSV feeds.
It receives a CSV file in a response; iterates through each of its rows,
and calls parse_row with a dict containing each field&#x27;s data.

You can set some options regarding the CSV file, such as the delimiter, quotechar
and the file&#x27;s headers.

#### process\_results

```python
 | process_results(response, results)
```

This method has the same purpose as the one in XMLFeedSpider

#### adapt\_response

```python
 | adapt_response(response)
```

This method has the same purpose as the one in XMLFeedSpider

#### parse\_row

```python
 | parse_row(response, row)
```

This method must be overriden with your custom spider functionality

#### parse\_rows

```python
 | parse_rows(response)
```

Receives a response and a dict (representing each row) with a key for
each provided (or detected) header of the CSV file.  This spider also
gives the opportunity to override adapt_response and
process_results methods for pre and post-processing purposes.

