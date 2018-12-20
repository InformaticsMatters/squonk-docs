---
title: Veber filter (RDKit)
---

## CATEGORY
Molecular Properties

## SOURCE
RDKit

## DESCRIPTION
Veber filter for orally active drugs implemented using RDKit

## INPUTS
Dataset of Molecules

## OUTPUTS
Dataset of Molecules

## OPTIONS

**Filter mode:** `INCLUDE_ALL`, `INCLUDE_PASS`, `INCLUDE_FAIL`<br>
**Number of violations**: the number of filters that are allowed to fail<br>
**Property filters** for rotatable bonds and polar surface area can be specified as min and/or max values. Defaults are as specified in the original paper. Leave empty if no constraint is to be applied.

## ADDITIONAL INFO

The Veber filter is a rule of thumb filter for orally active drugs described in <cite>Veber et. al., [J Med Chem. 2002; 45(12): 2615-23](https://www.ncbi.nlm.nih.gov/pubmed/12036371)</cite>.

The default parameters used here are:

- Rotatable bonds <= 10
- Topological polar surface area <= 140

See also:

- Veber filter ([ChemAxon]({{ site.baseurl }}{% link docs/cells/Veber filter (CXN)/index.md %}))
- Ghose filter ([RDKit]({{ site.baseurl }}{% link docs/cells/Ghose filter (RDKit)/index.md %}), [ChemAxon]({{ site.baseurl }}{% link docs/cells/Ghose filter (CXN)/index.md %}))
- Lipinski filter ([RDKit]({{ site.baseurl }}{% link docs/cells/Lipinski filter (RDKit)/index.md %}), [ChemAxon]({{ site.baseurl }}{% link docs/cells/Lipinski filter (CXN)/index.md %}))
- Drug like filter ([ChemAxon]({{ site.baseurl }}{% link docs/cells/Drug-like Filter (CXN)/index.md %}))
- Rule of 3 filter ([RDKit]({{ site.baseurl }}{% link docs/cells/Rule of 3 filter (RDKit)/index.md %}), [ChemAxon]({{ site.baseurl }}{% link docs/cells/Rule of 3 filter (CXN)/index.md %}))
