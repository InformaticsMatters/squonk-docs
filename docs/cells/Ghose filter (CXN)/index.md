---
title: Ghose filter (CXN)
---

## CATEGORY
Molecular Properties

## SOURCE
ChemAxon

## DESCRIPTION
Ghose drug like filter implemented with ChemAxon's property calculators

## INPUTS
Dataset of Molecules

## OUTPUTS
Dataset of Molecules

## OPTIONS

**Filter mode:** `INCLUDE_ALL`, `INCLUDE_PASS`, `INCLUDE_FAIL`<br>
**Number of violations:** the number of filters that are allowed to fail<br>
**Property filters** for Molecular weight, LogP, atom count and molar refractivity can be specified as min and/or max values. Defaults are as specified in the original paper. Leave empty if no constraint is to be applied.

## ADDITIONAL INFO

The Ghose filter is a drug-like filter described in Ghose, AK.; Viswanadhan, VN.; Wendoloski JJ.: A knowledge-based approach in designing combinatorial or medicinal chemistry libraries for drug discovery. 1. A qualitative and quantitative characterization of known drug databases., <cite>[J. Comb. Chem., 1, 55, (1999)](http://pubs.acs.org/doi/abs/10.1021/cc9800071)</cite>.

- Molecular weight between 160 and 480
- LogP between -0.4 and +5.6
- Atom count between 20 and 70
- Molar refractivity between 40 and 130

See also:

- Ghose filter ([RDKit]({{ site.baseurl }}{% link docs/cells/Ghose filter (RDKit)/index.md %}))
- Lipinski filter ([RDKit]({{ site.baseurl }}{% link docs/cells/Lipinski filter (RDKit)/index.md %}), [ChemAxon]({{ site.baseurl }}{% link docs/cells/Lipinski filter (CXN)/index.md %}))
- Drug like filter ([ChemAxon]({{ site.baseurl }}{% link docs/cells/Drug-like Filter (CXN)/index.md %}))
- Rule of 3 filter ([RDKit]({{ site.baseurl }}{% link docs/cells/Rule of 3 filter (RDKit)/index.md %}), [ChemAxon]({{ site.baseurl }}{% link docs/cells/Rule of 3 filter (CXN)/index.md %}))
