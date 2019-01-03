if [[ -f "index.md" || -f "_config.yml" || -f "header.md" ]]
then
  bundle exec jekyll build
else
  echo "index.md, _config.yml, header.md don't exist. Please run init.sh first"
fi


