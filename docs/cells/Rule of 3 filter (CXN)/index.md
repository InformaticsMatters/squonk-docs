---
title: Rule of 3 filter (CXN)
---

## CATEGORY
Molecular Properties

## SOURCE
ChemAxon

## DESCRIPTION
Astex rule of 3 filter for filtering fragment libraries implemented with ChemAxon

## INPUTS
A dataset of molecules

## OUTPUTS
A dataset of molecules

## OPTIONS

**Filter mode:** `INCLUDE_ALL`, `INCLUDE_PASS`, `INCLUDE_FAIL`<br>
**Number of violations:** the number of filters that are allowed to fail.<br>
**Property filters** for Molecular weight, LogP, h-bond donors, h-bond acceptors and rotatable bonds can be specified as min and/or max values. Defaults are as specified in the original paper. Leave empty if no constraint is to be applied.

## ADDITIONAL INFO

The rule of 3 filter was devised by Astex for fragment libraries as an equivalent to the Lipinski rule of 5 filter for drug like libraries, and is described in <cite>Congreve et al., [Drug Discov. Today. 8 (19): 876–7, (2003)](http://www.sciencedirect.com/science/article/pii/S1359644603028319)</cite>.

The default parameters used here are:

- Molecular weight <= 300
- LogP <= 3
- H-bond donor <= 3
- H-bond acceptor count <= 3
- Rotatable bond count <= 3

See also:

- Rule of 3 filter ([RDKit]({{ site.baseurl }}{% link docs/cells/Rule of 3 filter (RDKit)/index.md %}))
- Lipinski filter ([RDKit]({{ site.baseurl }}{% link docs/cells/Lipinski filter (RDKit)/index.md %}), [ChemAxon]({{ site.baseurl }}{% link docs/cells/Lipinski filter (CXN)/index.md %}))
