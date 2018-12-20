---
title: Chemcentral multi-search
---

## CATEGORY
Structure search

## SOURCE
RDKit

## DESCRIPTION
Search our "house" databases to find structures similar to any of the input structures

## INPUTS
A Dataset of Molecules defining the query structures

## OUTPUTS
A Dataset of Molecules containing the hits

## OPTIONS

|---|---|
|Table to search|Select from the available tables of structures|
|Similarity Cuttoff|Number between 0 and 1 for the similarity threshold (1 means identical)|
|Fingerprint Type|Select one of the available fingerprint types|
|Similarity Metric|Select the similarity metric to use|
|Limit|Restrict results to this many hits for each query structure|


## ADDITIONAL INFO
Structure search is performed using the [RDKit PostgreSQL cartridge](http://rdkit.org/docs/Cartridge.html).
For further information about similarity search consult the docs for the [Chemcentral Similarity Search]({{ site.baseurl }}{% link docs/cells/Chemcentral Similarity Search/index.md %}) Cell.
