---
title: History Of Changes
---

*Starting from August 2016*

---

## 16-APR-2018

### New features

1. Added ability to export datasets to CSV and TSV formats.

---

## 9-APR-2018

### Bug fixes

1. Fix pKa calculation for CNS MPO cell (now uses basic pKa not acidic pKa)

---

## 30-MAR-2018

### New features

1. [CNS MPO (CXN)]({{ site.baseurl }}{% link docs/cells/CNS MPO (CXN)/index.md %}) and [KiDS]({{ site.baseurl }}{% link docs/cells/KiDS MPO (CXN)/index.md %}) MPO cells

### Bug fixes

1. Fix for ChemAxon solubility predictor not working
1. Fix for range cell when no default value was specified

---

## 31-OCT-2017

### New features

1. [RDKit MaxMin Picker cell]({{ site.baseurl }}{% link docs/cells/RDKit MaxMin Picker/index.md %}) for a scaleable approach to picking diverse subsets
1. [Image viewer cell]({{ site.baseurl }}{% link docs/cells/Image Viewer/index.md %}) for viewing generated PNG format images
1. [TmaxCmax Simulation cell]({{ site.baseurl }}{% link docs/cells/Tmax Cmax Simulation/index.md %}) for simulating bioavailability profiles

### Improvements

1. [RDKit Butina clustering>>doc:Cell Directory.Data.RDKit Butina Clustering]] and [RDKit Diverse Subset Picker]({{ site.baseurl }}{% link docs/cells/RDKit Diverse Subset Picker/index.md %}) cells have options for how to handle multi-fragment molecules. You will need to re-create the cell to see these new options.

---

## 28-AUG-2017

### Improvements

1. [rDock docking cell]({{ site.baseurl }}{% link docs/cells/rDock Docking/index.md %}) improved, and execution parallelised.
1. ChemAxon services updated to version 17.15.0.
1. eMolecules Plus database removed - replaced with separate Screening compounds and Building Blocks databases.

---

## 26-JUL-2017

### Improvements

1. Chemical databases updated. Addition versions of ChEMBL added. Ligands from PDB added.

---

## 24-JUL-2017

### Improvements

1. Improved database connection management

---

## 15-JUL-2017

### New features

1. [MolAlignAssemblies]({{ site.baseurl }}{% link docs/cells/MolAlignAssemblies/index.md %}) cell for performing 3D overlays

---

## 9-JUL-2017

### Bug fixes

1. Fixed problem with built in services such as Dataset Merge

---

## 28-JUN-2017

### New features

1. [rDock docking]({{ site.baseurl }}{% link docs/cells/rDock Docking/index.md %}) cell for performing molecular docking
1. [ZipFileUpload]({{ site.baseurl }}{% link docs/cells/ZipFileUpload/index.md %}) cell for inporting zip files

---

## 5-JUN-2017

### New features

1. [Molecule Enumerator cell]({{ site.baseurl }}{% link docs/cells/MoleculeEnumerator/index.md %}) for handling tautomers and steroisomers
1. [Molecule standardiser cells]({{ site.baseurl }}{% link docs/cells/Molecule standardisers/index.md %})

---

## 1-JUN-2017

### New features

1. Notebook list can now be filtered. Term is applied to notebook name or owner in a case insensitive manner
1. [SMoG2016 cell]({{ site.baseurl }}{% link docs/cells/SMoG2016/index.md %}) for docking pose scoring

---

## 30-MAY-2017

### Improvements

1. [PLI scoring cell]({{ site.baseurl }}{% link docs/cells/PLI score/index.md %}) now accepts score threshold
1. [Constrained conformer generator cell]({{ site.baseurl }}{% link docs/cells/RDKit Constrained Conformers/index.md %}) now includes UUID and StructureNum fields for the source molecule

---

## MAY-2017

### New features

1. [NGLViewer cell for 3D structure visualisation]({{ site.baseurl }}{% link docs/cells/NGL Viewer/index.md %})
1. Results viewer for Scatter plot and Parallel coordinate plot cells
1. [PLI docking scoring cell]({{ site.baseurl }}{% link docs/cells/PLI score/index.md %})

---

## 13-MAR-2017

### New features

1. [Molfile upload cell]({{ site.baseurl }}{% link docs/cells/Molfile Upload/index.md %})
1. [RDKit Cluster Matrix cell]({{ site.baseurl }}{% link docs/cells/RDKit Cluster Matrix/index.md %})
1. [Dataset Enricher cell]({{ site.baseurl }}{% link docs/cells/Dataset Enricher/index.md %})

---

## 8-MAR-2017

### New features

1. [RDKit Constrained Conformers cell]({{ site.baseurl }}{% link docs/cells/RDKit Constrained Conformers/index.md %})
1. [RDKit Open3DAlign cell]({{ site.baseurl }}{% link docs/cells/RDKit Open3D Align/index.md %})

---

## 19-FEB-2017

### New features

1. [Diverse subset picker cell]({{ site.baseurl }}{% link docs/cells/RDKit Diverse Subset Picker/index.md %})
1. [XChem reaction smarts filter cell]({{ site.baseurl }}{% link docs/cells/XChem Reaction Smarts Filter/index.md %})
1. [XChem reaction maker cell]({{ site.baseurl }}{% link docs/cells/XChem Reaction Maker/index.md %})
1. [Molecules from field cell]({{ site.baseurl }}{% link docs/cells/Molecules From Field/index.md %})

---

## 7-FEB-2017

### Improvements

