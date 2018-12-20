---
title: RDKit Similarity Screening
---

## CATEGORY
Molecular Screening

## SOURCE
RDKit

## DESCRIPTION
Virtual screening using molecular similarity

## INPUTS
A Dataset of Molecules

## OUTPUTS
A Dataset of Molecules containing only those from the input that are in the specified similarity range compared to the query structure.

## OPTIONS

---|---
Query Molecule|The query structure
Similarity|Similarity threshold range. Defaults are 0.7 for the min and 1.0 for the max.
Descriptor|The fingerprint/descriptor type. Choices are maccs, morgan2, morgan3 and rdkit (default)
Metric|The similarity metric to use. Choices are asymmetric, braunblanquet, cosine, kulczynski, mcconnaughey, rogotgoldberg, russel, sokal, tanimoto (default)

## ADDITIONAL INFO
