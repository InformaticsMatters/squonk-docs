---
title: Dataset sorter
---

## CATEGORY
Transform

## SOURCE
Squonk

## DESCRIPTION
Sort a dataset by one or more fields

## INPUTS
A dataset

## OUTPUTS
A dataset, sorted as specified

## OPTIONS
The only option is the sort directives specified as described below

## ADDITIONAL INFO

Often it is useful to put your dataset in a specific order, for instance most active to least active. The Dataset Sorter cell can do this for you. You specify an expression to use for the sorting. Often this will be to specify to sort by a single field. The general syntax is:

```
field_name ASC|DESC
```

where field_name is the name of the field you want to sort by, followed by a space and either ASC or DESC to specify whether to sort the values in ascending or descending order. If ASC or DESC is omitted ASC is assumed. In all cases missing values (null values) appear last.

For instance if you have a field named LogP then you can sort ascending using:

```
LogP ASC
```

or

```
LogP
```

and sort descending using
```
LogP DESC
```

If you want to sort using multiple fields (first sort by fieldX and if values are equal then sort by field Y ...) then specify each expression on a separate line like this:

```
LogP ASC
MolWeight DESC
```

Expressions can alternatively be separated by a comma but this is generally less good for readability.

{:.ui.info.message}
Note that sorting is performed in memory so should not be used for very large datasets.
