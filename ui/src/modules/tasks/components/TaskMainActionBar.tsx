import MainActionBar from 'modules/boards/components/MainActionBar';
import { IBoard, IPipeline } from 'modules/boards/types';
import SelectCompanies from 'modules/companies/containers/SelectCompanies';
import SelectCustomers from 'modules/customers/containers/common/SelectCustomers';
import React from 'react';
import options from '../options';
import { __ } from 'modules/common/utils';

type Props = {
  onSearch: (search: string) => void;
  onSelect: (values: string[] | string, name: string) => void;
  onDateFilterSelect: (name: string, value: string) => void;
  onClear: (name: string, values) => void;
  isFiltered: () => boolean;
  clearFilter: () => void;
  currentBoard?: IBoard;
  currentPipeline?: IPipeline;
  boards: IBoard[];
  middleContent?: () => React.ReactNode;
  history: any;
  queryParams: any;
  assignedUserIds?: string[];
  type: string;
};

const TaskMainActionBar = (props: Props) => {
  const { queryParams, onSelect } = props;

  const extraFilter = (
    <>
      <SelectCompanies
        label={__('Filter by companies')}
        name="companyIds"
        queryParams={queryParams}
        onSelect={onSelect}
      />
      <SelectCustomers
        label="w"
        name="customerIds"
        queryParams={queryParams}
        onSelect={onSelect}
      />
    </>
  );

  const extendedProps = {
    ...props,
    options,
    extraFilter,
    link: '/task/board'
  };

  return <MainActionBar {...extendedProps} />;
};

export default TaskMainActionBar;
