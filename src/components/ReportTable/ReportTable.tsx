import { BaseTable } from "../BaseTable/BaseTable"
import * as React from 'react';
import { ScmReportTableProps } from "@/interface";
export const ScmReportTable: React.FC<ScmReportTableProps> = ({ ...rest }: ScmReportTableProps) => {
    return <div>
        <BaseTable {...rest} />
    </div>
}