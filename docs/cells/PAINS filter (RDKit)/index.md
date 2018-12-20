---
title: PAINS filter (RDKit)
---

## CATEGORY
Molecular Properties

## SOURCE
RDKit

## DESCRIPTION
Filter molecules using PAINS (Pan Assay Interference Compounds) filters, implemented with RDKit

## INPUTS
A Dataset of molecules

## OUTPUTS
A Dataset of molecules filtered and annotated accordingly

## OPTIONS

---|---
Filter mode|Specifies how this cell is to filter and handle the molecules. The options are described below.

## ADDITIONAL INFO
**P**an **A**ssay **IN**terference compounds are a set molecular filters that aim to identify compounds from High Throughput Screening that are likely false positives because the functional groups that they contain. For instance, fluorophores or Micheal acceptors. The approach is described in this paper: <cite>[J. Med. Chem. (2010), 53, 2719](http://pubs.acs.org/doi/abs/10.1021/jm901137j)</cite>.

The PAINS filters are implemented as Smarts filters in RDKit. Molecules are assessed with those smarts and filtered and annotated according to the filter mode:

`INCLUDE_ALL`: retain all molecules and add properties for the number of matching filters and the list of those matching filters.

`INCLUDE_MATCHING`: retain only those molecules matching at least one filter and add properties for the number of matching filters and the list of those matching filters.

`INCLUDE_NON_MATCHING`:  retain only those molecules that do not match any filter. No additional properties are added.

For more information about the RDKit PAINS implementation [see here](https://github.com/rdkit/rdkit/tree/master/Code/GraphMol/FilterCatalog).

{:.ui.warning.message}
This cell is not yet set up to handle very large datasets.
