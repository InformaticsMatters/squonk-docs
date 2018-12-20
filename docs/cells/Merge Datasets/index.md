---
title: Merge Datasets
---

## CATEGORY
Transform

## SOURCE
Squonk

## DESCRIPTION
Merge multiple datasets into one using a common key. Useful for combining data from multiple sources into a single dataset where there is a common identifier linking the records


## INPUTS
This cell accepts up to five input datasets which must all be of the same type

## OUTPUTS
The single output is the merged data

## OPTIONS

|---|---|
|Merge field name|The name of the field that contains the keys that identify the common records in the input datasets. If none is specified the objects UUID is used which is probably not what is wanted.|
|When duplicate keep first|How to handle duplicate properties that are encountered when merging - keep the current one or use the new one.|

## ADDITIONAL INFO
Merging is done by first processing each input in turn `(1, 2, 3, 4, 5)`. Whenever a duplicate key is encountered for the "Merge field name" field the properties from the new record are merged to those of the existing record (according to the "When duplicate keep first" setting). Duplicates can occur within a dataset as well as between datasets. If the key does not already exist the new record is added to the resulting dataset.

The result is that records with duplicate keys are removed from the resulting dataset but their properties are merged with the existing ones.

{:.ui.info.message}
Merging does not affect structures, only their properties. The first structure encountered will be retained.

{:.ui.warning.message}
Merging is performed in memory so is not suited for very large datasets.

![]({{ site.baseurl }}{% link docs/cells/Merge Datasets/dataset-merger.png %})

{:.ui.info.message}
Note: the ordering of the input endpoints is currently a bit erratic. Be careful to connect them in the order you want (mouse over the endpoint to get its number).

{:.ui.info.message}
This step is somewhat similar to the [Dataset Enricher]({{ site.baseurl }}{% link docs/cells/Dataset Enricher/index.md %}) cell, but whereas that cell merges data from one dataset into another where the records match this one accumulates all records from all datasets.
