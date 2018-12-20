---
title: ChEMBL Activities Fetcher
---

## CATEGORY
Input/Output

## SOURCE
EBI

## DESCRIPTION
Pulls compound and activity data  for a specified assay ID from the ChEMBL REST web services at the EBI

## INPUTS
None

## OUTPUTS
A Dataset of Molecules

## OPTIONS

|---|---|
|Assay ID|The ID of the ChEMBL assay. e.g. CHEMBL1909156|
|Prefix|A prefix for the data field names, so that multiple assays can be distinguished. e.g. instead of a field named `IC50` you can have `H1_IC50` by specifying `H1_` as the prefix|


## ADDITIONAL INFO

{:.ui.warning.message}
This cell uses an external service. Whilst we endeavour to only use reputable external services Squonk has no control over what these external services do with your queries and data. If you do not trust the external site then do not use this cell.

Information about the ChEMBL REST web services can be found [here](https://www.ebi.ac.uk/chembl/ws).

Data is downloaded from the ChEMBL web services in chunks, so retrieval for a large set of data can take a several seconds, or even up to a minute or so.

Typically you would need to use ChEMBL's web site or similar to identify the assay ID you want to load. We plan to add a query service that allows you to do this directly.

A nice set of assays you can use to test are:

- CHEMBL1613886 -  6846 molecules with activities for Cyp 3A4
- CHEMBL1613777 - 3712 molecules with activities for Cyp 2C19
- CHEMBL1614110 - 3649 molecules with activities for Cyp 2D6
- CHEMBL1614027 - 3082 molecules with activities for Cyp 2C9

After loading these (use a separate cell for each) you can merge them together using the [Merge Datasets]({{ site.baseurl }}{% link docs/cells/Merge Datasets/index.md %}) cell.
