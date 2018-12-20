---
title: rDock Docking
---

## CATEGORY
3D

## SOURCE
Commercial Open Source

## DESCRIPTION
Ligand docking using rDock

## INPUTS
A Dataset of Molecules with the ligands to dock

A zip file with the docking configuration (see below)

## OUTPUTS
A Dataset of Molecules with the docked poses

## OPTIONS

---|---
Number of dockings|The number of docking runs for each ligand. Each run will generate a different pose.
Top scoring poses|The number of top scoring poses to output.
Score filter|Optional score above which poses are not output. The score is an approximation to the binding energy, and will typically be a negative number like -23.1 with stronger binding having LARGER negative numbers. You need to study the scores against a particular target to get an understanding of a sensible filter to use.
Normalised score filter|Optional normalised score above which poses are not output. The normalised score is the score divided by the number of heavy atoms in the ligand, and takes the size of the ligand better into account.

## ADDITIONAL INFO

### Introduction
rDock is a molecular docking program, originally created by RiboTargets, which became Vernalis. It was open sourced in 2012. For more information on rDock look [here](http://rdock.sourceforge.net/).

### Options
Key to using this cell is providing the docking configuration as a zip file. This file must contain the following:

- receptor.mol2 - the receptor structure in mol2 format
- receptor.prm - the rDock parameters file
- receptor.as - the cavity definition prepared using the rdock tools e.g. the rbcavity program

A good way of doing this is the [Docking Validation](https://github.com/InformaticsMatters/docking-validation) project that Informatics Matters has created as an upstream project for Squonk. In particular there is an example for DHFR that you can follow that can be found [here](https://github.com/InformaticsMatters/docking-validation/tree/master/targets/dhfr/expts/vs-simple-rdock).

To generate the receptor structure you may need a third party program like MOE or Maestro, but we are hoping to provide a freely usable alternative in the future.
To generate the parameters file and the cavity definition file see the rDock documentation.
For information about Nextflow see [nextflow.io](http://nextflow.io/).
An example zip file is attached to this page.

The zip file can be uploaded using the ZipFileUpload cell.

### Performing docking

{:.ui.warning.message}
This cell uses a lot of computing power. It is currently only suitable for around 1000 dockings (inputs * number of dockings).

Docking comprises 3 key steps

1. Preparing the docking configuration. Currently that is done outside of Squonk and the files packed up into a zip file. This is a complex process to be performed by an expert. Once done the zip file is uploaded using the ZipFileUpload cell.
2. Preparing the ligands. At the minimum 3D structures are needed, but you might also want to perform other operations such as enumerating stereoisomers and tautomers, and adjusting the charge state. Some prototype cells for these operations exist (e.g. Molecule Enumerator cell), but more work is expected here.
3. Performing the docking using this cell. Its inputs are the results of steps 1 and 2. The output is the docker poses. It is expected that this is a relatively non-expert step and can be done by most users.

This is a minimal example of running a docking experiment:

![]({{ site.baseurl }}{% link docs/cells/rDock Docking/rdock.png %})

Typically you might view the output in the [NGLViewer]({{ site.baseurl }}{% link docs/cells/NGL Viewer/index.md %}) cell.

### Future plans
We plan much more for this cell, and related cells. Some examples:

- A cell that can provide the configuration details directly from a given PDB file
- More control over docking options
- Tethered docking
- Similar cells for other docking programs
