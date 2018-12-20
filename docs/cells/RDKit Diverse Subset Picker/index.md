---
title: RDKit Diverse Subset Picker
---

## CATEGORY
Clustering

## SOURCE
RDKit

## DESCRIPTION
Cluster molecules using the Butina algorithm from RDKit and then pick a diverse subset of the molecules

## INPUTS
A Dataset of Molecules

## OUTPUTS
A Dataset of Molecules

## OPTIONS

---|---|---
Threshold|Similarity score cuttoff (1 means identical). Default is 0.7|Number between 0 and 1
Diversity |Similarity threshold to use to identify structures that are too similar. Default is 0.9|Number between 0 and 1
Count|The number of molecules to try to select|Positive integer
Field to Optimise|The name of the field whose values are used for the optimisation (see below)|Name of field from pick list
Maximum field values|Whether to pick subset that maximises the values of the Field to Optimise (if not checked then values are minimised)|true or false
Fragment method|If multiple fragments then output the biggest, otherwise output the whole molecule|If multiple fragments then output the biggest, otherwise output the whole molecule
Output fragment|If multiple fragments then output the biggest, otherwise output the whole molecule|true or false
Descriptor|Fingerprint type|rdkit (default), maccs, morgan2, morgan3
Metric|Similarity comparison metric|asymmetric, braunblanquet, cosine, dice, kulczynski, mcconnaughey, rogotgoldberg, russel, sokal, tanimoto (default)

## ADDITIONAL INFO

This cell is an extension of the [RDKit Butina Clustering]({{ site.baseurl }}{% link docs/cells/RDKit Butina Clustering/index.md %}) cell in that it clusters molecules and then allows to select a diverse subset that is optimised according to some objective function.

Note: this methods builds a full distance matrix for the distances between the molecules so does not scale to large datasets. 1000 structures is OK, 10,000 is not. For a more scaleable approach to picking a diverse subset look at the [RDKit MaxMin Picker]({{ site.baseurl }}{% link docs/cells/RDKit MaxMin Picker/index.md %}) cell.

For clustering options see the RDKit Butina Clustering cell.

The diverse subset is generated as follows:

1. User specified a number of molecules to try to pick (the **Count** parameter)
2. User specifies a numeric field to use for the optimisation (the **Field to Optimise** parameter).
3. User specified whether to maximise of minimise the values from this file (the **Maximise field values** parameter). A typical example might be to minimise the purchase cost of a set of molecules by picking a subset that is diverse and minimises the cost. To do so user would pick a field that specified the purchase cost of each molecule and that this value must be minimised (the **Maximise field values** options is not checked).
4. Each cluster is visited in turn and the molecule in that cluster with the maximum/minimum value of the specified field is selected (if a molecule does not have a a value for that field it will be excluded from consideration).
5. That molecule is compared for similarity to those already picked from that cluster (using the same descriptor and metric that was used for the clustering). If it has a similarity greater than the **Diversity** parameter to ANY of the already picked molecules for that cluster it is discarded and the next best molecule from the cluster considered instead. Once a molecule is found that is sufficiently diverse it is added to those picked from that cluster, and we move on to the next cluster (starting again at step 4).
6. The process continues until the specified number of molecules have been picked or all molecule shave been picked or discarded. There is no guarantee that **Count** molecules will be picked, but no more than **Count** will be picked.
