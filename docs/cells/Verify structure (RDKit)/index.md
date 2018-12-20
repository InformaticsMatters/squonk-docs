---
title: Verify structure (RDKit)
---

## CATEGORY
Input/Output

## SOURCE
RDKit

## DESCRIPTION
Verify that the molecules are valid according to RDKit

## INPUTS
A dataset of molecules

## OUTPUTS
A dataset of molecules

## OPTIONS

---|---
Filter mode|How to filter results: `INCLUDE_PASS`, `INCLUDE_FAIL`, `INCLUDE_ALL`

## ADDITIONAL INFO
It may seem counter-intuitive that the input to this cell is a dataset of molecules. If the molecules were not valid now could they be molecules?

This is a consequence of how we handle molecules as our MoleculeObject, which is described in more detail in the [Key Concepts]({{ site.baseurl }}{% link docs/content/User Guide/Key Concepts/index.md %}) page.

It can sometimes be useful to verify that a particular toolkit is able to handle a set of molecules, and remove ones that cannot be handled at the start.

If your dataset is not of type molecules (e.g. you read a CSV text file) then to use this cell you must first convert to molecules using the [Convert to Molecules]({{ site.baseurl }}{% link docs/cells/Convert to Molecules/index.md %}) cell.

