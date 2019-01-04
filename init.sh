#!/bin/bash

if ! [[ -f "index.md" ]]
then
	cp templates/index-template.md index.md
fi

if ! [[ -f "header.md" ]]
then
	cp templates/header-template.md _includes/header.md
fi

if ! [[ -f "_config-template.md" ]]
then
	cp templates/_config-template.yml _config.yml
fi
