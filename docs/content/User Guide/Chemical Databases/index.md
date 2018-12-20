---
title: Chemical Databases
---

We provide a number of public datasets as searchable databases. We refer to these collectively as "Chemcentral", our house databases, much like a restaurant's house wines.

The currently available databases are:

Database | Description | Last updated
---|---|---
**emolecules_order_all**|The eMolecules "Plus" collection, downloadable from [here](https://www.emolecules.com/info/plus/download-database){:target="_blank"}. This contains approx 7 million compounds that can be purchased in small quantities e.g. for screening. <br>**IMPORTANT**: this database will soon be removed. It is out of date and its contents are in emolecules_order_sc and emolecules_order_bb.|Jul 2016
**emolecules_order_sc**|The eMolecules "Screening" collection, downloadable from [here](https://www.emolecules.com/info/plus/download-database). This contains approx 14 million compounds that can be purchased in larger quantities e.g. for performing syntheses.|July 2017
**emolecules_order_bb**|The eMolecules "Building Blocks" collection, downloadable from [here](https://www.emolecules.com/info/plus/download-database). This contains approx 1.5 million compounds that can be purchased in larger quantities e.g. for performing syntheses.|July 2017
**chembl_latest<br>chembl_23<br>chembl_22_1<br>chembl_21**|The structures from different versions of ChEMBL. chembl_latest always refers to whatever the latest version is. |July 2017
**pdb_ligand**|Ligands from the PDB, downloadable from [here](http://ligand-expo.rcsb.org/ld-download.html){:target="_blank"}.|July 2017

These datasets are made searchable using the [RDKit cartridge](http://rdkit.org/docs/Cartridge.html){:target="_blank"}. See the following cell types for performing searches:

* [Chemcentral Structure Search]({{ site.baseurl }}{% link docs/cells/Chemcentral Structure Search/index.md %})
* [Chemcentral Similarity Search]({{ site.baseurl }}{% link docs/cells/Chemcentral Similarity Search/index.md %})
* [Chemcentral Multi-Search]({{ site.baseurl }}{% link docs/cells/Chemcentral multi-search/index.md %})

