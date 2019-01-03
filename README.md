# Base Squonk Docs

Source for the Squonk docs.



This repo can be cloned and then used as a base to develop your own version of the squonk documentation.

1. Clone this repo

2. Run the `init.sh` script with
```
sh init.sh
```

3. Make changes to the index.md, header.html and _config.yml as desired.

4. To add Cells make a copy of the base cell `/docs/cells/base/`. This should be given the title of the cell. Then edit the contents as desired. Run the indexer.py script, from any directory, using
```
python indexer.py
```

5. To add a Docs page, create a directory inside the `/docs/content/` directory with the name of the page. Inside, create a index.md file with the title as frontmatter. Add the new page to the yaml file `_data/docs.yml`.

6. When all changes have been made, run the `build.sh` script with
```
sh build.sh
```.
This can take some time due to a part of Jekyll that is unoptimised. If this build is to be deployed live, add the production argument.
```
sh build.sh production
```
This turns on minification and Google analytics if desired.

7. The output will be generated to the `_site` directory which can then be deployed.

