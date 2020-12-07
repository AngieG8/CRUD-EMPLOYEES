/* eslint-disable react/jsx-props-no-spreading */
import { useState, forwardRef, createRef } from 'react';
import PropTypes from 'prop-types';
import MaterialTable, { MTableToolbar } from 'material-table';
import { Box, IconButton } from '@material-ui/core';
import { FiFilter } from 'react-icons/fi';
import { IoIosFunnel } from 'react-icons/io';
import TableIcons from './Icons';

import useStyles from './table.styles';

const Table = (props) => {
  const classes = useStyles();
  const materialTableRef = createRef();
  const tableIcons = TableIcons();
  const {
    title, data, columns, events, options, customIcons, onClick,
  } = props;
  const [showFilters, setShowFilters] = useState(false);
  const [currentData, setData] = useState(data);

  const tableOptions = {
    ...options,
    toolbarButtonAlignment: 'left',
    searchFieldAlignment: 'right',
    filtering: showFilters,
    actionsColumnIndex: -1,
    addRowPosition: 'first',
    search: currentData.length > 0,
  };

  const overrideIcons = () => {
    customIcons
    && Object.keys(customIcons).forEach((icon) => {
      tableIcons[icon] = forwardRef(() => customIcons[icon]);
    });
  };

  const getEditableEvents = () => {
    const tableEvents = {};
    if (events) {
      const { createRow, updateRow, deleteRow } = events;
      if (createRow) {
        tableEvents.onRowAdd = (newData) => new Promise((resolve) => {
          setTimeout(() => {
            setData([...data, newData]);
            resolve();
            createRow(newData);
          }, 1000);
        });
      }
      if (updateRow) {
        tableEvents.onRowUpdate = (newData, oldData) => new Promise((resolve) => {
          setTimeout(() => {
            const dataUpdate = [...currentData];
            const index = oldData.tableData.id;
            dataUpdate[index] = newData;
            setData([...dataUpdate]);
            resolve();
            updateRow(newData);
          }, 1000);
        });
      }
      if (deleteRow) {
        tableEvents.onRowDelete = (oldData) => new Promise((resolve) => {
          setTimeout(() => {
            const dataDelete = [...currentData];
            const index = oldData.tableData.id;
            dataDelete.splice(index, 1);
            setData([...dataDelete]);
            resolve();
            deleteRow(oldData);
          }, 1000);
        });
      }
    }
    return tableEvents;
  };

  const renderToolBar = (toolBarProps) => (
    <Box className={classes.toolbarContent}>
      <Box className={classes.toolbar}>
        <MTableToolbar {...toolBarProps} />
      </Box>
      <Box className={classes.filter}>
        <IconButton
          color="default"
          aria-label="Show filters"
          component="span"
          onClick={() => setShowFilters(!showFilters)}
        >
          {showFilters ? <IoIosFunnel /> : <FiFilter />}
        </IconButton>
      </Box>
    </Box>
  );

  return (
    <Box className={classes.root}>
      {overrideIcons()}
      <MaterialTable
        title={title}
        columns={columns}
        data={currentData}
        options={tableOptions}
        onRowClick={onClick}
        tableRef={materialTableRef}
        icons={tableIcons}
        editable={getEditableEvents()}
        localization={{
          header: {
            actions: '',
          },
        }}
        components={{
          Toolbar: renderToolBar,
        }}
      />
    </Box>
  );
};

Table.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  columns: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  customIcons: PropTypes.shape(),
  onClick: PropTypes.func,
  events: PropTypes.shape({
    createRow: PropTypes.func,
    updateRow: PropTypes.func,
    deleteRow: PropTypes.func,
  }),
  options: PropTypes.shape(),
};

Table.defaultProps = {
  title: '',
  customIcons: null,
  onClick: undefined,
  events: null,
  options: {
    draggable: false,
    filtering: false,
    search: true,
    fixedColumns: {
      left: 0,
      right: 0,
    },
  },
};

export default Table;
