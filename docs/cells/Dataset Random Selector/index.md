---
title: Dataset Random Selector
---

## CATEGORY
Filter

## SOURCE
Squonk

## DESCRIPTION
Select records at random from a dataset

## INPUTS
A dataset

## OUTPUTS
A dataset

## OPTIONS

|---|---|
|Random fraction|The probability of selecting any records. A value between 0 and 1.|
|Max records|The max number of records to select|


## ADDITIONAL INFO
Note that this is not a true random selector as records are processed from beginning until the maximum number have been obtained. As such, if the selection threshold is high then the max number will be reached before the end of the dataset. Similarly if the selection threshold is too low the max number may never be achieved.

See also the [Dataset slice selector]({{ site.baseurl }}{% link docs/cells/Dataset slice selector/index.md %}) which provides an alternative way of selecting a dataset subset.
