declare module 'braft-extensions/dist/table' {

    interface ITable {
        defaultColumns?: number;
        defaultRows?: number;
        withDropdown?: boolean;
        columnResizable?: boolean;
        exportAttrString?: string;
        includeEditors: string[];
        excludeEditors?: string[];
    }

    export default function Table(props: ITable);
}