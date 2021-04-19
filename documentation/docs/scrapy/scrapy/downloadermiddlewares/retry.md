---
sidebar_label: retry
title: scrapy.downloadermiddlewares.retry
---

An extension to retry failed requests that are potentially caused by temporary
problems such as a connection timeout or HTTP 500 error.

You can change the behaviour of this middleware by modifing the scraping settings:
RETRY_TIMES - how many times to retry a failed page
RETRY_HTTP_CODES - which HTTP response codes to retry

Failed pages are collected on the scraping process and rescheduled at the end,
once the spider has finished crawling all regular (non failed) pages.

#### get\_retry\_request

```python
get_retry_request(request: Request, *, spider: Spider, reason: Union[str, Exception] = 'unspecified', max_retry_times: Optional[int] = None, priority_adjust: Optional[int] = None, logger: Logger = retry_logger, stats_base_key: str = 'retry')
```

Returns a new :class:`~scrapy.Request` object to retry the specified
request, or ``None`` if retries of the specified request have been
exhausted.

For example, in a :class:`~scrapy.Spider` callback, you could use it as
follows::

    def parse(self, response):
        if not response.text:
            new_request_or_none = get_retry_request(
                response.request,
                spider=self,
                reason=&#x27;empty&#x27;,
            )
            return new_request_or_none

*spider* is the :class:`~scrapy.Spider` instance which is asking for the
retry request. It is used to access the :ref:`settings &lt;topics-settings&gt;`
and :ref:`stats &lt;topics-stats&gt;`, and to provide extra logging context (see
:func:`logging.debug`).

*reason* is a string or an :class:`Exception` object that indicates the
reason why the request needs to be retried. It is used to name retry stats.

*max_retry_times* is a number that determines the maximum number of times
that *request* can be retried. If not specified or ``None``, the number is
read from the :reqmeta:`max_retry_times` meta key of the request. If the
:reqmeta:`max_retry_times` meta key is not defined or ``None``, the number
is read from the :setting:`RETRY_TIMES` setting.

*priority_adjust* is a number that determines how the priority of the new
request changes in relation to *request*. If not specified, the number is
read from the :setting:`RETRY_PRIORITY_ADJUST` setting.

*logger* is the logging.Logger object to be used when logging messages

*stats_base_key* is a string to be used as the base key for the
retry-related job stats

