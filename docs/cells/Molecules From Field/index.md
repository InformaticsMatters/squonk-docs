---
title: Molecules From Field
---

## CATEGORY
Input/Output

## SOURCE
Squonk

## DESCRIPTION
Creates a new dataset containing molecules present in the specified field of the input.

## INPUTS
A Dataset. Usually of Molecules, but and type of BasicObject can be used.

## OUTPUTS
A Dataset of Molecules.

## OPTIONS

---|---
Field with molecules|The name of the field containing the Molecules

## ADDITIONAL INFO
This is a fairly specialised field (originally created to be used in conjunction with the [XChemReactionSmartsFilter]({{ site.baseurl }}{% link docs/cells/XChem Reaction Smarts Filter/index.md %})) that extracts molecules from a specified field and generates a new Dataset of these molecules.

The field must contain and array of MoleculeObjects. In effect the input structures are replaces with those from the specified field (if present). As such it is like a flat map operation.

The UUID of or source molecule is saved as a field of the output molecules so that the source can be traced.
