export interface Table {
    name: string
    columns: Column[]
    position?: TablePosition // Newly added
}

export type TablePosition = { 
    x: number,
    y: number
}

export type Relationship = "one-to-one" | "one-to-many" | "many-to-one" | "many-to-many" // not in used now

export interface ForeignToObj {
    name: string
    column: string
}

export interface Column {
    id: string
    name: string // name is unique
    dataType: string
    isPrimaryKey: boolean
    notNull: boolean
    foreignTo?: ForeignToObj // IF object exist, means this is a foreign key 
    relationship?: Relationship
}