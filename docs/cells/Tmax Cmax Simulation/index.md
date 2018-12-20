---
title: Tmax Cmax Simulation
---

## CATEGORY
DMPK

## SOURCE
Other

## DESCRIPTION
Simulator for Pharmacokinetic profiling of a compound

## INPUTS
None

## OUTPUTS
PNG format image of the PK profiles

## OPTIONS

---|---|---
Half life|The half life in hours|Positive decimal number
Absorption|Absorption half like in hours|Positive decimal number
Dose|Compound does in mg|Positive decimal number
AUC|Area under curve in mg/L/hr|Positive decimal number
Time|Time of simulation in hours|Positive decimal number

## ADDITIONAL INFO
This cell simulates the bioavailability of a compound based on some basic PK parameters.

This is based on original code donated by Amit Kamur Garg from [Sygnature Discovery](https://www.sygnaturediscovery.com/).

The typical use is to view the output in the [Image Viewer]({{ site.baseurl }}{% link docs/cells/Image Viewer/index.md %}) cell as shown below:

![]({{ site.baseurl }}{% link docs/cells/Tmax Cmax Simulation/pksim.png %})
