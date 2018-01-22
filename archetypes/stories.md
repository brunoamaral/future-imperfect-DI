---
categories: [""]
date: {{ .Date }}
description: ""
draft: false
featured_image: /stories/{{ getenv "STORY" }}/{{ getenv "DATE" }}/
slug:
stories: ["{{ getenv "STORY" }}"]
subtitle: 
title: {{ replace .TranslationBaseName "-" " " | title }}
unlisted: false
---
