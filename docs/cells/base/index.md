---
title: Example Cell
---

## CATEGORY
Some category text

## SOURCE
Some source text

## DESCRIPTION
Some description text

## INPUTS
Some inputs text or a table

## OUTPUTS
Some outputs text or a table

## OPTIONS
Usually an options table. If it's very simple, text can be used with the options in **bold**.

Using the md is processed with kramdown, tables do not need to have a head.
A table without a header:

---|---
td1|td2

A table with a header:

th1|th2
---|---
td1|td2

To break lines in a table use the html <br> tag.

## ADDITIONAL INFO
Text and images to accompany the content above.

Images are inserted are inserted with this syntax:

![Alt text]({{ site.baseurl }}{% link docs/cells/3DMol.js/3dmol.png %})

If the image would be too small, you can use the `fluid` class to make it take 100% of it's parent.

Bulleted lists are created with a dash

- item
- item

Ordered lists are crated using their number and a dot:

1. Item 1
2. Item 2

Highlighting text with a box can be achived with krandowm class syntax.

{:.ui.info.message}
This text will be in a blue box

{:.ui.warning.message}
This text will be in a yellow box

Horizontal dividers can be inserted using a hr with a class

{:.ui.divider}
<hr>

<cite>Wrap a reference in cite tags</cite>

Highlight code snippets with the inline `graves` names of things from code.

To highlight code blocks use the jekyll syntax lighting syntax.
{% highlight python %}
print('This is some python code')
{% endhighlight %}
