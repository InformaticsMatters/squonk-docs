---
title: MoleculeEnumerator
---

## CATEGORY
Transform

## SOURCE
RDKit

## DESCRIPTION
Enumerates potential variants of a structure using RDKit

## INPUTS
A Dataset of molecules

## OUTPUTS
A Dataset of molecules

## OPTIONS

---|---
Enumerate tautomers|Whether to enumerate the tautomers of the molecules
Enumerate stereoisomers|Whether to enumerate the stereoisomers of the molecules

## ADDITIONAL INFO

Implemented in RDKit using [sanifier.py](https://github.com/InformaticsMatters/pipelines/blob/master/src/python/pipelines/rdkit/sanifier.py) from the [Pipelines project](https://github.com/InformaticsMatters/pipelines).

The enumerated molecules have the UUID and index of the input molecule added as field.

If there are no tautomers or steroisomers the input molecules is returned unchanged.
