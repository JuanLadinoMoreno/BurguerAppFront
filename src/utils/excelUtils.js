import * as XLSX from 'xlsx';

export const utilsExportToExcel = (data, book, name) => {

        // const data = salesDataCopy.map(ticket => {
        //     return ({
        //         Codigo: ticket.code,
        //         // user: ticket.user.firstName + ticket.user.lastName,
        //         Vendedor: ticket.user != null ? ticket.user.firstName + ticket.user.lastName : '',
        //         Cliente: ticket.customer != null ? ticket.customer.firstName + ticket.customer.lastName : '',
        //         EmailCliente: ticket.customer != null ? ticket.customer.email : '',
        //         FechaVenta: new Date(ticket.purchase_datetime).toLocaleDateString('es-ES'),
        //         Monto: ticket.amount,
        //     })
        // })

        // Crea una hoja de trabajo con los datos
        const ws = XLSX.utils.json_to_sheet(data);

        // Crea un libro de trabajo y añade la hoja
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, book);

        // Genera el archivo Excel
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });

        // Guarda el archivo usando FileSaver
        const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
        saveAs(blob, `${name}.xlsx`);
    };