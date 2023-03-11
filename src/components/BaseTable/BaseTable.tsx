import { ScmReportBaseTableProps } from '@/interface';
import * as React from 'react';

//3 TanStack Libraries!!!
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    Row,
    SortingState,
    useReactTable,
} from '@tanstack/react-table';

import { useVirtual } from 'react-virtual';
import { ContainerStyle, TableStyle, TdStyle, TheadStyle, ThStyle } from './styles';

export function BaseTable(props: ScmReportBaseTableProps) {
    const { dataSource = [], columns } = props;

    //we need a reference to the scrolling element for logic down below
    const tableContainerRef = React.useRef<HTMLDivElement>(null);

    const [sorting, setSorting] = React.useState<SortingState>([]);

    const columnsMemo = React.useMemo<ColumnDef<Record<string, any>>[]>(
        () => columns,
        [columns],
    );

    const table = useReactTable({
        data: dataSource,
        columns: columnsMemo,
        state: {
            sorting,
        },
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        debugTable: true,
    });

    const { rows } = table.getRowModel();

    //Virtualizing is optional, but might be necessary if we are going to potentially have hundreds or thousands of rows
    const rowVirtualizer = useVirtual({
        parentRef: tableContainerRef,
        size: rows.length,
        overscan: 20,
    });
    const { virtualItems: virtualRows, totalSize } = rowVirtualizer;
    const paddingTop = virtualRows.length > 0 ? virtualRows?.[0]?.start || 0 : 0;
    const paddingBottom =
        virtualRows.length > 0
            ? totalSize - (virtualRows?.[virtualRows.length - 1]?.end || 0)
            : 0;

    return (
        <div className="p-2">
            <div className="h-2" />
            <ContainerStyle className="container" ref={tableContainerRef}>
                <TableStyle>
                    <TheadStyle>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <ThStyle
                                            key={header.id}
                                            colSpan={header.colSpan}
                                            style={{ width: header.getSize() }}
                                        >
                                            {header.isPlaceholder ? null : (
                                                <div
                                                    {...{
                                                        className: header.column.getCanSort()
                                                            ? 'cursor-pointer select-none'
                                                            : '',
                                                        onClick: header.column.getToggleSortingHandler(),
                                                    }}
                                                >
                                                    {flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext(),
                                                    )}
                                                    {{
                                                        asc: ' 🔼',
                                                        desc: ' 🔽',
                                                    }[header.column.getIsSorted() as string] ?? null}
                                                </div>
                                            )}
                                        </ThStyle>
                                    );
                                })}
                            </tr>
                        ))}
                    </TheadStyle>
                    <tbody>
                        {paddingTop > 0 && (
                            <tr>
                                <TdStyle style={{ height: `${paddingTop}px` }} />
                            </tr>
                        )}
                        {virtualRows.map((virtualRow) => {
                            const row = rows[virtualRow.index] as Row<Record<string, any>>;
                            return (
                                <tr key={row.id}>
                                    {row.getVisibleCells().map((cell) => {
                                        return (
                                            <TdStyle key={cell.id}>
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext(),
                                                )}
                                            </TdStyle>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                        {paddingBottom > 0 && (
                            <tr>
                                <TdStyle style={{ height: `${paddingBottom}px` }} />
                            </tr>
                        )}
                    </tbody>
                </TableStyle>
            </ContainerStyle>
        </div>
    );
}
