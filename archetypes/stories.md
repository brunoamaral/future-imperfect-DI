---
categories: [""]
date: {{ .Date }}
description: ""
draft: false
featured_image: /stories/{{ getenv "STORY" }}/
layout: post
slug:
stories: ["{{ getenv "STORY" }}"]
subtitle: 
title: {{ replace .TranslationBaseName "-" " " | title }}
unlisted: false
---
