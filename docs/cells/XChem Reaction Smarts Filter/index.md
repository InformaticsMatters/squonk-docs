---
title: XChem Reaction Smarts Filter
---

## CATEGORY
Molecular Screening

## SOURCE
RDKit

## DESCRIPTION
Filter a set of molecules according to whether they contain a substructure fragment compatible with a set of reaction types

## INPUTS
A Dataset of Molecules

## OUTPUTS
A Dataset of Molecules

## OPTIONS
This cell has no user defined options

## ADDITIONAL INFO
This cell is a highly specialised one used by the XChem project. As such it may have little use in general use.

The purpose is to break a molecule into fragments that are compatible for enumeration using a set of different reactions. These reactions definitions are currently hard coded.

The output is a dataset of molecules, each molecules containing fields for each of the reaction types that it is compatible. The values of the fields is an array of MoleculeObjects containing the SMILES of the molecule fragment that can be reacted.

For instance, if a molecule can be used as the basis for and Amide formation reaction then a field name Amide will be preset for that molecule, and it will contain SMILES for one of more fragments of the molecule that can be used for amide formation.
