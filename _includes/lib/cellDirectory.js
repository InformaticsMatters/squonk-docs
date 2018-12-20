var filtersConfig = {
  base_path: '../../lib/tablefilter/',
  auto_filter: {
    delay: 500
  },
  paging: true,
  responsive: true,
  no_results_message: true,
  themes: [{
    name: 'transparent'
  }],
  col_1: 'select',
  col_2: 'select',
  col_3: 'none',
};

/* Interval to wait for the table filter to load async */
const interval = setInterval(() => {
  if (typeof(TableFilter) == 'function') {
    var tf = new TableFilter('filterTable', filtersConfig);
    tf.init();
    clearInterval(interval);
  }
}, 250);
