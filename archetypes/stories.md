---
categories: [""]
date: {{ .Date }}
description: ""
draft: false
resources: 
- src: 
  name: "header"
url: /stories/{{getenv "STORY" | lower }}/{{ getenv "SLUG" | lower }}/
slug:
stories: ["{{ getenv "STORY" | lower }}"]
subtitle: 
title: {{ replace (getenv "SLUG") "-" " " | title }}
galleryprefix: ""
galleryfolder: stories/{{ getenv "STORY"| lower  }}/{{ getenv "SLUG" | lower  }}/gallery
gallerythumbnail: "thumbs"
unlisted: false
---