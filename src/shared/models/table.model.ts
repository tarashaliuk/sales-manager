export interface ITableColumn {
    selector: string,
    title: string
}

export type DataItemValue = string | number

export interface IDataItem {
    [key: string]: DataItemValue;
}