=================
Notes on electron
=================


Introduction
============

This document gathers some thoughts, notes and caveats observed during the development of *Pipapo*.


Caveats
=======

caveat-1
--------

When using the file protocol ("file://"), which is the default in case of *electron*, all you resources (css-files, js-files, favicons, images, ...) should linked with a relative path, i.e. not starting with a slash (/). The absolute path (i.e. starting with slash) works well when serves by a web-server but doesn't work in context of *electron*. The reason it doesn't work with *electron* is that *location.origin* has a stupid value with the protocol *file://* is used.

By googling on the error *failed to load resource: net::err_file_not_found*, several forums recommend to use the html tag *<base href="./">*. But it doesn't fix the issue for me. The solution is not to use absolute path.

caveat-2
--------

Do not use link to external pages (e.g. <a href="http://www.google.com"> ) as this external page will replace your electron-app. You can fix this issue in your *electron_main.js* as explained in the discussion-thread https://github.com/electron/electron/issues/1344


caveat-3
--------

*electron-builder* works properly only if you configure your *package.json* and *electron_main.js* in away that *electron* can be started with the command::

  electron .


Notes
=====

note-1
------

*electron* comes with its typescript-definition and those from node. So you don't have to install *@types/node*. And you should not install it as it would conflict with the electron variant.




