<center>![](http://i.imgur.com/SmLtxEo.png)</center>

# Parrot <a href="http://bower.io/search/?q=Parrotjs"><img src="http://benschwarz.github.io/bower-badges/badge@2x.png" width="130" height="30"></a>

[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/parrotjs/Parrotjs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Dependency status](http://img.shields.io/david/parrotjs/Parrotjs.svg?style=flat)](https://david-dm.org/parrotjs/Parrotjs)
[![Dev Dependencies Status](http://img.shields.io/david/dev/parrotjs/Parrotjs.svg?style=flat)](https://david-dm.org/parrotjs/Parrotjs#info=devDependencies)
[![Gittip](http://img.shields.io/gittip/Kikobeats.svg?style=flat)](https://www.gittip.com/Kikobeats/)

Browsers are more modern than ever. You can know the battery of your laptop, vibrate your mobile or know your position. JavaScript (and browsers) are in everything and can do more things than you think.

On the other hand, the API of this news features are too primitive: the browsers just provide the minimal interface, and is necessary write a little code around it. Also, each browser have specific vendor and exist minimal changes in the way to access a this methods.

Parrot is a high-level wrapper for browser features: It's provide you concise methods for use this features today.

## Examples

## Get Started

The code are divided in modules and each do a different thing:

## Install

```bash
bower install parrotjs
```

We offers different builds depending on what you need

### Standalone

Just parrot code, without dependencies. Use it when you have a custom build with your other frontend dependencies:

```html
<script src="bower_components/parrotjs/dist/parrot.standalone.js"></script>
```

### QuoJS, jQuery or ZeptoJS

Parrot code with all dependencies that he needs. Use it when you want to provide AJAX handler and not complicate yourself:

```html
<script src="bower_components/parrotjs/dist/parrot.quo.js"></script>
<script src="bower_components/parrotjs/dist/parrot.jquery.js"></script>
<script src="bower_components/parrotjs/dist/parrot.zepto.js"></script>
```

## License

MIT © parrotjs
