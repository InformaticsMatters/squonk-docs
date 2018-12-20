---
title: CNS MPO (CXN)
---

## CATEGORY
Molecular Properties

## SOURCE
ChemAxon

## DESCRIPTION
Multi-Parameter Optimisation score for drugs targeted at the Central Nervous Systmem (CNS).

## INPUTS
A dataset of molecules

## OUTPUTS
A dataset of molecules

## OPTIONS

|---|---|
|Filter mode|Whether to filter the molecules that pass or fail the filter, or to include all molecules|
|Filter range|The filter criteria if filtering. Choose values between 0 and 6.|


## ADDITIONAL INFO

The MPO approach predicts a number of molecular properties, normalises them, typically with 0 meaning bad and 1 meaning good, and sums the normalised scores. The normalisation process typically uses a "ramp" or "hump" function involving a linear change of the result score over a range of values and flat scores outside that range (or ranges). In the case of CNS MPO the properties and functions used are described below. Properties for each individual property and the resulting MPO score are added to each molecule.
The result is a decimal number between 0 and 6, with "ideal" molecules scoring 6.

This approach is taken from Wagner et al., <cite>Moving beyond Rules: The Development of a Central Nervous System Multiparameter Optimization (CNS MPO) Approach To Enable Alignment of Druglike Properties, [doi:10.1021/cn100008c](https://doi.org/10.1021/cn100008c), ACS Chem. Neurosci. (2010), 1, 435449</cite>.

The MPO CNS score is evaluated as follows:

|Molecular property|Normalising Function|
|---|---|
|LogP|if value < 3 then 1<br>ramp from 1 to 0 over range of 3 to 5<br>if value >= 5 then 0|
|LogD at pH 7.4|if value < 2 then 1<br>ramp from 1 to 0 over range of 2 to 4<br>if value >= 4 then 0|
|Molecular Weight|if value < 360 then 1<br>ramp from 1 to 0 over range of 360 to 500<br>if value >= 500 then 0|
|TPSA|if value < 20 then 0<br>ramp from 0 to 1 over range of 20 to 40<br>if value between 40 and 90 then 1<br>ramp from 1 to 0 over range of 90 to 120<br>if value >= 120 then 0|
|H-bond Donor Count|	if value = 0 then 1<br>if value = 1 then 0.75<br>if value = 2 then 0.5<br>if value = 3 then 0.25<br>if value >= 4 then 0<br>|
|Most Basic pKa|if value < 8 then 1<br>ramp from 1 to 0 over range of 8 to 10<br>if value >= 10 then 0|

The best score possible is 6. The worst score possible is 0.

Properties are calculated using the ChemAxon [property calculators](https://chemaxon.com/products/calculators-and-predictors).

Development of this cell was funded by [Sygnature discovery](https://www.sygnaturediscovery.com/).
