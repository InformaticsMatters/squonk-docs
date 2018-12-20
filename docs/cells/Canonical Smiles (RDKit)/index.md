---
title: Canonical Smiles (RDKit)
---

## CATEGORY
Molecular Properties

## SOURCE
RDKit

## DESCRIPTION
Generate a canonical smiles string for structures using RDKit

## INPUTS
A Dataset of Molecules

## OUTPUTS
A Dataset of Molecules

## OPTIONS

---|---
Fragment Mode|Allows to specify how to handle molecules that have multiple fragments. Options are:<br>`WHOLE_MOLECULE`: generate a single smiles for the entire molecule<br>`BIGGEST_BY_ATOM_COUNT`: generate smiles of the fragment with the most atoms<br>`BIGGEST_BY_HEAVY_ATOM_COUNT`: generate smiles of the fragment with the most non-hydrogen atoms<br>`BIGGEST_BY_MOL_WEIGHT`: generate smiles of the fragment with highest molecular weight

## ADDITIONAL INFO
