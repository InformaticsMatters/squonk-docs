---
title: Notebook Components
---

This page provides a basic guide to the components of the Squonk Computational Notebook.

## Notebooks Panel

The Notebooks Panel appears in the top left of the screen and lists the Notebooks you own and those that have been shared with you. Selecting a notebook opens it in the main Notebook Canvas panel.

You can create new notebooks, delete unwanted ones and change the details of the notebook, including its sharing status.

## Cell Palette

The Cell Palette appears in the bottom left of the screen and lists all the Cells that you have access to. This list will potentially be very large, so you can filter the contents based on tags that are associated with each cell. Type a few letters for a filter into the text box and hit the Enter key and only cells matching those tags will be shown. The tag matching is done on the basis of matching what you type against the cell tags using "starts with" logic in a case insensitive manner.

We try to provide a reasonable set of tags for all cells. As an example consider the RDKit LogP calculator cell has the following tags:

logp partitioning molecularproperties rdkit

Hence if you type "logp" (quotes NOT needed) into the filter you will see this cell ( as cell as any others that have a tag starting with "logp"). Similarly if you typed "part" you would find this cell.

You can use multiple terms by separating with a space so if your typed "logp rdk" you would likely only find cells based on RDKit that deal with LogP.

To see what cells currently exist look in the [Cell Directory]({{ site.baseurl }}{% link docs/cells/index.html %})

## Notebook Canvas

This is the main area of the screen where you build and execute your workflows. You add cells to the canvas by dragging them from the Cell Palette, and you connect the outputs of one cell to the inputs of another. These inputs and outputs are labeled if you move the cursor over them so that you can distinguish them if there are multiple inputs or outputs.

You connect an output to an input by dragging from the output of the provider cell to the input of the consumer cell. Once done a connector is shown. As you move the cells the connectors rearrange to optimise the layout.

The Cell itself has a title bar that shows the cell name, and a set of icons on the right hand side that allow you to perform operations on the cell. Not all cells have all the operations.

<!-- TODO: Removed icon column -->

Function|Description
---|---
Advanced Options|Allows additional options to be set for cells that have a complex set of options that are not displayed in the standard cell UI, or provides a mechanism to specify options for cells whose UI does not support setting options (mainly visualisation cells where you want the cell to display your data, not the options)
Connectors | Opens a dialog that shows you details of the connections (inputs). The key use is to remove a connection if it has been incorrectly set.
Execute | Execute the cell, reading the inputs and generating the outputs. During execution the icon changes to indicate the execution is in process. If execution causes an error the cell turns red indicating this.
Expand | Show the expanded view of this cell, allowing additional features such as the [Results Viewer]({{ site.baseurl }}{% link docs/content/User Guide/Results Viewer/index.md %}). This opens in a full-screen modal window.
Delete | Disconnect the cell and remove it from the Notebook.

## History Panel

This is where you see the history of the different versions of your Notebook. Full details can be found in [Versioning and Sharing]({{ site.baseurl }}{% link docs/content/User Guide/Versioning and Sharing/index.md %}). For simple cases you may not need to use this so you can dock it to the side and free up the screenspace.
