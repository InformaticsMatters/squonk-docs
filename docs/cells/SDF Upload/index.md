---
title: SDF Upload
---

## CATEGORY
Input/Output

## SOURCE
Squonk

## DESCRIPTION
Allows a MDL SD file to be uploaded into the system. Structures and data are handled.

## INPUTS
This cell has no inputs.

## OUTPUTS
This cell has two outputs:

1. **fileContent** - the raw content of the file. This is rarely used
2. **output** - the parsed contents of the file represented as a Dataset that can be used as the input to other cells

## OPTIONS

---|---
SDFile|The file to be uploaded
Name field name|If the SD file used structure names (the first line above the CTAB block) then you can read this and treat it as a standard field with the name specified by this option.

## ADDITIONAL INFO
![]({{ site.baseurl }}{% link docs/cells/SDF Upload/sdf-upload.png %})

To use this cell:

1. Click the "Choose file" button and specify the SD file you want to load.
2. Click on the Upload button to perform the upload
3. Click on the cell's execute button to parse the file and generate the output
