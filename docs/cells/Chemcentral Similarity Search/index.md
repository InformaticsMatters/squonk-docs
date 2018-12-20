---
title: Chemcentral Similarity Search
---

## CATEGORY
Structure search

## SOURCE
RDKit

## DESCRIPTION
Search our "house" databases using similarity search

## INPUTS
None

## OUTPUTS
A Dataset of Molecules

## OPTIONS

|---|---|
|Query Structure|Sketch the query structure (double click to open the sketcher)|
|Table to search|Select from the available tables of structures|
|Similarity Cuttoff|Number between 0 and 1 for the similarity threshold (1 means identical)|
|Fingerprint Type|Select one of the available fingerprint types|
|Similarity Metric|Select the similarity metric to use.|
|Limit|Restrict results to this many hits|


## ADDITIONAL INFO
Structure search is performed using the [RDKit PostgreSQL cartridge](http://rdkit.org/docs/Cartridge.html).

## Fingerprint Types

We currently support an number of  RDKit chemical fingerprints:

|Name|Description|
|---|---|
|`RDKIT`|Chemical hashed fingerprint similar in nature (but not directly equivalent to) Daylight fingerprints|
|`MORGAN_CONNECTIVITY_2`|Morgan circular fingerprints, similar in nature (but not directly equivalent to) SciTegic's ECFP4|
|`MORGAN_FEATURE_2`|Morgan feature fingerprints, similar in nature (but not directly equivalent to) SciTegic's FCFP4|

Other fingerprint types are supported by RDKit, and can be added if there is demand.
