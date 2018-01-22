# future-imperfect-DI
Future Imperfect theme by HTML5 UP ported to Hugo with some heavy changes

Example config.toml

```
baseurl = "https://brunoamaral.eu/"
disqusShortname = "brunoamaral-eu"
googleAnalytics = "UA-10997142-1"
languageCode = "en-us"
preserveTaxonomyNames = false
publishdir = "/var/web/brunoamaral.eu"
theme = "light"
title = "Digital Insanity"

author_facebook="brunoamaral"

[mediaTypes]
  [mediaTypes."application/json"]
  suffix = "json"

[permalinks]
post = "/post/:slug/"

[sitemap]
changefreq = "weekly"
priority = 0.5
filename = "sitemap.xml"

[taxonomies]
tag = "tags"
category = "categories"

[social]
facebook_admin = "620982784"
facebook_app_id = "275213602982"

DefaultContentLanguage = "en"

[Languages]

[Languages.en]
weight = 1
LanguageName = "English"

[Languages.en.params]
subtitle = "Tales of an hyperactive geek"
description = "Sharing ideas and knowledge on Digital Strategy, marketing and communication."
algoliaappid = "CYDOXRNTGN"
algoliaapikey = "4a966540d767ba819e5373aa67ffd0b1"
algoliaindex = "brunoamaral.eu"

[Languages.en.params.authors]
[Languages.en.params.authors.Bruno]
name = "Bruno Amaral"
thumbnail = ""
facebook = "brunoamaral"
twitter = "brunoamaral"
github = "brunoamaral"
googleplus = "https://plus.google.com/u/0/+BrunoAmaral"
bio = "I was a geek before it was cool."
[Languages.en.params.authors.Joe]
name = "Nothing joe"
thumbnail = "joe.jpeg"
facebook = "joe joe"
twitter = "joe joe"
github = "joe joe"
bio = "I was joe before it was cool."

[Languages.en.menu]
[[Languages.en.menu.main]]
name = "The Site"
url = "/about/blog"
weight = 1
post = "This is more than meets the eye"

[[Languages.en.menu.main]]
name = "The Stories"
url = "/categories/"
weight = 2
post = "Come sit by the table, have a drink and read a tale"

[[Languages.en.menu.main]]
name = "The Author"
url = "/about/me/"
weight = 3
post = "Bruno Amaral"

[[Languages.en.menu.main]]
name = "The Photos"
url = "/instagram/"
weight = 4
post = "Instagram"

[[Languages.en.menu.main]]
name = "Contact"
url = "/contact/"
weight = 5
post = "Don't be shy, reach out"

[Languages.pt]
weight = 2
LanguageName = "Portuguese"
subtitle = "Contos de uma mente hiperactiva"

[Languages.pt.menu]
[[Languages.pt.menu.main]]
name = "O Website"
url = "/about/blog"
weight = 1
post = "Isto é mais do que um blog"

[[Languages.pt.menu.main]]
name = "As Histórias"
url = "/categories/"
weight = 2
post = "São mais do que estórias e menos do que histórias, mas contam mais do que contos."

[[Languages.pt.menu.main]]
name = "O Autor"
url = "/about/me/"
weight = 3
post = "Bruno Amaral"

[[Languages.pt.menu.main]]
name = "As Fotos"
url = "/instagram/"
weight = 4
post = "Instagram"

[[Languages.pt.menu.main]]
name = "Contacto"
url = "/contact/"
weight = 5
post = "Diz qualquer coisa"
```
