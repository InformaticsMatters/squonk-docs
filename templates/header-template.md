{% comment %}

This project uses semantic ui (https://semantic-ui.com/) for styling.
See their docs for how to change column widths, text alignment etc.

Text inside of {% %} are liquid syntax from the jekyll system.
Text inside of {{ }} represents accessing variables.
The _config.yml file defines {{ site. }} variables.

{% endcomment %}
<div class="four wide column">
  <!-- onerror to provide fallback for browsers that don't suppoer vector graphics. If replaced by a .png or .jpg onerror can be removed. -->
  <img
    src="{% link assets/Squonk_Vector.svg %}"
    onerror="this.src='{% link assets/Squonk.png %}'"
    alt="Squonk logo">
</div>
<div class="right floated ten wide column">
  <h1>{{ site.title }}</h1>
</div>
