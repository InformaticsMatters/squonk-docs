---
title: REOS Filter (RDKit)
---

## CATEGORY
Molecular Properties

## SOURCE
RDKit

## DESCRIPTION
Rapid Elimination Of Swill filter - a drug-like structure filter using RDKit

## INPUTS
A Dataset of Molecules

## OUTPUTS
A Dataset of Molecules

## OPTIONS
**Filter mode**: `INCLUDE_ALL`, `INCLUDE_PASS`, `INCLUDE_FAIL`<br>
**Number of violations**: the number of filters that are allowed to fail.<br>
**Property filters** for Molecular weight, LogP, h-bond donors, h-bond acceptors, formal charge, rotatable bonds and heavy atom count can be specified as min and/or max values. Defaults are as specified in the original paper. Leave empty if no constraint is to be applied.

## ADDITIONAL INFO

The REOS filter is a filter designed to filter out unuseful compounds from HTS screening results, and is described in <cite>[Waters & Namchuk, Nature Reviews Drug Discovery 2, 259-266 (2003)](http://www.nature.com/nrd/journal/v2/n4/full/nrd1063.html)</cite>.

The default parameters used here are:

- Molecular weight between 200 and 500
- LogP between -5.0 and +5.0
- H-bond donor count between 0 and 5
- H-bond acceptor count between 0 and 10
- Formal charge between -2 and +2
- Rotatable bond count between 0 and 8
- Heavy atom count between 15 and 50

See also:

- REOS filter ([ChemAxon]({{ site.baseurl }}{% link docs/cells/REOS filter (CXN)/index.md %}))
- Lipinski filter ([RDKit]({{ site.baseurl }}{% link docs/cells/Lipinski filter (RDKit)/index.md %}), [ChemAxon]({{ site.baseurl }}{% link docs/cells/Lipinski filter (CXN)/index.md %}))
- Drug like filter ([ChemAxon]({{ site.baseurl }}{% link docs/cells/Drug-like Filter (CXN)/index.md %}))
- Ghose filter ([RDKit]({{ site.baseurl }}{% link docs/cells/Ghose filter (RDKit)/index.md %}), [ChemAxon]({{ site.baseurl }}{% link docs/cells/Ghose filter (CXN)/index.md %}))
- Rule of 3 filter ([RDKit]({{ site.baseurl }}{% link docs/cells/Rule of 3 filter (RDKit)/index.md %}), [ChemAxon]({{ site.baseurl }}{% link docs/cells/Rule of 3 filter (CXN)/index.md %}))