1. molecule display uses CDK for depiction

---

## 3-NOV-2016

### Improvements

1. Disconnect cell by dragging endpoint to empty area of canvas, bindings popup removed as no longer needed
1. Whole page not reloaded when cells are connected or disconnected

---

## 24-OCT-2016


### New features

1. Selection propagation between visual cells - selection from one cell can be used to filter or mark values in different cell
1. [Smiles reader cell]({{ site.baseurl }}{% link docs/cells/Smiles Structures/index.md %})
1. [SMARTCyp metabolism prediction cell]({{ site.baseurl }}{% link docs/cells/SMARTCyp/index.md %})
1. Atom highlighting, illustrated by SMARTCyp results


### Improvements

1. Improvement to layout of results viewer
1. Sorting of rows and columns in [heatmap cell]({{ site.baseurl }}{% link docs/cells/Heatmap/index.md %})
1. Record index can be used as axis in [scatter plot]({{ site.baseurl }}{% link docs/cells/Scatter Plot/index.md %})


---
## 25-SEP-2016

### New features

1. [LogD]({{ site.baseurl }}{% link docs/cells/LogD (CXN)/index.md %}), [LogS]({{ site.baseurl }}{% link docs/cells/LogS (CXN)/index.md %}) and [pKa]({{ site.baseurl }}{% link docs/cells/pKa (CXN)/index.md %}) calculator cells from ChemAxon.
1. New menu at top left of cells. Some actions moved from main toolbar to here.
1. Editable cell description that can be shown or hidden.
1. Main content panel can be hidden for some types of cell.

### Improvements

1. Currently focussed cell is always on top.
1. More efficient rendering of [scatter plot]({{ site.baseurl }}{% link docs/cells/Scatter Plot/index.md %}).
1. Field names in alphabetical order in cell options.
1. Small cleanup of some UI aspects.

---

## 18-SEP-2016

### New features

1. Veber filters using [RDKit]({{ site.baseurl }}{% link docs/cells/Veber filter (RDKit)/index.md %})and [ChemAxon]({{ site.baseurl }}{% link docs/cells/Veber filter (CXN)/index.md %})

### Improvements

1. Filters have a "Number of violations" option allowing filter to be tuned

---

## 13-SEP-2016

### New features

1. [Dataset sorter cell]({{ site.baseurl }}{% link docs/cells/Dataset sorter/index.md %}) - a simple way to sort data
1. Various new structure filters:
11. Lipinski calculator converted to a filter ([RDKit]({{ site.baseurl }}{% link docs/cells/Lipinski filter (RDKit)/index.md %}), [ChemAxon]({{ site.baseurl }}{% link docs/cells/Lipinski filter (CXN)/index.md %}))
11. Drug like filter behaves like other filters ([ChemAxon]({{ site.baseurl }}{% link docs/cells/Drug-like Filter (CXN)/index.md %}))
11. Ghose filter ([RDKit]({{ site.baseurl }}{% link docs/cells/Ghose filter (RDKit)/index.md %}), [ChemAxon]({{ site.baseurl }}{% link docs/cells/Ghose filter (CXN)/index.md %}))
11. Rule of 3 filter ([RDkit]({{ site.baseurl }}{% link docs/cells/Rule of 3 filter (RDKit)/index.md %}),[ChemAxon]({{ site.baseurl }}{% link docs/cells/Rule of 3 filter (CXN)/index.md %}))
11. REOS filter added using ChemAxon ([RDKit]({{ site.baseurl }}{% link docs/cells/REOS Filter (RDKit)/index.md %}) version was already present)

### Bug fixes

1. Fixed connection leak related to results viewer

### Breaking changes

1. Lipinski calculators and ChemAxon drug like filter have been modified. Old versions will still appear and can be used, but it's probably simplest to remove them and replace with new ones.

---

## 12-SEP-2016

### Improvements

1. Selected area in [scatter plot]({{ site.baseurl }}{% link docs/cells/Scatter Plot/index.md %}) is retained when cell reloads
1. Selections and axes settings in [parallel coordinate plot]({{ site.baseurl }}{% link docs/cells/Parallel Coordinate Plot/index.md %}) is retained when cell reloads
1. Some cells made wider to allow better display of text
1. History panel hidden by default
1. Cells at top of notebook to not relocate to 0,0 when reloaded
1. SDF/CSV filename added to metadata for file upload cells

---

## 06-SEP-2016

### New features

1. [Results viewer]({{ site.baseurl }}{% link docs/content/User Guide/Results Viewer/index.md %}) allowing a 'quick look' at a cell's output (including the extensive metadata), and to export those results to files.

---

## 22-AUG-2016

### New features

1. [Potions]({{ site.baseurl }}{% link docs/content/User Guide/Potions/index.md %}) - a simple language for data transforms
1. Metadata can handle arbitrary field properties, allowing better recording of history

### Bug fixes

1. Cell cannot be positioned above the top of the notebook

### Breaking changes

1. Notebooks with range fields (e.g. REOS filter cell) will not load correctly and will need to be rebuilt

---

## 06-AUG-2016

### New features

1. Range fields for cells that have min and max ranges e.g. REOS filter
1. [Parallel coordinate plot cell]({{ site.baseurl }}{% link docs/cells/Parallel Coordinate Plot/index.md %})
1. [Heatmap cell]({{ site.baseurl }}{% link docs/cells/Heatmap/index.md %})
1. Support for Python scripts

### Improvements

1. Better resizing of viz cells (but some improvements still needed)
