===============
Notes on Pipapo
===============


Presentation
============

The project *Pipapo* is a proof-of-concept based on the javascript libraries fabricjs_ and xstate_ and deliveres as web-page_, pwa_, electron-app_ and snap-app_. The primary goal is to check the maturities of thoses technologies and the workflow from ts_, pug_ and sass_ sources to the deliveries.

.. _fabricjs: http://fabricjs.com/
.. _xstate: https://xstate.js.org
.. _web-page: https://stackoverflow.com/questions/23583782/pure-front-end-javascript-with-web-api-versus-mvc-views-with-ajax
.. _pwa: https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps
.. _electron-app: https://www.electronjs.org/
.. _snap-app: https://snapcraft.io/
.. _ts: https://www.typescriptlang.org
.. _pug: https://pugjs.org
.. _sass: https://sass-lang.com/


Getting started
===============

In a bash terminal::

  git clone https://github.com/charlyoleg/pipapo
  cd pipapo
  npm install
  npm run
  npm run install_py
  npm run docs
  npm run build_ui
  npm run serve_ui
  # run the electron-app
  npm run electro_start
  # build and upload the snap
  npm run electro_dist
  npm run snapcraft_upload
  npm run snapcraft_list
  # build and run the pwa
  npm run generate_certificate
  npm run build_web_server
  npm run run_web_server


Using the snap
==============

In a bash terminal::

  cd
  sudo snap install charlyoleg-pipapo
  charlyoleg-pipapo
  sudo snap refresh charlyoleg-pipapo
  charlyoleg-pipapo
  sudo snap remove charlyoleg-pipapo

