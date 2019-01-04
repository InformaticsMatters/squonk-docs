if [[ -f "index.md" || -f "_config.yml" || -f "header.md" ]]
then
  if [[ $1 == "production" ]]
  then
    echo "Building in for production"
    JEKYLL_ENV=production bundle exec jekyll build
  else
    bundle exec jekyll build
  fi
else
  echo "index.md, _config.yml, header.md don't exist. Please run init.sh first"
fi


