---
title: RDKit Butina Clustering
---

## CATEGORY
Clustering

## SOURCE
RDKit

## DESCRIPTION
Cluster molecules using the Butina algorithm from RDKit.

## INPUTS
A Dataset of Molecules

## OUTPUTS
A Dataset of Molecules

## OPTIONS

---|---|---
Threshold|Similarity score cuttoff between 0 and 1 (1 means identical). Default is 0.7|Number between 0 and 1
Fragment method|Strategy for selecting the largest fragment for multi component molecules|hac or mw
Output fragment|If multiple fragments then output the biggest, otherwise output the whole molecule|true or false
Descriptor|Fingerprint type. Options are: maccs, morgan2, morgan3, rdkit (default)|rdkit (default), maccs, morgan2, morgan3
Metric|Similarity comparison metric.|asymmetric, braunblanquet, cosine, dice, kulczynski, mcconnaughey, rogotgoldberg, russel, sokal, tanimoto (default)

## ADDITIONAL INFO

For more info on Butina clustering in RDKit see [here](http://rdkit.org/docs/api/toc-rdkit.ML.Cluster.Butina-module.html).

Note: this methods builds a full distance matrix for the distances between the molecules so does not scale to large datasets. 1000 structures is OK, 10,000 is not.

To pick a diverse subset using this approach try the [RDKit Diverse Subset Picker]({{ site.baseurl }}{% link docs/cells/RDKit Diverse Subset Picker/index.md %}) cell.
