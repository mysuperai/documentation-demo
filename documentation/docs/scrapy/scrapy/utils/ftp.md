---
sidebar_label: ftp
title: scrapy.utils.ftp
---

#### ftp\_makedirs\_cwd

```python
ftp_makedirs_cwd(ftp, path, first_call=True)
```

Set the current directory of the FTP connection given in the ``ftp``
argument (as a ftplib.FTP object), creating all parent directories if they
don&#x27;t exist. The ftplib.FTP object must be already connected and logged in.

#### ftp\_store\_file

```python
ftp_store_file(*, path, file, host, port, username, password, use_active_mode=False, overwrite=True)
```

Opens a FTP connection with passed credentials,sets current directory
to the directory extracted from given path, then uploads the file to server

