---
title: Molecule standardisers
---

## CATEGORY
Transform

## SOURCE
RDKit

## DESCRIPTION
Two cells performing molecular standardisation using the MolVS and Flatkinson standardisers.

## INPUTS
A Dataset of Molecules

## OUTPUTS
A Dataset of Molecules

## OPTIONS

---|---
RDKIt version|Which version of RDKit to use

## ADDITIONAL INFO
Implemented in RDKit using [sanifier.py](https://github.com/InformaticsMatters/pipelines/blob/master/src/python/pipelines/rdkit/sanifier.py) from the [Pipelines project](https://github.com/InformaticsMatters/pipelines).

{:.ui.info.message}
Note: These are initial versions of molecule standardisers. Functionality is likely to change.

MolVStandardiser is based on code developed by Matt Swain and can be found [here](http://molvs.readthedocs.io/en/latest/).

FlatkinsonStandardiser is based on code developed by Francis Atkinson and can be found [here](https://github.com/flatkinson/standardiser).

The aim is to provide alternative standardisers that can be used for different purposes. Its likely we will provide multiple configurations for different purposes

### Output
Each input molecule is transformed according to the standardiser's rules. The output is the transformed molecule, or the input molecule if no transformations are applied. For each input molecule one molecule is output.

A field name "Standardised" is added to the output molecules to indicate what was done. There are 3 values:

- True - the molecule was transformed
- False - the molecule was not transformed
- Error - an error occurred during standardisation and the input molecule is returned without any changes
