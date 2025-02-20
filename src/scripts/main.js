'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const table = document.querySelector('.field');
  const tbody = table.querySelector('tbody');

  checkTable();

  document.addEventListener('click', function (e) {
    const btn = e.target.closest('.button');

    if (!btn) {
      return;
    }

    switch (btn.classList[0]) {
      case 'append-row':
        addRow();
        break;
      case 'remove-row':
        removeRow();
        break;
      case 'append-column':
        addColumn();
        break;
      case 'remove-column':
        removeColumn();
        break;
    }
    checkTable();
  });

  function addColumn() {
    const rows = table.querySelectorAll('tr');

    rows.forEach((row) => {
      const newColumn = document.createElement('td');

      row.appendChild(newColumn);
    });
  }

  function removeColumn() {
    const rows = table.querySelectorAll('tr');

    rows.forEach((row) => {
      if (row.cells.length > 0) {
        row.deleteCell(-1);
      }
    });
  }

  function addRow() {
    const firstRow = table.querySelector('tr');

    if (firstRow) {
      const newRow = firstRow.cloneNode(true);

      tbody.appendChild(newRow);
    }
  }

  function removeRow() {
    const rows = table.querySelectorAll('tr');

    if (rows.length > 0) {
      tbody.removeChild(rows[rows.length - 1]);
    }
  }

  function checkTable() {
    const rows = table.querySelectorAll('tr').length;
    const cols = rows > 0 ? table.querySelector('tr').cells.length : 0;
    const btnAddCol = document.querySelector('.append-column');
    const btnRemCol = document.querySelector('.remove-column');
    const btnRemRow = document.querySelector('.remove-row');
    const btnAddRow = document.querySelector('.append-row');

    btnAddRow.disabled = rows >= 10;
    btnRemRow.disabled = rows <= 2;
    btnAddCol.disabled = cols >= 10;
    btnRemCol.disabled = cols <= 2;
  }
});
