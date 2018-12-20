import os
import re
import csv

IGNORE = ['index.html', 'indexer.py', 'base']
BASE_PATH = os.path.dirname(os.path.realpath(__file__))

cells_dir = sorted(filter(lambda e: e not in IGNORE, os.listdir(BASE_PATH)))

def gen_row(filename):
    with open('%s/%s/index.md' % (BASE_PATH, filename), 'r') as fh:
        markdown = fh.read()
        return map(lambda pattern: re.search(pattern, markdown, re.M).group(1), [
            r'^title: ?(.*)$',
            r'^## ?CATEGORY\n(.*)$',
            r'^## ?SOURCE\n(.*)$',
            r'^## ?DESCRIPTION\n(.*)\n'
        ])

with open('%s/_data/cells.csv' % BASE_PATH.replace('docs/cells', ''), 'w') as fh:
    writer = csv.writer(fh, delimiter=',')
    data = [['name', 'category', 'source', 'description']] + list(map(gen_row, cells_dir))
    writer.writerows(data)
