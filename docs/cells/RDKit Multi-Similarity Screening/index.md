---
title: RDKit Multi-Similarity Screening
---

## CATEGORY
Molecular Screening

## SOURCE
RDKit

## DESCRIPTION
Virtual screening using molecular similarity

## INPUTS
**Query**: A Dataset of Molecules that specify the query structures

**Target**: A Dataset of Molecules containing the structures to be screened

## OUTPUTS
A Dataset of Molecules containing only those from the **Target** input that are in the specified similarity range compared to any of the **Query** input structures.

## OPTIONS

---|---
Similarity|Similarity threshold range. Defaults are 0.7 for the min and 1.0 for the max.
Descriptor|The fingerprint/descriptor type. Choices are maccs, morgan2, morgan3 and rdkit (default)
Metric|The similarity metric to use. Choices are asymmetric, braunblanquet, cosine, kulczynski, mcconnaughey, rogotgoldberg, russel, sokal, tanimoto (default)

## ADDITIONAL INFO

This cell is similar to the [RDKitSimilarityScreening]({{ site.baseurl }}{% link docs/cells/RDKit Similarity Screening/index.md %}) cell except that multiple query structures can be specified and this is done using an input rather than sketching a single structure as a cell option.
