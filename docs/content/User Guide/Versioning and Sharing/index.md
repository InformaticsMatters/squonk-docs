---
title: Versioning and Sharing
---

The Squonk Computational Notebook supports versioning and sharing of notebooks. Whilst distinct features they were designed to be synergistic in nature.

## Versioning

Versioning lets you save different versions of a notebook and keep a history of your work. It's modelled loosely on a version control system that might be used in software development, but designed to be simpler and easier.

Whilst a notebook is saved automatically as you do things to it (e.g. there's no need to continually press a Save button to save your work - even small changes such as moving a cell to a new location are saved immediately and automatically), we provide the ability to create a **Savepoint** which is a snapshot of the current Editable status (layout and data) that is frozen in time. You create such a Savepoint by clicking on the "Save a Copy" button at the top of the canvas panel. When you do so you get prompted for a Name and Description for the Savepoint. Once you do this the current Notebook Editable is converted to a Savepoint and a new Editable generated from it that you continue to work on.

This is reflected in the History panel, with the Savepoints being in Gold and the Editables in green. As you create multiple Savepoints the full history is shown, with the Editables and Savepoints being derived from parent Savepoints. An example is shown below:

![]({{ site.baseurl }}{% link docs/content/User Guide/Versioning and Sharing/history.png %})

If you want to go back to a savepoint and work with it then you do so via the history panel. Find the savepoint you want to work with and double click on it and a new Editable will be created from it and opened (remember, Savepoints are not editable, so you need an Editable derived from it to work with). It an Editable already exists for the Savepoint you can double click on that to use it rather than create a new Editable. Note: the UI will be improved to make these operations more obvious.

The ID of the editable you are currently working with is shown in the title of the canvas panel.

Note that whilst Editables belong to you and cannot be seen or used by other users, Savepoints are seen and used by all users that the Notebook is shared with. Which brings us on to sharing.

## Sharing

Sharing allows a notebook to be shared with other Squonk users. Currently the sharing model is pretty basic, only allowing complete sharing (public access) or complete privacy (private access, with nobody else being able to see it), but we have plans for a much richer sharing model.

In order to share a Notebook it must first contain at least one Savepoint (as the people it's shared with do not see your Editables it only makes sense to share a notebook that contains Savepoints).

To share it locate it in the Notebooks panel (top left corner) and click on the Share icon. The display of the Notebook will change and a "Public" badge will appear next to the Notebook indicating that it is shared.

Notebooks that are shared with you (e.g. owned by somebody else and shared with you) will be present in your list of Notebooks, and the Notebook's actual owner will be shown. When you first open it you will have no Editables for the Notebook, so one will be created for you (if there are multiple Savepoints the most recently created one will be used). However you can go to the History panel and choose to work from an alternative Savepoint.

When using a notebook that is shared with you, you can create your own Savepoints. Other users of the Notebook will see your Savepoints and can use them, but as Savepoints are not editable there is no risk of other users messing up your Savepoints or editables, only their own ones!

This combination of Versioning and Sharing facilitates true collaboration amongst groups of users.

## Variables and History

If you build up a complex history as in the screen shot shown above, you may be wondering how the variables relate to the versions (remember Variables are the outputs of cells that can be read as the input to other Cells). Are the variables versioned as well as the definition of the notebook? The answer is yes. Each version of a notebook (Editable or Savepoint) can have its own version of a variable and this gets updated each time a cell is executed. If a cell is not executed in a specific version (Editable) of a Notebook then the version of that variable used in that version of the Notebook is taken from the parent of that Editable (or if that has not been executed from that parent's parent, and so up up to the top of the tree. This means that data is only saved when a cell is executed and we do not create identical copies of data for each version of the Notebook. This is illustrated below:

![]({{ site.baseurl }}{% link docs/content/User Guide/Versioning and Sharing/variable-versioing.png %})

And a note about cell execution - when you execute a cell the results REPLACE the existing results for that version of the notebook. Execute a cell ten times and you do NOT get 10 copies of the results, just one. If you really want to save multiple versions (for instance if you want to execute a cell with different options) then you need to create a new Savepoint to do so.
