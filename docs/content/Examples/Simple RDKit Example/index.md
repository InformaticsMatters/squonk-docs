---
title: Simple RDKit Example
---

This is a  simple example showing how you can use a Docker container containing RDKit to process the structures. All it does is calculate the atom count of each molecule, but as such does provide a complete example that can be executed

|Option|Value|Comment|
|---|---|---|
|Docker image name|informaticsmatters/rdkit|This is a Docker image that contains a full RDKit distribution that we here use from Python|
|Input media type|chemical/x-mdl-sdfile|Specifies to write the input to a file named input.sdf.gz in MDL's SD file format|
|Output media type|chemical/x-mdl-sdfile|Specifies to read the output from a file named output.sdf.gz in MDL's SD file format|
|Command|See below|Python script that iterates through the molecules in the SD file, calculates the atom count of the molecule and writes an output file in SD file format.|

The script is as follows:

{% highlight python %}
#!/usr/bin/env python

import gzip
from rdkit import Chem

suppl = Chem.ForwardSDMolSupplier(gzip.open('input.sdf.gz'))

outf=gzip.open('output.sdf.gz','w+')
w = Chem.SDWriter(outf)

for mol in suppl:
    if mol is None: continue
    mol.SetIntProp("atom_count_rdkit", mol.GetNumAtoms())
    w.write(mol)

w.close()
outf.close()
{% endhighlight %}

Once executed the output should have the number of atoms in the molecule present as the `atom_count_rdkit` property.
