---
title: Smiles Structures
---

## CATEGORY
Input/Output

## SOURCE
Squonk

## DESCRIPTION
Read structures from smiles strings

## INPUTS
None - input is supplied as an option

## OUTPUTS
A dataset of Molecules

## OPTIONS

---|---
Smiles|Multi-line text containing the smiles and an optional name

## ADDITIONAL INFO
This cell is for allowing user to paste in a series of smiles strings as a simple way of generating some molecules. It is not designed for large numbers of structures for which the [CSV Upload]({{ site.baseurl }}{% link docs/cells/CSV Upload/index.md %}) cell is better suited.

![]({{ site.baseurl }}{% link docs/cells/Smiles Structures/SmilesStructures.png %})

### Structure format

The format of the text is very simple. One smiles string per line, with an optional name following the smiles separated by a space. If a name is present it will be set to a field named "Name". See the screenshot above as an example.
