import React from 'react';
import {DataGrid} from '@mui/x-data-grid';

const DataTable = function DataTable({data = {}, loading, page}) {
  const newData = {
    rows: [],
    columns: [],
    ...data,
    loading,
    page,
  };

  return (
     <>
       <DataGrid {...newData} />
     </>
  );
};

export default DataTable;
