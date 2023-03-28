
import { useState, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Button } from 'primereact/button';
import { Column } from "primereact/column";
import { FilterMatchMode } from "primereact/api";
import { InputText } from "primereact/inputtext";


function TableC(props) {


    const dtRef = useRef(null);

    const { columns, posts, refresh, filter, pagination } = props


    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS }
    })


    function reset() {
        if (dtRef.current) {
            dtRef.current.reset();
        }
    }

    return (
        <div className='mt-4'>
            {
                refresh && <div className='text-right mb-3'>
                    <Button label="Refresh" onClick={reset}/>
                </div>
            }

            {
                filter &&
                <div className="text-right mb-3">
                    <span className="p-input-icon-left">
                        <InputText placeholder="Search"
                            onInput={(e) => setFilters({
                                global: { value: e.target.value, matchMode: FilterMatchMode.CONTAINS }
                            })} />
                        <i className="pi pi-search" />
                    </span>
                </div>
            }

            <DataTable
                value={posts}
                responsiveLayout="stack" breakpoint="960px"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                dataKey="id"
                paginator={pagination}
                sortMode='multiple'
                filters={filters}
                emptyMessage="No data found."
                className="datatable-responsive"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} posts"
                rows={10}
            >
                {columns.map((col) => (
                    <Column key={col.field}
                        field={col.field} header={col.header}
                        sortable={col.sortable} filter={col.filter}
                        filterMatchMode={col.filterMatchMode} />
                ))}

            </DataTable>

        </div>
    )
}

export default TableC