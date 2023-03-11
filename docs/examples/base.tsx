/* eslint no-console:0 */

import React from 'react';
import type { CSSMotionProps } from 'rc-motion';

import ScmReportTable, { ScmReportBaseTableColumn } from '@core/scm-report-table';
import { makeData } from './makeData';

const Demo = () => {
    const columns: ScmReportBaseTableColumn<any>[] = [
        {
            accessorKey: 'id',
            header: 'ID',
            size: 60,
        },

        {
            accessorKey: 'firstName',
            cell: info => info.getValue(),
        },
        {
            accessorFn: row => row.lastName,
            id: 'lastName',
            cell: info => info.getValue(),
            header: () => <span>Last Name</span>,
        },
        {
            accessorKey: 'age',
            header: () => 'Age',
            size: 50,
        },
        {
            accessorKey: 'visits',
            header: () => <span>Visits</span>,
            size: 50,
        },
        {
            accessorKey: 'status',
            header: 'Status',
        },
        {
            accessorKey: 'progress',
            header: 'Profile Progress',
            size: 80,
        },
        {
            accessorKey: 'createdAt',
            header: 'Created At',
            cell: info => info.getValue<Date>().toLocaleString(),
        },
    ];

    const dataSource = makeData(10000, 1000)

    return <ScmReportTable columns={columns} dataSource={dataSource} />
}

export default Demo;