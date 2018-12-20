---
title: Untrusted Groovy Script
---

## CATEGORY
Programming

## SOURCE
Squonk

## DESCRIPTION
Process a dataset using a Groovy script. The script is not trusted and executed in its own safe sandbox.

## INPUTS
A Dataset of molecules

## OUTPUTS
A Dataset of molecules

## OPTIONS

---|---
Script|Groovy script to execute that processes the dataset

## ADDITIONAL INFO

Being able to execute programming code greatly increase the flexibility and functionality of the Squonk Computational Notebook. However this is potentially un-safe as the user is in control of what code gets executed, and this could potentially contain malicious code which could compromise the system of any user.

To accommodate this we execute the code in a temporary Docker container, which provides a secure sandbox where the code can execute. The container is created purely for the purpose of executing the code and is destroyed after it completes. The code only has access to the data it needs for its execution, and cannot access other parts of the system. At worse malicious code could impact the temporary container it is running it.

This specific cell allows for execution of a Groovy script. Groovy is like an extension of Java, the main language used in the Squonk Computational Notebook. As such it is probably the best general choice, though we also plan to provide similar execution environment for other types of programming languages such as Python and R.

The Docker container that is used to execute the Groovy script is adapted from the [webratio/groovy](https://hub.docker.com/r/webratio/groovy/) image from Docker hub. It allows additional libraries to be pulled in from Maven Central using Groovy's "Grab" functions (see below for details). In addition the core Squonk libraries are also accessible from a local Maven repository. This allows a wide range of additional functionality to be pulled in from external sources.

### Examples:

1. **Simplest example that processes a dataset, allowing the molecule's properties to be updated:**

{% highlight groovy %}
@GrabResolver(name='local', root='file:///var/maven_repo/')
@Grab(group='org.squonk.components', module='common', version='0.2-SNAPSHOT')
import org.squonk.types.MoleculeObject
import static org.squonk.util.MoleculeObjectUtils.*
import java.util.function.Consumer

processDataset('/source/input','/source/output') { MoleculeObject mo ->
    mo.putValue("hello", "world")
} as Consumer
{% endhighlight %}

An explanation:

1. `@GrabResolver` line: makes the local Maven repository with the core Squonk libraries available. This is not required, but these libraries can be very useful, and are used here.
2. `@Grab` line: grabs the "common" Squonk library available.
3. `import` lines: imports the necessary classes, including a static import of the methods from the `MoleculeObjectUtils` class which provides some of the helper methods that are used.
4. `processDataset` method: specifies the locations that the input is found and the output will be written to. These are inbuilt conventions that must be followed
5. `mo.putValue()` line: this where the actual processing takes place. You would replace this line with something more useful.
6. as Consumer: makes groovy cast the closure to a Consumer class which is what is needed by the `processDatset()` method.

In most cases you only need to replace the `mo.putValue()` lien with something that meets your neeeds.

2. **Slightly more complex example that allows any operation on the Stream of MoleculeObjects to be performed, allowing additional operations like filtering to be performed:**

{% highlight groovy %}
@GrabResolver(name='local', root='file:///var/maven_repo/')
@Grab(group='org.squonk.components', module='common', version='0.2-SNAPSHOT')
import org.squonk.types.MoleculeObject
import static org.squonk.util.MoleculeObjectUtils.*
import java.util.stream.Stream
import java.util.function.Function

processDatasetStream('/source/input','/source/output') { Stream<MoleculeObject> stream ->
    return stream.peek() { MoleculeObject mo ->
        mo.putValue("hello", "world")
    }
} as Function
{% endhighlight %}

This is very similar to the previous example, but as you will see you get access to the Stream<MoleculeObject> so can perfom operations like map() and filter().

The closure needs to be case to a Function.

3. **More verbose example providing further flexibility**

{% highlight groovy %}
@GrabResolver(name='local', root='file:///var/maven_repo/')
@Grab(group='org.squonk.components', module='common', version='0.2-SNAPSHOT')
import org.squonk.dataset.Dataset
import org.squonk.types.MoleculeObject
import static org.squonk.util.MoleculeObjectUtils.*
import java.util.stream.Stream

Dataset dataset = readDatasetFromFiles('/source/input')
Stream<MoleculeObject> stream = dataset.stream.peek() { MoleculeObject mo ->
    mo.putValue("hello", "world")
}
dataset.replaceStream(stream)
writeDatasetToFiles(dataset, '/source/output', true)
{% endhighlight %}

Similar to above but in this case we are handling the reading and writing. Usually there is no need for this.

4. **As above, but using "lazy" Groovy-style typing rather that strong Java-style typing**

{% highlight groovy %}
@GrabResolver(name='local', root='file:///var/maven_repo/')
@Grab(group='org.squonk.components', module='common', version='0.2-SNAPSHOT')
import static org.squonk.util.MoleculeObjectUtils.*

def dataset = readDatasetFromFiles('/source/input')
def stream = dataset.stream.peek() { mo ->
    mo.putValue("hello", "world")
}
dataset.replaceStream(stream)
writeDatasetToFiles(dataset, '/source/output', true)
{% endhighlight %}

As above but need for fewer imports.

{:.ui.info.message}
Javadocs for the core Squonk libraries are not yet available, but will be published at some stage.
