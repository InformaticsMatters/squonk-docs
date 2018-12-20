---
title: KiDS MPO (CXN)
---

## CATEGORY
Molecular Properties

## SOURCE
ChemAxon

## DESCRIPTION
Multi-Parameter Optimisation score for kinase drugs.

## INPUTS
A dataset of molecules

## OUTPUTS
A dataset of molecules

## OPTIONS

---|---
Filter mode|Whether to filter the molecules that pass or fail the filter, or to include all molecules
Filter range|The filter criteria if filtering. Choose values between 0 and 6.

## ADDITIONAL INFO
The MPO approach predicts a number of molecular properties, normalises them, typically with 0 meaning bad and 1 meaning good, and sums the normalised scores. The normalisation process typically uses a "ramp" or "hump" function involving a linear change of the result score over a range of values and flat scores outside that range (or ranges). In the case of KiDS MPO the properties and functions used are described below. Properties for each individual property and the resulting MPO score are added to each molecule.
The result is a decimal number between 0 and 6, with "ideal" molecules scoring 6.

This approach for predicting kinase drugs is taken from Bajusz et al., Property-based characterization of kinase-likeligand space for library design and virtualscreening, <cite>[doi:10.1039/c5md00253b](https://doi.org/10.1039/c5md00253b), Med. Chem. Commun.,2015, 6,1898</cite>.

The KiDS CNS score is evaluated as follows:

Molecular property|Normalising Function
---|---
TPSA|if value < 64.63 then 0<br>ramp from 0 to 1 over range of 64.63 to 75.85<br>if value between 75.85 and 92.40 then 1<br>ramp from 1 to 0 over range of 92.40 to 138.3<br>if value >= 120 then 0
Rotatable Bond Count|if value = 0 or 1 then 0.2<br>if value = 2 or 3 then 1<br>if value = 4 or 3 then 0.5<br>if value >= 5 then 0
Nitrogen Atom Count|if value <= 2 then 0<br>if value = 3 then 0.5<br>if value = 4 or 5 then 1<br>if value = 6, 7 or 8 then 0.2<br>if value > 8 then 0
Oxygen Atom Count|if value = 0 then 0.2<br>if value = 1 then 1<br>if value = 3 then 0.5<br>if value > 3 then 0
H-bond Donor Count|if value = 0 or 1 then 0<br>if value = 2 then 0.5<br>if value = 3 then 1<br>if value = 4 then 0.2<br>if value > 4 value = 0
Aromatic Ring Count|if value = 0 or 1 then 0<br>if value = 2 then 0.5<br>if value = 3 then 1<br>if value = 4 then 0.2<br>if value > 4 then 0

The best score possible is 6. The worst score possible is 0.

Properties are calculated using the ChemAxon [property calculators](https://chemaxon.com/products/calculators-and-predictors).

Development of this cell was funded by [Sygnature discovery](https://www.sygnaturediscovery.com/).
