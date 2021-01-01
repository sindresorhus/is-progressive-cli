# is-progressive-cli

> Check if JPEG images are [progressive](http://www.faqs.org/faqs/jpeg-faq/part1/section-11.html)

<img src="screenshot.png" width="641">

Can be useful to make sure your images are progressive, which is important for performance:

> Progressive JPEGs are better because they are faster. Appearing faster is being faster, and perceived speed is more important that actual speed. - [Progressive JPEGs: a new best practice](http://calendar.perfplanet.com/2012/progressive-jpegs-a-new-best-practice/)

The check is fast as it only reads a small part of the file.


## Install

```
$ npm install --global is-progressive-cli
```


## Usage

```
$ is-progressive --help

  Usage
    $ is-progressive <file> ...
    $ is-progressive < <file>

  Example
    $ is-progressive baseline.jpg progressive.jpg
    ✖ baseline.jpg
    ✔ progressive.jpg
```

##### Globbing

You can use globs too if your shell supports that.

```
$ is-progressive *.jpg
```


## Related

- [is-progressive](https://github.com/sindresorhus/is-progressive) - API for this module


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
