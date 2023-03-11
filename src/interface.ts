import { ColumnDef } from "@tanstack/react-table";


export interface ScmReportTableProps extends ScmReportBaseTableProps {

}


export type ScmReportBaseTableColumn<TData = Record<string, any>> = ColumnDef<TData, any>

export interface ScmReportBaseTableProps<TData = Record<string, any>> {
  columns?: ScmReportBaseTableColumn<TData>[];
  dataSource?: any[];
}

