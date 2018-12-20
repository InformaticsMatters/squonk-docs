---
title: RDKit Constrained Conformers
---

## CATEGORY
Molecular Properties

## SOURCE
RDKit

## DESCRIPTION
Generate conformers of a molecule, constraining a part of a molecule to fixed coordinates.

## INPUTS
1. input: a dataset of molecules for which conformers will be generated
2. refMol: a dataset of molecules from which one is specified as the fixed part (typically this dataset only has one record)

## OUTPUTS
A dataset of molecules with 3D conformations

## OPTIONS

---|---
Number of conformers|The number of conformers to generate
Reference mol index|The index of the molecule in the dataset that contains the reference molecule. Default is the first molecule.
Core smiles|Smiles/smarts of the core part of the molecule to constrain. If not specified then MCS is used to determine this.

## ADDITIONAL INFO
This cell generates conformers of structures fixing a specified part of the structure to specified coordinates.

The structures to generate conformers for is specified as one input (named input), and the second input (named refMol) specifies the reference molecule. The reference molecule must contain 3D coordinates. Typically it is specified as a dataset containing just one structure, but if more than one structure is present then the index of the structure to use can be specified (the default is the first structure). The part of the structure in the input that remains fixed is determined by a Maximum Common Substructure (MCS) search for the reference molecule.

{:.ui.info.message}
Note if you want un-constrained conformer generation use the [RDKit Conformers]({{ site.baseurl }}{% link docs/cells/RDKit Conformers/index.md %}) cell.
