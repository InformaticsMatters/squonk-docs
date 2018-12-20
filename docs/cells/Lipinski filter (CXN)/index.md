---
title: Lipinski filter (CXN)
---

## CATEGORY
Molecular Properties

## SOURCE
ChemAxon

## DESCRIPTION
Lipinski filter for structures using ChemAxon's property calculators

## INPUTS
A Dataset of Molecules

## OUTPUTS
A Dataset of Molecules

## OPTIONS

**Filter mode:** `INCLUDE_ALL`, `INCLUDE_PASS`, `INCLUDE_FAIL`<br>
**Number of violations:** the number of filters that are allowed to fail. Default is 1 (see below)<br>
**Property filters** for Molecular weight, LogP, h-bond donors and h-bond acceptors can be specified as min and/or max values. Defaults are as specified in the original paper. Leave empty if no constraint is to be applied.

## ADDITIONAL INFO

The Rule of 5 filter was specified by Chris Lipinski, and is often referred to as the "Lipinski filter". It is a drug-like filter , and is described in <cite>Lipinski et al., [Adv. Drug Deliv. Rev., 23, 3, (2001)](http://www.ncbi.nlm.nih.gov/pubmed/11259830)</cite>.

The default parameters used here are:

- Molecular weight <= 500
- LogP <= 5
- H-bond donor count <= 5
- H-bond acceptor count <= 10

Note: this filter uses the more standard definition of h-bond donors and acceptors which differs from that found in the paper.

Note: the default number of violations is set to one, as that is what is described in the Lipinski paper, though many implementations overlook this. This is in contrast to some of the other filters, so if comparing filters do consider this parameter carefully.

See also:

- Lipinski filter ([RDKit]({{ site.baseurl }}{% link docs/cells/Lipinski filter (RDKit)/index.md %}))
- Ghose filter ([RDKit]({{ site.baseurl }}{% link docs/cells/Ghose filter (RDKit)/index.md %}), [ChemAxon]({{ site.baseurl }}{% link docs/cells/Ghose filter (CXN)/index.md %}))
- Veber filter ([RDKit]({{ site.baseurl }}{% link docs/cells/Veber filter (RDKit)/index.md %}), [ChemAxon]({{ site.baseurl }}{% link docs/cells/Veber filter (CXN)/index.md %}))
- Rule of 3 filter ([RDKit]({{ site.baseurl }}{% link docs/cells/Rule of 3 filter (RDKit)/index.md %}), [ChemAxon]({{ site.baseurl }}{% link docs/cells/Rule of 3 filter (CXN)/index.md %}))
- REOS filter ([RDKit]({{ site.baseurl }}{% link docs/cells/REOS Filter (RDKit)/index.md %}), [ChemAxon]({{ site.baseurl }}{% link docs/cells/REOS filter (CXN)/index.md %}))
