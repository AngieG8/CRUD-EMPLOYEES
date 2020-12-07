
import { forwardRef } from 'react';
import {
  IoIosAdd, IoIosArrowRoundDown, IoIosCheckmarkCircleOutline, IoIosArrowRoundBack,
  IoIosArrowForward, IoIosArrowRoundForward, IoIosClose,
  IoIosCloseCircleOutline, IoMdTrash, IoMdCreate, IoIosFunnel,
  IoIosReturnLeft, IoIosReturnRight, IoIosRemove, IoIosSave, IoIosSearch, IoIosPause,
} from 'react-icons/io';

import useStyles from './table.styles';

const TableIcons = () => {
  const classes = useStyles();

  return {
    Add: forwardRef((iconProps, ref) => <IoIosAdd ref={ref} {...iconProps} />),
    Check: forwardRef((iconProps, ref) => (
      <div ref={ref}>
        <IoIosCheckmarkCircleOutline
          className={classes.check}
          {...iconProps}
        />
      </div>
    )),
    Clear: forwardRef((iconProps, ref) => (
      <div ref={ref}>
        <IoIosCloseCircleOutline
          className={classes.close}
          {...iconProps}
        />
      </div>
    )),
    Delete: forwardRef((iconProps, ref) => (
      <div ref={ref}>
        <IoMdTrash
          {...iconProps}
        />
      </div>
    )),
    DetailPanel: forwardRef((iconProps, ref) => (
      <div ref={ref}>
        <IoIosArrowForward
          {...iconProps}
        />
      </div>
    )),
    Edit: forwardRef((iconProps, ref) => (
      <div ref={ref}>
        <IoMdCreate
          {...iconProps}
        />
      </div>
    )),
    Export: forwardRef((iconProps, ref) => (
      <div ref={ref}>
        <IoIosSave
          {...iconProps}
        />
      </div>
    )),
    Filter: forwardRef((iconProps, ref) => (
      <div ref={ref}>
        <IoIosFunnel
          {...iconProps}
        />
      </div>
    )),
    FirstPage: forwardRef((iconProps, ref) => (
      <div ref={ref}>
        <IoIosReturnLeft
          {...iconProps}
        />
      </div>
    )),
    LastPage: forwardRef((iconProps, ref) => (
      <div ref={ref}>
        <IoIosReturnRight
          {...iconProps}
        />
      </div>
    )),
    NextPage: forwardRef((iconProps, ref) => (
      <div ref={ref}>
        <IoIosArrowRoundForward
          {...iconProps}
        />
      </div>
    )),
    PreviousPage: forwardRef((iconProps, ref) => (
      <div ref={ref}>
        <IoIosArrowRoundBack
          {...iconProps}
        />
      </div>
    )),
    ResetSearch: forwardRef((iconProps, ref) => (
      <div ref={ref}>
        <IoIosClose
          {...iconProps}
        />
      </div>
    )),
    Search: forwardRef((iconProps, ref) => (
      <div ref={ref}>
        <IoIosSearch
          {...iconProps}
        />
      </div>
    )),
    SortArrow: forwardRef((iconProps, ref) => (
      <div ref={ref}>
        <IoIosArrowRoundDown
          {...iconProps}
        />
      </div>
    )),
    ThirdStateCheck: forwardRef((iconProps, ref) => (
      <div ref={ref}>
        <IoIosRemove
          {...iconProps}
        />
      </div>
    )),
    ViewColumn: forwardRef((iconProps, ref) => (
      <div ref={ref}>
        <IoIosPause
          {...iconProps}
        />
      </div>
    )),
  };
};

export default TableIcons;
