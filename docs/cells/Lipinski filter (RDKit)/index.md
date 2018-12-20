---
title: Lipinski filter (RDKit)
---

## CATEGORY
Molecular Properties

## SOURCE
RDKit

## DESCRIPTION
Calculate Lipinski properties for structures using RDKit

## INPUTS
A Dataset of Molecules

## OUTPUTS
A Dataset of Molecules

## OPTIONS

## ADDITIONAL INFO

The Rule of 5 filter was specified by Chris Lipinski, and is often referred to as the "Lipinski filter". It is a drug-like filter , and is described in <cite>Lipinski et al., [Adv. Drug Deliv. Rev., 23, 3 (2001)](http://www.ncbi.nlm.nih.gov/pubmed/11259830)</cite>.

The default parameters used here are:

- Molecular weight <= 500
- LogP <= 5.0
- H-bond donor count <= 5
- H-bond acceptor count <= 10

Note that this uses the strict Lipinski definitions for h-bond donor and acceptors so the numbers will differ slightly from other calculators.

Note: the default number of violations is set to one, as that is what is described in the Lipinski paper, though many implementations overlook this. This is in contrast to some of the other filters, so if comparing filters do consider this parameter carefully.

See also:

- Lipinski filter ([ChemAxon]({{ site.baseurl }}{% link docs/cells/Lipinski filter (CXN)/index.md %}))
- Ghose filter ([RDKit]({{ site.baseurl }}{% link docs/cells/Ghose filter (CXN)/index.md %}), [ChemAxon]({{ site.baseurl }}{% link docs/cells/Ghose filter (CXN)/index.md %}))
- Veber filter ([RDKit]({{ site.baseurl }}{% link docs/cells/Veber filter (RDKit)/index.md %}), [ChemAxon]({{ site.baseurl }}{% link docs/cells/Veber filter (CXN)/index.md %}))
- Rule of 3 filter ([RDKit]({{ site.baseurl }}{% link docs/cells/Rule of 3 filter (RDKit)/index.md %}, [ChemAxon]({{ site.baseurl }}{% link docs/cells/Rule of 3 filter (CXN)/index.md %})))
- REOS filter ([RDKit]({{ site.baseurl }}{% link docs/cells/REOS Filter (RDKit)/index.md %}), [ChemAxon]({{ site.baseurl }}{% link docs/cells/REOS filter (CXN)/index.md %}))
