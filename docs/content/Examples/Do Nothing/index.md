---
title: Do Nothing
---

This is the simplest of examples that just copies the input file to the output file. As such it does nothing useful, but does provide a complete example that can be executed

|Option|Value|Comment|
|---|---|---|
|Docker image name|busybox|This is a standard Docker image that contains a minimal Linux distribution|
|Input media type|chemical/x-mdl-sdfile|Specifies to write the input to a file named input.sdf.gz in MDL's SD file format|
|Output media type|chemical/x-mdl-sdfile|Specifies to read the output from a file named output.sdf.gz in MDL's SD file format|
|Command|`#!/bin/sh`<br>cp input.sdf.gz output.sdf.gz|First line the the shebang header that says this is a shell script.<br>Second line copies the input file to the output file|

Once executed the cell should have output that is identical to its input.

Alternatively you could specify the input and output media types as application/x-squonk-dataset-molecule+json to specify that you want the data in Squonk's dataset JSON format. In this case two files need to be copied and the command would look like this:

`#!/bin/sh`
`cp input.data.gz output.data.gz`
`cp input.meta output.meta`
